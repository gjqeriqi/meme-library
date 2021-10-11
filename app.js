const express = require('express')
const app = express()

app.set('view engine','ejs')

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

const home = require('./router/homeRouter')
const upload = require('./router/uploadRouter')

app.use("/",home)
app.use('/upload',upload)

const port = 8080

app.listen(port, () => console.log(`Server up and running on port: ${port} !`))
