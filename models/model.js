const pool = require("../connection");
const Factory = require("./class");

class Model {
  static async root() {
    try {
      let query = `SELECT s."id",s."name",c."name" as "categoryId",s."minSize",s."maxSize",s."status" FROM "Shoes" s JOIN "Categories" c ON c."id" = s."categoryId"`;
      let { rows } = await pool.query(query);
      let data = rows.map((item) => {
        let { id, name, categoryId, minSize, maxSize, status } = item;
        return Factory.generateShoes(
          id,
          name,
          categoryId,
          minSize,
          maxSize,
          status
        );
      });
      return data;
    } catch (error) {
      throw error;
    }
  }
  static async add() {
    try {
      let query = `SELECT * FROM "Categories"`;
      let { rows } = await pool.query(query);
      let data = rows.map((item) => {
        let { id, name } = item;
        return Factory.generateShoes(id, name);
      });
      return data;
    } catch (error) {
      throw error;
    }
  }
  static async addProcess(body) {
    try {
      let query = `INSERT INTO "Shoes" ("name","categoryId","minSize","maxSize","status") VALUES ('${body.name}','${body.categoryId}','${body.minSize}','${body.maxSize}','${body.status}')`;
      await pool.query(query);
    } catch (error) {
      throw error;
    }
  }
  static async available(body) {
    try {
      let query = `INSERT INTO "Shoes" ("name","categoryId","minSize","maxSize","status") VALUES ('${body.name}','${body.categoryId}','${body.minSize}','${body.maxSize}','${body.status}')`;
      await pool.query(query);
    } catch (error) {
      throw error;
    }
  }
  static async discontinue(body) {
    try {
      let query = `INSERT INTO "Shoes" ("name","categoryId","minSize","maxSize","status") VALUES ('${body.name}','${body.categoryId}','${body.minSize}','${body.maxSize}','${body.status}')`;
      await pool.query(query);
    } catch (error) {
      throw error;
    }
  }
  static async delete(id) {
    try {
      let query = `DELETE FROM "Param" WHERE "id" = '${id}'`;
      await pool.query(query);
    } catch (error) {
      throw error;
    }
  }
}
module.exports = Model;
