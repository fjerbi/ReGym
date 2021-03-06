var mongoose = require('mongoose')


const recipeSchema = new mongoose.Schema({
    
    title:{ type: String },
    description:{ type: String },
    calories:{ type: Number},
    target:{type:String},
    budget:{type:String},
    nutritionfacts: {
        proteines: { type: Number },
        carbohydrates: { type: Number },
        fats: { type: Number}
      },
    recipe_picture:{ type: String },
    active:{ type: Boolean }

})


const Recipe = mongoose.model("Recipe", recipeSchema);

module.exports = {
  Recipe: Recipe
};
