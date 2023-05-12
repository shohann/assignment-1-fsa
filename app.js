const express = require('express')
const routers = require('./route')
require('dotenv').config()

const app = express()
const port = process.env.PORT

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/api', routers)

app.listen(port, () => {
    console.log('server starting at 3000')
})