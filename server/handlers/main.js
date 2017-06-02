var Models = require('../mongodb/mongoModel')

exports.login = function(req, res) {
    res.send('123login')
}

exports.registered = function(req, res) {
    let userPerson = new Models.User({
        authId: '1',
        name: 'admin',
        pwd: 'admin',
        email: 'lmllsq@126.com',
        phone: '18695875698',
        created: '121215112'
    })
    userPerson.save(function(err, data) {
        if (err) {
            res.send(err)
        } else {
            res.send('registered success')
        }
    })
}