const { buildSchema } = require('graphql')

module.exports = buildSchema(`
    
    type User {
        id: ID!
        login: String!
        email: String!
        password: String!
        firstName: String!
        lastName: String!
        patronymic: String!
        birthDate: String!
        isManager: Boolean!
        isBan: Boolean!
    }
    
    
    input UserInputData {
        login: String!
        email: String!
        password: String!
        firstName: String!
        lastName: String!
        patronymic: String!
        birthDate: String!
    }
    
    type AuthData {
        token: String!
        userId: String!
    }
    
    type UserReturn {
        login: String!
        email: String!
    }
    
    
    
    type RootQuery {
        findUser(login: String!, isManager: Boolean!, isBan: Boolean!): [UserReturn!]!
        findBan(isBan: Boolean!): [UserReturn!]!
        findManagers(isManager: Boolean!): [UserReturn!]!
        findByLogin(login: String!): [UserReturn!]!
        login(email: String!, password: String!): AuthData!
    }

    type RootMutation {
        createUser(userInput: UserInputData): User!
    }
    
    schema {
        query: RootQuery
        mutation: RootMutation
    }
`)
