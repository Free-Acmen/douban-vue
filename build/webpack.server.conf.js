var path = require('path')
var fs = require('fs')
var webpack = require('webpack')

var nodeModules = {}

fs.readdirSync('node_modules')
    .filter(function(x) {
        return ['.bin'].indexOf(x) === -1
    })
    .forEach(function(mod) {
        nodeModules[mod] = 'commonjs ' + mod
    })

module.exports = {
    entry: '../server/index.js',
    output: {
        path: path.resolve(__dirname, '../serverdist'),
        filename: 'server.js'
    },
    target: "node",
    externals: nodeModules,
    context: __dirname,
    node: {
        __filename: false,
        __dirname: false
    },
    module: {
        rules: [{
                test: /\.vue$/,
                loader: 'vue-loader',
                options: vueLoaderConfig
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: [
                    path.resolve(__dirname, "node_modules"),
                ]
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        }),
        new webpack.IgnorePlugin(/vertx/)
    ]
}