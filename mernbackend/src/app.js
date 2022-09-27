const express = require('express')
require('./db/connection')
const app = express()

const port = process.env.PORT || 8080
app.get("/",(req, res) => {
    res.send("hello from registration page home")
})

app.listen(port, () => {
    console.log(`server started at http:localhost:${port}`)
})