const mongoose = require('mongoose')

const Schema = mongoose.Schema

const userSchema = new Schema({
    login: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    patronymic: {
        type: String
    },
    birthDate: {
        type: String
    },
    isManager: {
        type: Boolean,
        default: false
    },
    isBan: {
        type: Boolean,
        default: false
    }
})

module.exports = mongoose.model('User', userSchema)
