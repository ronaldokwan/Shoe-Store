const pool = require("./connection");
const fs = require("fs");

let categories = fs.readFileSync("./data/categories.json");
categories = JSON.parse(categories);

let categoriesData = categories.map((element) => {
  return `('${element.id}','${element.name}')`;
});

let shoes = fs.readFileSync("./data/shoes.json");
shoes = JSON.parse(shoes);

let shoesData = shoes.map((element) => {
  return `('${element.id}','${element.name}','${element.categoryId}','${element.minSize}','${element.maxSize}','${element.status}')`;
});

const categoriesInsert = `
INSERT INTO "Categories" ("id","name") VALUES ${categoriesData}
`;

const shoesInsert = `
INSERT INTO "Shoes" ("id","name","categoryId","minSize","maxSize","status") VALUES ${shoesData}
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
