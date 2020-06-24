var mongoose = require('mongoose')


const workoutSchema = new mongoose.Schema({
    
    title:{ type: String },
    description:{ type: String },
    target:{type:String},
    days:{
type:Array
    },
    workout_picture:{ type: String },
    active:{ type: Boolean }

})


const Workout = mongoose.model("Meal", workoutSchema);

module.exports = {
    Workout: Workout
};
