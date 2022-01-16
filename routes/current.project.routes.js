var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("project-views/current-project", { title: "current" });
});

module.exports = router;
