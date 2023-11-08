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
    return res.json({
      success: true,
      message: `class:${cls}, total:${total}`,
      severity: "success",
    });
  } else {
    return res.json({
      success: false,
      message: "Error updating students",
      severity: "warning",
    });
  }
});

dashboardRouter.post("/editTeacher", (req, res) => {
  const { picData, info } = req.body;
  return res.json({
    success: true,
    severity: "success",
    message: `${info}-${picData.length}`,
  });
});
module.exports = dashboardRouter;
