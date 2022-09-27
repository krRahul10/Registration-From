const express = require('express')
require('./db/connection')
const path = require('path')

const app = express()
const port = process.env.PORT || 8080
// console.log(path.join(__dirname,"../public"))
const staticPath= path.join(__dirname,"../public")
app.use(express.static(staticPath))


app.get("/",(req, res) => {
    res.send("hello from registration page home")
})

app.listen(port, () => {
    console.log(`server started at http:localhost:${port}`)
})