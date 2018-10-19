const processUpload = require('./processUpload')

const document = {
  async uploadFile(parent, { file }, ctx, info) {
    return await processUpload(await file, ctx)
  }

}

module.exports = { document }
