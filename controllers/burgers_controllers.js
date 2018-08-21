var express = require("express");

var router = express.Router();

// Import the model (cat.js) to use its database functions.
var burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
    burger.selecttable(function(data) {
      var hbsObject = {
        burger: data
      };
      console.log(hbsObject);
   res.render("index", hbsObject);
    });
  });

  router.post("/api/newburger", function(req, res) {
    burger.create(["burger_name"], [req.body.name], function(result) {
      // Send back the ID of the new quote
    //   console.log(req.body.name);
    //   console.log("result"+result);
      res.json({ id: result.insertId });
    });
  });

  router.put("/api/burger/:id", function(req, res) {
    var condition = "id = " + req.params.id;
  
    console.log("condition", condition);
  
    burger.update(
      {
        devoured: req.body.devoured
      },
      condition,
      function(result) {
        if (result.changedRows === 0) {
          // If no rows were changed, then the ID must not exist, so 404
          return res.status(404).end();
        }
        res.status(200).end();
  
      }
    );
  });
module.exports = router;