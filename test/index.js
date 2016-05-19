const test = require('ava')
const webpack = require('webpack')
const path = require('path')
const fs = require('fs')

const fixturesPath = path.join(__dirname, 'fixtures')

test.cb('basic text content works correctly', (t) => {
  const outputPath = path.join(fixturesPath, 'build.js')
  webpack({
    context: fixturesPath,
    entry: path.join(fixturesPath, 'basic'),
    output: { path: fixturesPath, filename: 'build.js' },
    resolveLoader: {
      alias: { source: path.join(__dirname, '../lib/index.js') }
    },
    module: { loaders: [{ test: /\.txt$/, loader: 'source' }] }
  }, (err, res) => {
    if (err) { t.fail(err) }
    t.truthy(res.compilation.errors.length < 1)
    const src = fs.readFileSync(outputPath, 'utf8')
    t.truthy(src.match(/hello there!/))
    fs.unlinkSync(outputPath)
    t.end()
  })
})

test.cb('raw source is added to loader context', (t) => {
  webpack({
    context: fixturesPath,
    entry: path.join(fixturesPath, 'basic'),
    output: { path: fixturesPath, filename: 'build.js' },
    resolveLoader: {
      alias: { source: path.join(__dirname, '../lib/index.js') }
    },
    module: { loaders: [{ test: /\.txt$/, loader: 'source' }] }
  }, (err, res) => {
    if (err) { t.fail(err) }
    const mod = res.compilation.modules.find((m) => {
      return m.rawRequest === './hello.txt'
    })
    t.truthy(Buffer.isBuffer(mod._src))
    t.is(String(mod._src).trim(), 'hello there!')
    t.end()
  })
})
