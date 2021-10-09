const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const dotenv = require('dotenv')
const cors = require('cors')

app.use(cors())
dotenv.config({ path: "./config.env" })

const port = process.env.PORT || 5000
require('./db/conn')

// middleware
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

// set cookie parser
app.use(cookieParser())

// components
app.use(require("./router/route"))

if (process.env.NODE_ENV === 'production') {
    app.use(express.static("redux-app/build"))
}


app.listen(port, function () {
    console.log("app is running on port " + port);
})