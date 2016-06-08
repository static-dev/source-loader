const isBinaryPath = require('is-binary-path')
const url = require('url')

module.exports = function (source) {
  this.cacheable && this.cacheable()
  this._module._src = source

  const path = url.parse(this.request).pathname.match(/!(.*)$/)[1]
  let src = 'module.exports = '
  if (isBinaryPath(path)) {
    src += '"binary"'
  } else {
    src += JSON.stringify(String(source))
  }
  return src
}
module.exports.raw = true
