const express = require('express')
const router = express.Router()
const dbCon = require('../database.js')

router.get('/', (req, res) => {
    const query = `SELECT * FROM memes`
    dbCon.query(query, (err, results, fields) => {
        if (err) {
            console.log(err)
        }

        res.render('home', { memes: results })
    })

})
module.exports = router