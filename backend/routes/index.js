var express = require("express");
var router = express.Router();
const {
  getAllPopularMovies,
  getAllPopularTVShows,
  getAllTopRatedMovies,
  getAllTopRatedTVShows,
  addReview,
  editReview,
} = require("../models/movies");

/* GET home page. */
router.get("/popularmovies", async (req, res) => {
  const response = await getAllPopularMovies();
  res.json({
    success: true,
    message: `Got all popular movies`,
    payload: response,
  });
});
router.get("/topratedmovies", async (req, res) => {
  const response = await getAllTopRatedMovies();
  res.json({
    success: true,
    message: `Got all top rated movies`,
    payload: response,
  });
});
router.get("/populartv", async (req, res) => {
  const response = await getAllPopularTVShows();
  res.json({
    success: true,
    message: `Got all popular tv shows`,
    payload: response,
  });
});
router.get("/topratedmovies", async (req, res) => {
  const response = await getAllTopRatedTVShows();
  res.json({
    success: true,
    message: `Got all top rated tv shows`,
    payload: response,
  });
});

// router.post("/reviews", async (req, res) => {
//   const { title, review } = req.body;
//   console.log(title, review);
//   const response = await addReview(title, review);
//   res.json({
//     success: true,
//     message: `Added review`,
//     payload: response,
//   });
// });
router.post("/reviews", async (req, res) => {
  const { title, review } = req.body;
  const response = await addReview(title, review);
  res.json({
    success: true,
    message: `Added review`,
    payload: response,
  });
});

router.patch("/reviews", async (req, res) => {
  const { title, review } = req.body;
  const response = await editReview(title, review);
  res.json({
    success: true,
    message: "Review edited successfully",
    payload: response,
  });
});

module.exports = router;

// recipesRouter.use(express.json());

// recipesRouter.post("/", (req, res) => {
//   console.log(`${req.body.title} recipe added.`);
//   addRecipe(
//     req.body.title,
//     req.body.ingredients,
//     req.body.instructions,
//     req.body.image
//   );
//   res.statusCode = 200;
//   res.end(JSON.stringify({ success: true }));
// });
