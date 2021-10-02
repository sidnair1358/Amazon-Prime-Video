const { query } = require("../db/index");

async function getAllPopularMovies() {
  const data = await query(`SELECT * FROM popularMovies`);
  console.log(data);
  return data.rows;
}

module.exports = { getAllPopularMovies };
