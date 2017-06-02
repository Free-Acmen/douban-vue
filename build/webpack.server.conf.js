var path = require('path')
var fs = require('fs')
var webpack = require('webpack')
var config = require('../config')
var merge = require('webpack-merge')
var baseWebpackConfig = require('./webpack.base.conf')
var nodeModules = {}

fs.readdirSync('node_modules')
    .filter(function(x) {
        return ['.bin'].indexOf(x) === -1
    })
    .forEach(function(mod) {
        nodeModules[mod] = 'commonjs ' + mod
    })

var webpackServerConfig = merge(baseWebpackConfig, {
    target: "node",
    context: path.join(__dirname, "./"),
    entry: {
        index: './server/index.js'
    },
    externals: nodeModules,
    output: {
        path: path.resolve(__dirname, "./dist"), //静态资源会再这目录下
        filename: "server.js"
            // publicPath: "/", //html里面的引用路径会变成这个
            // libraryTarget: "commonjs2"
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        }),
        new webpack.IgnorePlugin(/vertx/)
    ],

})

webpack(webpackServerConfig)