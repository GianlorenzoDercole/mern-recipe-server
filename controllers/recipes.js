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


// GET /recipes/:id -- details on one task
router.get('/:id', async (req, res) => {
    try {
        // get the id of a task from the url params
        console.log(req.params.id)
        const recipe = await db.Recipe.findById(req.params.id)

        // send task back to client
        res.json(recipe)
    } catch {
        console.log(err)
    }
})

// GET /recipes -- index of tasks
router.get('/', async (req, res) => {
    try {
        // find all tasks
        const recipes = await db.Recipe.find({})
        // send them to clinet
        res.json(recipes)
    } catch {
        console.log(err)
    }
})


// PUT /recipes/:id -- update a task
router.put('/:id', async (req, res) => {
    try {
        // get the id from the url params
        const id = req.params.id
        // search for the id, in the db and update using req.body
        const options = { new: true } // return the updated task to us
        const updatedRecipe = await db.Recipe.findByIdAndUpdate(id, req.body, options)
        // send the updated task back to the client
        res.json(updatedRecipe)
    } catch {
        console.log(err)
    }
})

// DELETE /tasks/:id -- destroy a task
router.delete('/:id', async (req, res) => {
    try {
        // get the id from the req.params
        const id = req.params.id
        // delete that task in the db
        await db.Recipe.findByIdAndDelete(id)

        // send 'no content' status
        res.sendStatus(204) // was succesful -- nothing exists
    } catch {
        console.log(err)
    }
})

module.exports = router
