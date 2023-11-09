const express = require("express");
const dashboardRouter = express.Router();
const fs = require("fs/promises");
const path = require("path");
const promisePool = require('../lib/dbConfig);
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

dashboardRouter.post("/editTeacher", async (req, res) => {
  const data = req.body;
  let file_name = "";
  //const picData = req.body.picData;
  if (data.fullName && data.designation && data.gender) {
    //handle Picture
    if (data.picData && data.picData.length > 0 && data.fileName) {
      file_name = "ZBNHS_Teacher_" + Date.now() + path.extname(data.fileName);
      const uploadDirectory = `${process.cwd()}/uploads/images/${file_name}`;
      const imageData = data.picData.replace(/^data:image\/\w+;base64,/, "");
      const imageBuffer = Buffer.from(imageData, "base64");
      await fs.writeFile(uploadDirectory, imageBuffer);
      return res.json({
        success: true,
        severity: "success",
        message: "Uploaded information !",
      });
    }
  } else {
    return res.json({
      success: false,
      severity: "warning",
      message: "Missing data! Please Fill all the fields and try again.",
    });
  }
});
module.exports = dashboardRouter;
