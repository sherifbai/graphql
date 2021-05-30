const bcrypt = require('bcrypt')

const User = require('../models/user')

module.exports = {
    createUser: async function({userInput}, req) {
        const login = userInput.login
        const email = userInput.email
        const password = userInput.password
        const firstName = userInput.firstName
        const lastName = userInput.lastName
        const patronymic = userInput.patronymic
        const birthDate = userInput.birthDate

        const existingEmail = await User.findOne({email: userInput.email})

        if (existingEmail) {
            const error = new Error('E-mail уже существует!')
            throw error
        }
        const hashedPw = await bcrypt.hash(password, 12)

        const user = new User({
            login: login,
            email: email,
            password: hashedPw,
            firstName: firstName,
            lastName: lastName,
            patronymic: patronymic,
            birthDate: birthDate
        })

        const createdUser = await user.save()

        return {
            ...createdUser._doc,
            _id: createdUser._id.toString()
        }
    },
    findByLogin: async function({ login }, req) {
        const user = await User.find({login: login})

        return user
    },
    findManagers: async function({isManager}, req) {
        const user = await User.find({isManager: isManager})

        return user
    }
}