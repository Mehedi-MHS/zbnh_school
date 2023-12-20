const express = require("express");

const promisePool = require("../lib/dbConfig");
const StudentsRouter = express.Router();

//Class 6
StudentsRouter.post("/class6", (req, res) => {
  console.log(req.body);
  return res.json({ message: req.body });
});

module.exports = StudentsRouter;
