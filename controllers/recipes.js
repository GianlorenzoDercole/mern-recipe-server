const db = require('../models')
const router = require('express').Router()

router.post('/', async (req, res) => {
    try {
        const newRecipe = await db.Recipe.create(req.body)
        res.status(201).json(newRecipe)
    } catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
})

module.exports = router
