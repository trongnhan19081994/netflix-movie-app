const express = require('express')
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const authRoute = require('./routes/auth')
const usersRoute = require('./routes/users')

dotenv.config()

app.use(express.json())

mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}).then(() => console.log('DB connection successfull!'))
    .catch((error) => console.log(error))

app.use('/api/auth', authRoute)
app.use('/api/users', usersRoute)

app.listen(8800, () => {
    console.log("Backend server is running!")
})