const express = require('express')
const router = express.Router()
const { Artists } = require('../models')



router.get('/', async (req, res) => {
    try{
        res.json(await Artists.find({}))
    } catch(err) {
        res.status(400).json(err)
    }
})

router.post('/', async (req, res) => {
    console.log(req.body)
    try{
        res.json(await Artists.create(req.body))
    } catch(err) {
        res.status(400).json(err)
    }    
})

router.get("/:id", async (req, res) => {
    try {
      // send one person
      res.json(await Artists.findById(req.params.id));
    } catch (error) {
      //send error
      res.status(400).json(error);
    }
  })


module.exports = router