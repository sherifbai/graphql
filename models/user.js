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
    first_name: {
        type: String
    },
    last_name: {
        type: String
    },
    patronymic: {
        type: String
    },
    birth_date: {
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
