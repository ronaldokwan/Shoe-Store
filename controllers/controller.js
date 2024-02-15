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
      res.render("add", { data });
    } catch (error) {
      console.log(error);
      res.send(error);
    }
  }
  static async addProcess(req, res) {
    try {
      await Model.addProcess(req.body);
      res.redirect("/");
    } catch (error) {
      console.log(error);
      res.send(error);
    }
  }
  static async available(req, res) {
    try {
      await Model.available(req.body);
      res.redirect("/");
    } catch (error) {
      console.log(error);
      res.send(error);
    }
  }
  static async discontinue(req, res) {
    try {
      await Model.discontinue(req.body);
      res.redirect("/");
    } catch (error) {
      console.log(error);
      res.send(error);
    }
  }
  static async delete(req, res) {
    try {
      await Model.delete(req.params.id);
      res.redirect("/");
    } catch (error) {
      console.log(error);
      res.send(error);
    }
  }
}
module.exports = Controller;
