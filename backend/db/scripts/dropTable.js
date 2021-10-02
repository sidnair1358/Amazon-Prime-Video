const { query } = require("../index");

const deleteTable = `DROP TABLE movies`;

async function dropTable() {
  const result = await query(deleteTable);
  console.log("table dropped");
}

dropTable();
