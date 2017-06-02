const user = require('./handlers/main')

module.exports = function(server) {
    server.get('/api/login', user.login)
    server.get('/api/registered', user.registered)
}