var express = require("express");
var router = express.Router();
let x = Math.random() * 100;

/* GET computation page. */
router.get("/", function (req, res, next) {
  //Math.round()
  if (req.query.x) {
    x = req.query.x;
  }
  let y = Math.log(x);
  res.render("Computation", {
    result: `Math.log() applied to [${x}] is [${y}]`
  });
});

module.exports = router;