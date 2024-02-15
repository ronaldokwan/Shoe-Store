const pool = require("./connection");

const CategoriesTable = `
CREATE TABLE "Categories"(
  "id" SERIAL PRIMARY KEY, 
  "name" VARCHAR NOT NULL
);
`;

const ShoesTable = `
CREATE TABLE "Shoes"(
  "id" SERIAL PRIMARY KEY, 
  "name" VARCHAR NOT NULL, 
  "categoryId" INTEGER REFERENCES "Categories"(id),
  "minSize" INTEGER NOT NULL, 
  "maxSize" INTEGER NOT NULL,
  "status" VARCHAR NOT NULL
);
`;

const dropTable = `DROP TABLE IF EXISTS "Shoes","Categories"`;

async function setup() {
  try {
    await pool.query(dropTable);
    await pool.query(CategoriesTable);
    await pool.query(ShoesTable);
    console.log("setup done");
  } catch (error) {
    console.log(error);
  }
}
setup();
