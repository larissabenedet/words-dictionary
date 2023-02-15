module.exports = function (api) {
  api.cache(true)
  return {
    presets: [
      ['@babel/preset-env', { targets: { esmodules: true } }],
      ['@babel/preset-react', { runtime: 'automatic' }],
    ],
  }
}
