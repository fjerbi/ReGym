var express = require("express");
var router = express.Router();
const uuid = require("uuid");
const mongoose = require("mongoose"),
  models = require("../../models/Recipe");
  const Recipe = require("../../models/Recipe");
//Routes for '/api/'

//call for adding a new sites (requires authentication)
router.post("/", function(req, res) {
  console.log(req.body);
  var newRecipe= new models.Recipe({
    title: req.body.title,
    description: req.body.description,
    calories: req.body.calories,
    target: req.body.target,
    budget: req.body.budget,
    nutritionfacts: {
      proteines: req.body.proteines,
      carbohydrates: req.body.carbohydrates,
      fats: req.body.fats
    },
    recipe_picture: req.body.recipe_picture,
    active: req.body.active,
    date: new Date()
  });

  newRecipe.save(function(err, newRecipe) {
    if (err) {
      res.send({ error: "error creating website" });
      return console.error(err);
    } else {
      res.send({ status: "Recipe created  successful" });
      return;
    }
  });
});

// READ (ALL)
router.get("/", (req, res) => {
  models.Recipe.find({})
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
  models.Recipe.find({ _id: req.params.id }).remove(function(err, obj) {
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
  models.Recipe.update(
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



router.get("/recipeendomorph", (req, res) => {
  models.Recipe.find({target:"endomorph"})
    .then(result => {
      res.json(result);
    })
    .catch(err => {
      res
        .status(500)
        .json({ success: false, msg: `Something went wrong. ${err}` });
    });
});



router.get("/recipeectomorph", (req, res) => {
  models.Recipe.find({target:"ectomorph"})
    .then(result => {
      res.json(result);
    })
    .catch(err => {
      res
        .status(500)
        .json({ success: false, msg: `Something went wrong. ${err}` });
    });
});


router.get("/recipemesomorph", (req, res) => {
  models.Recipe.find({target:"mesomorph"})
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
