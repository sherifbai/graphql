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
    
    type RootQuery {
        hello: String!
    }

    type RootMutation {
        createUser(userInput: UserInputData): User!
    }
    
    schema {
        query: RootQuery
        mutation: RootMutation
    }
`)