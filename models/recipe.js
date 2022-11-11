const mongoose = require('mongoose')

// ingredient schema
const IngredientSchema = new mongoose.Schema({
    ingredient: String,
    amount: Number
}, {
    timestamps: true
})

// recipe schema
const RecipeSchema = new mongoose.Schema({
    recipe: String,
    ingredients: [IngredientSchema],
    instructions: String
})

// export recipe schema
module.exports = mongoose.model('Recipe', RecipeSchema )
