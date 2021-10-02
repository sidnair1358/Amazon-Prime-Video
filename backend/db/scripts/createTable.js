const { query } = require("../index");

const apiKey = "d005f1b22ad34c2c5d7857467122a7b1";

const newTable = `CREATE TABLE IF NOT EXISTS movies (id SERIAL PRIMARY KEY, title TEXT, vote_average NUMERIC, overview TEXT, poster_path TEXT, reviews TEXT, genreId INTEGER[], genreName TEXT)`;

async function createTable() {
  const result = await query(newTable);
  console.log("new Table created");
  console.log(result);
}

createTable();
