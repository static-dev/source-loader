module.exports = function (source, map) {
  this.cacheable && this.cacheable()
  return 'module.exports = ' + JSON.stringify(source)
}
