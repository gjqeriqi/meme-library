const express = require('express')
const app = express()

app.use('/static',express.static('static'))
app.set('view engine','ejs')

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

const home = require('./router/homeRouter')
const upload = require('./router/uploadRouter')
const edit = require('./router/editRouter')
const edited = require('./router/editedRouter')

app.use("/",home)
app.use(upload)
app.use(edit)
app.use(edited)

const port = 8080

app.listen(port, () => console.log(`Server up and running on port: ${port} !`))
