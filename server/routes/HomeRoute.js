const express = require("express");
const HomeRouter = express.Router();
const promisePool = require("../lib/dbConfig");

//image
HomeRouter.get("/uploads/images/:name", (req, res) => {
  const imageName = req.params.name;
  return res.sendFile(`${process.cwd()}/uploads/images/${imageName}`);
});

//pdf
HomeRouter.get("/uploads/files/:name", (req, res) => {
  const fileName = req.params.name;
  return res.sendFile(`${process.cwd()}/uploads/files/${fileName}`);
});

HomeRouter.get("/notice", async (req, res) => {
  const [rows, fields] = await promisePool.query(
    "SELECT * FROM `zbnhs_notice` ORDER BY id DESC"
  );
  res.json(rows);
});

HomeRouter.get("/gallery", async (req, res) => {
  const [rows, fields] = await promisePool.query(
    "SELECT * FROM `zbnhs_gallery` ORDER BY id DESC"
  );

  res.json(rows);
});

HomeRouter.get("/about", async (req, res) => {
  const [rows, fields] = await promisePool.query("SELECT * FROM `zbnhs_about`");

  res.json(rows);
});

//Settings table
HomeRouter.get("/settings", async (req, res) => {
  const [rows, fields] = await promisePool.query(
    "SELECT * FROM `zbnhs_settings`"
  );

  res.json(rows);
});

//Headmasters table
HomeRouter.get("/getHeadmasterMessage", async (req, res) => {
  const [rows, fields] = await promisePool.query(
    "SELECT * FROM `zbnhs_headMessage`"
  );
  // console.log(rows);
  res.json(rows);
});

module.exports = HomeRouter;
