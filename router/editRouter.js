const express = require('express')
const router = express.Router()
const dbCon = require('../database.js')

router.get('/edit(:id)',(req,res) =>{
    const id = req.params.id
    const query = `SELECT * FROM memes WHERE id = ${id}`

    dbCon.query(query, (err, results) =>{
        if(err) {
            console.log(err)
        }
        console.log(results)
        res.render('edit',{memes:results})
    })
})

module.exports = router