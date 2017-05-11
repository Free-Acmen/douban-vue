const express = require('express')
const proxy = require('http-proxy-middleware')

const app = express()
app.use('/static', express.static('static'))
app.use('/v2', proxy({
    target: 'http://api.douban.com',
    changeOrigin: true,
    headers: {
        Referer: 'http://api.douban.com'
    }
}))

app.get('/', function(req, res){
    res.sendfile(__dirname + '/index.html')
})
app.listen(8088)
console.log('success listen 8088…………');