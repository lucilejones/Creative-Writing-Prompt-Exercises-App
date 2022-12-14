const express = require('express')
const app = express()
require('dotenv').config()
const morgan = require('morgan')
const mongoose = require('mongoose')
const { expressjwt: jwt } = require('express-jwt')

process.env.SECRET

// middleware
app.use(express.json())
app.use(morgan('dev'))

// connect to the database
mongoose.connect(
    'mongodb://localhost:27017/creative-writing-db',
    () => console.log("Connected to the Database")
)

// routes


// error handler
app.use((err, req, res, next) => {
    console.log(err)
    if (err.name === "UnauthorizedError") {
        res.status(err.status)
    }
    return res.send({ errMsg: err.message })
})

// server listen
app.listen(8000, () => {
    console.log("Server is running on local port 8000")
})