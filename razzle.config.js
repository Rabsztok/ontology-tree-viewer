const razzleHeroku = require("razzle-heroku")

module.exports = {
  modify: (config, { target, dev }, webpack) => {
    const appConfig = razzleHeroku(config, { target, dev }, webpack)

    appConfig.resolve.modules.unshift("./src")

    if (target === "node" && process.env.PUBLIC_PATH) {
      appConfig.output.publicPath = process.env.PUBLIC_PATH
    }

    return appConfig
  }
}
