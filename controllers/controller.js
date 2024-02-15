const Model = require("../models/model");

class Controller {
  static async root(req, res) {
    try {
      let data = await Model.root();
      res.render("Home", { data });
    } catch (error) {
      console.log(error);
      res.send(error);
    }
  }
  static async add(req, res) {
    try {
      let data = await Model.add();
      res.render("Home");
    } catch (error) {
      console.log(error);
      res.send(error);
    }
  }
  static async addProcess(req, res) {
    try {
      await Model.addProcess();
      res.redirect("/shoes");
    } catch (error) {
      console.log(error);
      res.send(error);
    }
  }
}
module.exports = Controller;
