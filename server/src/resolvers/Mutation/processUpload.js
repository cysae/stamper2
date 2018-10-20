const uuid = require('uuid/v1')
const aws = require('aws-sdk')
const crypto = require('crypto')
const axios = require('axios')
const { getUserId } = require('../../utils')
const moment = require('moment')
const Stream = require('stream');
aws.config.update({ region: 'eu-west-1' })

const s3 = new aws.S3({
  params: {
    Bucket: 'stamper-storage'
  },
  endpoint: 'https://s3.eu-west-1.amazonaws.com'
})

const getFileHash = (fileStream) => {
  return new Promise((resolve, reject) => {
    const hash = crypto.createHash('sha256');
    hash.setEncoding('hex')

    fileStream.on('end', function() {
      hash.end();
      resolve(hash.read())
    });

    // read all file and pipe it (write it) to the hash object
    fileStream.pipe(hash);
  })
}

const stampFile = (hash) => {
  return axios({
    method: 'post',
    url: 'https://api-prod.stampery.com/stamps',
    data: {
      hash
    },
    auth: {
      username: process.env.STAMPERY_CLIENT_ID,
      password: process.env.STAMPERY_SECRET
    },
  }).then(({ data: { result } }) => result)
    .catch(err => {
      throw err
    })
}

const processUpload = async (upload, ctx) => {
  if (!upload) {
    return console.error('ERROR: No file received')
  }

  try {
    const { stream, filename, mimetype, encoding } = await upload
    const key = uuid() + '-' + filename

    const copyStream1 = new Stream.PassThrough(),
          copyStream2 = new Stream.PassThrough();
    stream.pipe(copyStream1);
    stream.pipe(copyStream2);

    const hash = await getFileHash(copyStream1)
    // stamperyFile = { time, receipts: { eth, btc }, id }
    const stamperyFile = await stampFile(hash)
    // eth, btc yield approx. time in second until blockchain stamping
    const { eth, btc } = stamperyFile.receipts

    const response = await s3
          .upload({
            Key: key,
            ACL: 'public-read',
            Body: copyStream2
          }).promise()

    const url = response.Location

    const data = {
      filename,
      mimetype,
      encoding,
      url,
      stamperyId: stamperyFile.id,
      stampedAt: moment(stamperyFile.time).toISOString(),
      hash,
      readyAt: (eth < btc) ?
        moment().add(eth, 'seconds').toISOString()
        : moment().add(btc, 'seconds').toISOString(),
      owner: { connect: { id: getUserId(ctx) }}
    }

    const { id } = await ctx.db.mutation.createFile({ data }, '{ id }' )

    const file = {
      id,
      filename,
      mimetype,
      encoding,
      url
    }

    console.log('saved prisma file:')
    console.log(file)

    return file

  } catch(err) {
    console.error('error: ', err)
  }
}

module.exports = processUpload
