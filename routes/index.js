var express = require("express");
var router = express.Router();
const ProjectModel = require("../models/projects.js");

/* GET home page. */
router.get("/", function (req, res, next) {
  ProjectModel.find()
    .then((result) => {
      console.log(result);
      res.render("index", { result });
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
