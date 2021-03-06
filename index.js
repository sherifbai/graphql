const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const { graphqlHTTP } = require('express-graphql');


const graphqlSchema = require('./graphql/schema')
const graphqlResolves = require('./graphql/resolvers')


const app = express()

app.use(bodyParser.json())

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
})


app.use('/graphql', graphqlHTTP({
    schema: graphqlSchema,
    rootValue: graphqlResolves,
    graphiql: true,
    customFormatErrorFn (error) {
        if (!error.originalError){
            return error
        }
        const data = error.originalError.data
        const message = error.message || "An error occurred "
        const code = error.originalError.code

        return {data: data, status: code, message: message}
    }
}))


app.use(function (error, req, res, next) {
    console.log(error);
    const status = error.statusCode || 500;
    const message = error.message;
    const data = error.data;
    res.status(status).json({ message: message, data: data });
})


const url = "mongodb+srv://Sherif:5P86BeLIEsytx1Xg@cluster0.qwr9u.mongodb.net/graphql?retryWrites=true&w=majority"

mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false}).then(result =>{
    app.listen(8080)
    console.log('Connected!!!')
})
