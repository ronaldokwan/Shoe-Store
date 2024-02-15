const pool = require("../connection");
const Factory = require("./class");

class Model {
  static async root(req, res) {
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
  static async add(req, res) {
    try {
      res.render("Home");
    } catch (error) {
      throw error;
    }
  }
  static async addProcess(req, res) {
    try {
      res.render("Home");
    } catch (error) {
      throw error;
    }
  }
}
module.exports = Model;
