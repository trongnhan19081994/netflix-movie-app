const express = require('express')
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv')

dotenv.config()

mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('DB connection successfull!'))
    .catch((error) => console.log(error))

app.listen(8800, () => {
    console.log("Backend server is running!")
})