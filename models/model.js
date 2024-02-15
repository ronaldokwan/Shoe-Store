const pool = require("../connection");
const Factory = require("./class");

class Model {
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
