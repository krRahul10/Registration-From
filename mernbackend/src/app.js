const express = require('express')
require('./db/connection')
const path = require('path')
const hbs = require('hbs')
const app = express()
const port = process.env.PORT || 8080


const staticPath= path.join(__dirname,"../public")
const templatePath = path.join(__dirname,"../templates/views")
const partials_path = path.join(__dirname,"../templates/partials")

app.use(express.static(staticPath))


app.set('view engine', 'hbs')
app.set("views", templatePath);
hbs.registerPartials(partials_path)


app.get("/",(req, res) => {
    res.render("index")
})

app.listen(port, () => {
    console.log(`server started at http:localhost:${port}`)
})