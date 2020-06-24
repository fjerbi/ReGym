var express = require("express");
var router = express.Router();
const uuid = require("uuid");
const mongoose = require("mongoose"),
  models = require("../../models/Workout");
  const Workout = require("../../models/Workout");
//Routes for '/api/'

//call for adding a new sites (requires authentication)
router.post("/", function(req, res) {
  console.log(req.body);
  var newWorkout= new models.Workout({
    title: req.body.title,
    description: req.body.description,
    target: req.body.target,
    days: req.body.days,
    workout_picture: req.body.recipe_picture,
    active: req.body.active,
    date: new Date()
  });

  newWorkout.save(function(err, newWorkout) {
    if (err) {
      res.send({ error: "error creating workout" });
      return console.error(err);
    } else {
      res.send({ status: "workout created  successful" });
      return;
    }
  });
});

// READ (ALL)
router.get("/", (req, res) => {
  models.Workout.find({})
    .then(result => {
      res.json(result);
    })
    .catch(err => {
      res
        .status(500)
        .json({ success: false, msg: `Something went wrong. ${err}` });
    });
});


//call for deleting a site (requires authentication)
router.delete("/:id", function(req, res) {
  models.Workout.find({ _id: req.params.id }).remove(function(err, obj) {
    if (err) return console.error(err);
    else {
      if (obj.result.n === 0) {
        res.send({ error: "invalid Site id" });
      } else {
        res.send({ status: "Site deleted" });
      }
    }
  });
});

//call for updading a site (requires authentication)
//just testing the rest of the attributes will be added
router.put("/:id", function(req, res) {
  models.Workout.update(
    { _id: req.params.id }, //condition

    req.body, //info updated
    function(err, obj) {
      if (err) return console.error(err);
      else {
        if (obj.n === 0) {
          res.send({ error: "invalid site id" });
        } else {
          res.send({ status: "site updated" });
        }
      }
    }
  );
});



router.get("/workoutendomorph", (req, res) => {
  models.Workout.find({target:"endomorph"})
    .then(result => {
      res.json(result);
    })
    .catch(err => {
      res
        .status(500)
        .json({ success: false, msg: `Something went wrong. ${err}` });
    });
});



router.get("/workoutectomorph", (req, res) => {
  models.Workout.find({target:"ectomorph"})
    .then(result => {
      res.json(result);
    })
    .catch(err => {
      res
        .status(500)
        .json({ success: false, msg: `Something went wrong. ${err}` });
    });
});


router.get("/workoutmesomorph", (req, res) => {
  models.Workout.find({target:"mesomorph"})
    .then(result => {
      res.json(result);
    })
    .catch(err => {
      res
        .status(500)
        .json({ success: false, msg: `Something went wrong. ${err}` });
    });
});
module.exports = router;
