const razzleHeroku = require("razzle-heroku")

module.exports = {
  modify: (config, { target, dev }, webpack) => {
    const appConfig = razzleHeroku(config, { target, dev }, webpack)

    appConfig.resolve.modules.unshift("./src")

    // if (target === 'web')
    //   appConfig.plugins.push(new BundleAnalyzerPlugin())

    return appConfig
  }
}
