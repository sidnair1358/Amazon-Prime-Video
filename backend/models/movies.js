const { query } = require("../db/index");

async function getAllPopularMovies() {
  const data = await query(`SELECT * FROM popularMovies`);
  return data.rows;
}
async function getAllTopRatedMovies() {
  const data = await query(`SELECT * FROM topRatedMovies`);
  return data.rows;
}
async function getAllPopularTVShows() {
  const data = await query(`SELECT * FROM popularTV`);
  console.log(data.rows);
  return data.rows;
}
async function getAllTopRatedTVShows() {
  const data = await query(`SELECT * FROM topRatedTV`);
  return data.rows;
}

// async function addReview(review, title) {
//   const data = await query(
//     `UPDATE popularMovies SET reviews = $1 WHERE title = '${title}' RETURNING *;`,
//     [review]
//   );
//   return data.rows;
// }
async function addReview(title, review) {
  const reviews = await query(
    `UPDATE popularMovies SET reviews = $1 WHERE title = '${title}' RETURNING *;`,
    [review]
  );
  return reviews.rows;
}

async function editReview(title, review) {
  const data = await query(
    `UPDATE popularMovies SET reviews = $1 WHERE title = '${title}' RETURNING *;`,
    [review]
  );
  return data.rows;
}

module.exports = {
  getAllPopularMovies,
  getAllPopularTVShows,
  getAllTopRatedMovies,
  getAllTopRatedTVShows,
  addReview,
  editReview,
};
