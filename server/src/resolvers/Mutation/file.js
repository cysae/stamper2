const processUpload = require('./processUpload')

const file = {
  async uploadFile(parent, { file }, ctx, info) {
    return await processUpload(await file, ctx)
  }

}

module.exports = { file }
