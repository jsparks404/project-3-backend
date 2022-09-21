const express = require('express')
const router = express.Router()
const { Albums } = require('../models')



router.get('/', async (req, res) => {
    try{
        res.json(await Albums.find({}))
    } catch(err) {
        res.status(400).json(err)
    }
})

router.post('/', async (req, res) => {
    console.log(req.body)
    try{
        res.json(await Albums.create(req.body))
    } catch(err) {
        res.status(400).json(err)
    }    
})



module.exports = router