const { query } = require("../index");

const apiKey = "d005f1b22ad34c2c5d7857467122a7b1";

const newPopularMovieTable = `CREATE TABLE IF NOT EXISTS popularMovies (id SERIAL PRIMARY KEY, title TEXT, vote_average NUMERIC, overview TEXT, poster_path TEXT, reviews TEXT, genreId INTEGER[])`;
const newTopRatedMovieTable = `CREATE TABLE IF NOT EXISTS topRatedMovies (id SERIAL PRIMARY KEY, title TEXT, vote_average NUMERIC, overview TEXT, poster_path TEXT, reviews TEXT, genreId INTEGER[])`;
const newPopularTVTable = `CREATE TABLE IF NOT EXISTS popularTV (id SERIAL PRIMARY KEY, title TEXT, vote_average NUMERIC, overview TEXT, poster_path TEXT, reviews TEXT, genreId INTEGER[])`;
const newTopratedTVTable = `CREATE TABLE IF NOT EXISTS topRatedTV (id SERIAL PRIMARY KEY, title TEXT, vote_average NUMERIC, overview TEXT, poster_path TEXT, reviews TEXT, genreId INTEGER[])`;

async function createTable() {
  const result1 = await query(newPopularMovieTable);
  const result2 = await query(newPopularTVTable);
  const result3 = await query(newTopRatedMovieTable);
  const result4 = await query(newTopratedTVTable);
  console.log("new Table created");
  console.log(result1, result2, result3, result4);
}

createTable();
