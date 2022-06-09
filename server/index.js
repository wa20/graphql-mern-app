require('dotenv').config()
const express = require('express')
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema.js')



const port = process.env.PORT || 5000


const app = express()
app.use('/greapql', graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV = 'development'

}))

app.listen(port, console.log(`server running on Port ${port}`))