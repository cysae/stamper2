const axios = require('axios')
const moment = require('moment')
const Stampery = require('stampery')
const { getUserId } = require('../utils')
const stampery = new Stampery(process.env.STAMPERY_SECRET)


const Query = {
  feed(parent, args, ctx, info) {
    return ctx.db.query.posts({ where: { isPublished: true } }, info)
  },
  drafts(parent, args, ctx, info) {
    const id = getUserId(ctx)
    const where = {
      isPublished: false,
      author: {
        id
      }
    }

    return ctx.db.query.posts({ where }, info)
  },
  async getReceipt(parent, args, ctx, info) {
    // getReceipt from stampery
    // buscar datos ( MySQL, API, ...)
    // transformar datos

    const res = (
      await axios({
        method: 'get',
        url: `https://api-prod.stampery.com/stamps/${args.stamperyId}`,
        auth: {
          username: process.env.STAMPERY_CLIENT_ID,
          password: process.env.STAMPERY_SECRET
        },
      })
    ).data.result[0]

    let certificate
    try {
      const pdf = (
        await axios({
          method: 'get',
          url: `https://api-prod.stampery.com/stamps/${args.stamperyId}.pdf`,
          auth: {
            username: process.env.STAMPERY_CLIENT_ID,
            password: process.env.STAMPERY_SECRET
          },
          responseType: 'arraybuffer',
        })
      ).data
      certificate = new Buffer(pdf, 'binary').toString('base64')
    } catch(err) {
      certificate = 'notReady'
    }

    let { eth, btc } = res.receipts

    let ethIsPending = true
    if( typeof eth === 'object') {
      eth = JSON.stringify(eth)
      ethIsPending = false
    } else {
      eth = moment().add(eth, 'seconds').toISOString()
    }

    let btcIsPending = true
    if( typeof btc === 'object') {
      btc = JSON.stringify(btc)
      btcIsPending = false
    } else {
      btc = moment().add(eth, 'seconds').toISOString()
    }

    return {
      btc,
      btcIsPending,
      eth,
      ethIsPending,
      certificate,
    }
  },
  async verifyHash(parent, { hash }, ctx, info) {
    const stamp = (await stampery.getById(hash))[0]
    return stampery.prove(stamp.receipts.eth)
  },
  post(parent, { id }, ctx, info) {
    return ctx.db.query.post({ where: { id } }, info)
  },
  me(parent, args, ctx, info) {
    const id = getUserId(ctx)
    return ctx.db.query.user({ where: { id } }, info)
  },
}

module.exports = { Query }
