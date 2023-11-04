const express = require("express");
const dashboardRouter = express.Router();

dashboardRouter.all("/*", (req, res, next) => {
  //check user is logged in or not . applicable for all dashboard route
  //if logged in the call next(), otherwise return the request.
  next();
});

dashboardRouter.post("/editStudents", (req, res) => {
  const { cls, total } = req.body;
  if (cls && total) {
    return res.json({ success: true });
  } else {
    return res.json({ success: false });
  }
});

module.exports = dashboardRouter;
