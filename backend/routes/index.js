var express = require("express");
var router = express.Router();
const { getAllPopularMovies } = require("../models/movies");

/* GET home page. */
router.get("/", async function (req, res) {
  const response = await getAllPopularMovies();
  res.json({
    success: true,
    message: `Got all movies`,
    payload: response,
  });
});

module.exports = router;
