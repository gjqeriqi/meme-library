const express = require('express')
const router = express.Router()
const dbCon = require('../database.js')

router.post('/edited', (req, res) => {
    const id = req.params.id
    const title = req.body.title
    const des = req.body.des
    const url = req.body.url

    const query = `UPDATE memes SET title="${title}",des="${des}",url="${url}" WHERE id =${id})`
    dbCon.execute(query)

    res.redirect('/')
})

module.exports = router