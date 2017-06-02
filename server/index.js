const express = require('express')
const bodyparser = require('body-parser')
const proxy = require('http-proxy-middleware')
const api = require('./api')
const server = express()

server.set('port', process.env.PORT || 8088)
server.use(bodyparser.json())
server.use(bodyparser.urlencoded({ extended: false }))

server.use('/static', express.static('static'))
server.use('/v2', proxy({
    target: 'http://api.douban.com',
    changeOrigin: true,
    headers: {
        Referer: 'http://api.douban.com'
    }
}))

api(server)

server.get('/', function(req, res) {
    res.sendfile(__dirname + '/index.html')
})
server.listen(server.get('port'))
console.log('success listen at :' + server.get('port'))