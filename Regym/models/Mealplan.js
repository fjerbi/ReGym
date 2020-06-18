var mongoose = require('mongoose')


const mealplanSchema = new mongoose.Schema({
    
    title:{ type: String },
    description:{ type: String },
    calories:{ type: Number},
    target:{type:String},
    budget:{type:String},
    meals:{
type:Array
    },
    nutritionfacts: {
      type:Array
      },
    meal_picture:{ type: String },
    active:{ type: Boolean }

})


const Meal = mongoose.model("Meal", mealplanSchema);

module.exports = {
  Meal: Meal
};
