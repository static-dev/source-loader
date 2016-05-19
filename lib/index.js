module.exports = function (source) {
  this.cacheable && this.cacheable()
  this._module._src = source
  return 'module.exports = ' + JSON.stringify(String(source))
}
module.exports.raw = true
