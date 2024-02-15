const pool = require("../connection");
const Factory = require("./class");

class Model {
  static async validation(name, minSize, maxSize) {
    try {
      let errorMessage = [];
      if (name.split(" ").filter((n) => n).length <= 1) {
        errorMessage.push("name minimal 2 kata");
      }
      if (minSize != Number(minSize) || maxSize != Number(maxSize)) {
        errorMessage.push("minSize dan maxSize must be number");
      }
      if (Number(minSize) >= Number(maxSize)) {
        errorMessage.push("maxSize harus lebih besar dari minSize");
      }
      if (errorMessage.length !== 0) {
        throw errorMessage;
      }
    } catch (error) {
      throw error;
    }
  }
  static async deleteValidation(status) {
    try {
      let errorMessage = [];
      if (status === "Available") {
        errorMessage.push(
          "Hanya sepatu dengan status Discontinued yang dapat dihapus"
        );
      }
      if (errorMessage.length !== 0) {
        throw errorMessage;
      }
    } catch (error) {
      throw error;
    }
  }
  static async root() {
    try {
      let query = `SELECT s."id",s."name",c."name" as "categoryId",s."minSize",s."maxSize",s."status" FROM "Shoes" s JOIN "Categories" c ON c."id" = s."categoryId" ORDER BY s."id"`;
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
      await this.validation(body.name, body.minSize, body.maxSize);
      let query = `INSERT INTO "Shoes" ("name","categoryId","minSize","maxSize","status") VALUES ('${body.name}','${body.categoryId}','${body.minSize}','${body.maxSize}','${body.status}')`;
      await pool.query(query);
    } catch (error) {
      throw error;
    }
  }
  static async available(id) {
    try {
      let query = `UPDATE "Shoes" SET "status" = 'Available' WHERE "id" = '${id}'`;
      await pool.query(query);
    } catch (error) {
      throw error;
    }
  }
  static async discontinue(id) {
    try {
      let query = `UPDATE "Shoes" SET "status" = 'Discontinued' WHERE "id" = '${id}'`;
      await pool.query(query);
    } catch (error) {
      throw error;
    }
  }
  static async delete(id) {
    try {
      let valid = `SELECT s."status" FROM "Shoes" s WHERE "id" = '${id}'`;
      let status;
      let { rows } = await pool.query(valid);
      for (let i = 0; i < rows.length; i++) {
        const element = rows[i];
        status = element.status;
      }
      await this.deleteValidation(status);
      let query = `DELETE FROM "Shoes" WHERE "id" = '${id}'`;
      await pool.query(query);
    } catch (error) {
      throw error;
    }
  }
}
module.exports = Model;
