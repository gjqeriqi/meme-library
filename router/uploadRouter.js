const express = require('express')
const router = express.Router()
const dbCon = require('../database.js')

router.get('/upload',(req, res) =>{
    res.render('upload')
    if (err) {
        console.log(err)
    }
})

router.post('/postmeme', (req, res) => {
    const title = req.body.title
    const des = req.body.des
    const url = req.body.url

    const query = `INSERT INTO memes(title,des,url) VALUES("${title}","${des}","${url}")`
    dbCon.execute(query)

    res.redirect('/')
})

module.exports = router