const uuid = require('uuid/v1')
const aws = require('aws-sdk')
aws.config.update({ region: 'eu-west-1' })

console.log(process.env)

const s3 = new aws.S3({
  params: {
    Bucket: 'stamper-storage'
  },
  endpoint: 'https://s3.eu-west-1.amazonaws.com'
})

const processUpload = async (upload, ctx) => {
  if (!upload) {
    return console.error('ERROR: No file received')
  }

  const { stream, filename, mimetype, encoding } = await upload
  const key = uuid() + '-' + filename

  const response = await s3
        .upload({
          Key: key,
          ACL: 'public-read',
          Body: stream
        }).promise()

  const url = response.Location

  const data = {
    filename,
    mimetype,
    encoding,
    url
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
}

module.exports = processUpload
