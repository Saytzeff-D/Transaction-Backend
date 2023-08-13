const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
    email: String,
    name: String
})

const UserModel = mongoose.model('user_tbs', UserSchema)
module.exports = UserModel