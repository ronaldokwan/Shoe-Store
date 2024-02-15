const pool = require("./connection");
const fs = require("fs");

let categories = fs.readFileSync("./data/categories.json");
categories = JSON.parse(categories);

let categoriesData = categories.map((element) => {
  return `('${element.name}')`;
});

let shoes = fs.readFileSync("./data/shoes.json");
shoes = JSON.parse(shoes);

let shoesData = shoes.map((element) => {
  return `('${element.name}','${element.categoryId}','${element.minSize}','${element.maxSize}','${element.status}')`;
});

const categoriesInsert = `
INSERT INTO "Categories" ("name") VALUES ${categoriesData}
`;

const shoesInsert = `
INSERT INTO "Shoes" ("name","categoryId","minSize","maxSize","status") VALUES ${shoesData}
`;

async function seed() {
  try {
    await pool.query(categoriesInsert);
    await pool.query(shoesInsert);
    console.log("seed done");
  } catch (error) {
    console.log(error);
  }
}
seed();
