var webpack = require('webpack')
var serverConf = require('./webpack.server.conf')
var vueLoaderConfig = require('./vue-loader.conf')
var ora = require('ora')

var spinner = ora('building for servedr...')
spinner.start()

webpack(serverConf, function(err, stats) {
    spinner.stop()
    if (err) throw err
    process.stdout.write(stats.toString({
        colors: true,
        modules: false,
        children: false,
        chunks: false,
        chunkModules: false
    }) + '\n\n')
})