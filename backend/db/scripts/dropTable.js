const { query } = require("../index");

const deleteTable1 = `DROP TABLE popularMovies`;
const deleteTable2 = `DROP TABLE topRatedMovies`;
const deleteTable3 = `DROP TABLE popularTV`;
const deleteTable4 = `DROP TABLE topRatedTV`;

async function dropTable() {
  const result1 = await query(deleteTable1);
  const result2 = await query(deleteTable2);
  const result3 = await query(deleteTable3);
  const result4 = await query(deleteTable4);
  console.log("table dropped");
}

dropTable();
