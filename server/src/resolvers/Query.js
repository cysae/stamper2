const { getUserId } = require('../utils')

const Query = {
  feed(parent, args, ctx, info) {
    return ctx.db.query.posts({ where: { isPublished: true } }, info)
  },

  drafts(parent, args, ctx, info) {
    const id = getUserId(ctx)
console.log('userId', id)
    const where = {
      isPublished: false,
      author: {
        id
      }
    }

    return ctx.db.query.posts({ where }, info)
  },
//////////////////////////////////
  documents(parent, args, ctx, info) {
    const id = getUserId(ctx)

    const where = {
      owner: {
        id
      }
    }

    return ctx.db.query.documents({ where }, info)
  },
  post(parent, { id }, ctx, info) {
    return ctx.db.query.post({ where: { id } }, info)
  },
/////////////////////////////////
  post(parent, { id }, ctx, info) {
    return ctx.db.query.post({ where: { id } }, info)
  },

  me(parent, args, ctx, info) {
    const id = getUserId(ctx)
    return ctx.db.query.user({ where: { id } }, info)
  },
}

module.exports = { Query }
