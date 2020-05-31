var mongoose = require('mongoose')


const recipeSchema = new mongoose.Schema({
    
    title:{ type: String },
    description:{ type: String },
    calories:{ type: Number},
    nutritionfacts: {
        proteines: { type: Number },
        carbohydrates: { type: Number },
        fats: { type: Number}
      },
    recipe_picture:{ type: String },
    active:{ type: Boolean }

})


module.exports = Recipe = mongoose.model("Recipe", recipeSchema);
