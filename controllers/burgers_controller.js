const express = require("express");
const burger = require("../models/burger");
const router = express.Router();

router.get("/", function(request, response) {
    burger.selectAll(function(data) {
      let hbsObject = {
        burgers: data
      };
      console.log(hbsObject);
      response.render("index", hbsObject);
    });
  });
  
  router.post("/api/burgers", function(request, response) {
    burger.insertOne([
      "burger_name", "devoured"
    ], [
      request.body.burger_name, request.body.devoured
    ], function(result) {
   const express = require("express");
  const burger = require("../models/burger");
  const router = express.Router();
  
  
  router.get("/", function(request, response) {
      burger.selectAll(function(data) {
        let hbsObject = {
          burgers: data
        };
        console.log(hbsObject);
        response.render("index", hbsObject);
      });
    });
    
    router.post("/api/burgers", function(request, response) {
      burger.insertOne([
        "Burger_name", "devoured"
      ], [
        request.body.burger_name, request.body.devoured
      ], function(result) {
        response.json({ id: result.insertId });
      });
    });
    
    router.put("/api/burgers/:id", function(request, response) {
      let condition = "id = " + request.params.id;
    
      console.log("condition", condition);
    
      burger.updateOne({
        devoured: request.body.devoured
      }, condition, function(result) {
        if (result.changedRows == 0) {
          return response.status(404).end();
        } else {
          response.status(200).end();
        }
      });
    });
    
  module.exports = router;     response.json({ id: result.insertId });
    });
  });
  
  router.put("/api/burgers/:id", function(request, response) {
    let condition = "id = " + request.params.id;
  
    console.log("condition", condition);
  
    burger.updateOne({
      devoured: request.body.devoured
    }, condition, function(result) {
      if (result.changedRows == 0) {
        return response.status(404).end();
      } else {
        response.status(200).end();
      }
    });
  });

module.exports = router;