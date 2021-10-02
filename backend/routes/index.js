var express = require("express");
var router = express.Router();
const {
  getAllPopularMovies,
  getAllPopularTVShows,
  getAllTopRatedMovies,
  getAllTopRatedTVShows,
  addReview,
  editReview,
  deleteReview,
} = require("../models/movies");

/* GET home page. */
router.get("/popularmovies", async function (req, res) {
  const response = await getAllPopularMovies();
  res.json({
    success: true,
    message: `Got all popular movies`,
    payload: response,
  });
});
router.get("/topratedmovies", async function (req, res) {
  const response = await getAllTopRatedMovies();
  res.json({
    success: true,
    message: `Got all top rated movies`,
    payload: response,
  });
});
router.get("/populartv", async function (req, res) {
  const response = await getAllPopularTVShows();
  res.json({
    success: true,
    message: `Got all popular tv shows`,
    payload: response,
  });
});
router.get("/topratedmovies", async function (req, res) {
  const response = await getAllTopRatedTVShows();
  res.json({
    success: true,
    message: `Got all top rated tv shows`,
    payload: response,
  });
});

router.post("/reviews", async function (req, res)){
  const {title, review} = req.body
}



module.exports = router;
