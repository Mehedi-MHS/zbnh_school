const express = require("express");
const dashboardRouter = express.Router();

dashboardRouter.all("/*", (req, res, next) => {
  //check user is logged in or not . applicable for all dashboard route
  //if logged in the call next(), otherwise return the request.
  next();
});

dashboardRouter.post("/getStudents", (req, res) => {
  const demoStudents = [
    {
      title: "Six",
      class: 6,
      total: 250,
    },
    {
      title: "Seven",
      class: 7,
      total: 180,
    },
    {
      title: "Eight",
      class: 8,
      total: 150,
    },
    {
      title: "Nine",
      class: 9,
      total: 180,
    },
    {
      title: "Ten",
      class: 10,
      total: 130,
    },
  ];
  res.json(demoStudents);
});

module.exports = dashboardRouter;
