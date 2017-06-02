module.exports = function(mongoose) {
    const userSchema = mongoose.Schema({
        authId: String,
        name: String,
        pwd: String,
        email: String,
        phone: String,
        created: Date
    })
    const User = mongoose.model('User', userSchema)
    return User
}