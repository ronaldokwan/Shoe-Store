const express = require("express");
const app = express();
const port = 3000;
const Controller = require("./controllers/controller");

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));

app.get("/", Controller.root);
app.get("/shoes/add", Controller.add);
app.post("/shoes/add", Controller.addProcess);
app.get("/shoes/status/:id/available", Controller.root);
app.get("/shoes/status/:id/discontinue", Controller.root);
app.get("/shoes/delete/:id", Controller.root);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
