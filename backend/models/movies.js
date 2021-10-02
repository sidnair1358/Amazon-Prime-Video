const { query } = require("../db/index");

async function getAllPopularMovies() {
  const data = await query(`SELECT * FROM popularMovies`);
  console.log(data.rows);
  return data.rows;
}
async function getAllTopRatedMovies() {
  const data = await query(`SELECT * FROM topRatedMovies`);
  console.log(data.rows);
  return data.rows;
}
async function getAllPopularTVShows() {
  const data = await query(`SELECT * FROM popularTV`);
  console.log(data.rows);
  return data.rows;
}
async function getAllTopRatedTVShows() {
  const data = await query(`SELECT * FROM topRatedTV`);
  console.log(data.rows);
  return data.rows;
}

async function addReview(review, title, show) {
  const data = await query(
    `UPDATE popularMovies SET reviews = $1 WHERE title = '${title} RETURNING *;`,
    [review]
  );
  return data.rows;
}
async function deleteReview(review, title) {
  const data = await query(
    `DELETE FROM popularMovies SET reviews = $1 WHERE title = '${title} RETURNING *;`,
    [review]
  );
  return data.rows;
}
async function editReview(review, title, show) {
  const data = await query(
    `UPDATE popularMovies SET reviews = $1 WHERE title = '${title} RETURNING *;`,
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
  deleteReview,
};
