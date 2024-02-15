const express = require("express");
const app = express();
require("dotenv").config();
const port = process.env.APP_PORT;
const Controller = require("./controllers/controller");
require("dotenv").config();

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));

app.get("/", Controller.root);
app.get("/shoes/add", Controller.add);
app.post("/shoes/add", Controller.addProcess);
app.get("/shoes/status/:id/available", Controller.available);
app.get("/shoes/status/:id/discontinue", Controller.discontinue);
app.get("/shoes/delete/:id", Controller.delete);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
