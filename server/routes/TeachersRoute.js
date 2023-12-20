const express = require("express");

const promisePool = require("../lib/dbConfig");
const TeachersRouter = express.Router();

TeachersRouter.get("/", async (req, res) => {
  const [rows, fields] = await promisePool.query(
    "SELECT `id`,`fullName`,`designation`,`imageURL`,`gender` FROM `zbnhs_teachers`"
  );

  res.json(rows);
});

//profile route
TeachersRouter.get("/profile/:id", async (req, res) => {
  const teacherId = req.params.id;
  const [rows, fields] = await promisePool.query(
    "SELECT * FROM `zbnhs_teachers` WHERE `id`=?",
    [teacherId]
  );

  return res.json(rows);
});
module.exports = TeachersRouter;
