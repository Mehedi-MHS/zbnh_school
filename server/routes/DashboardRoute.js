const express = require("express");
require("dotenv").config();
const dashboardRouter = express.Router();
const fs = require("fs/promises");
const path = require("path");
const promisePool = require("../lib/dbConfig");
dashboardRouter.all("/*", (req, res, next) => {
  //check user is logged in or not . applicable for all dashboard route
  //if logged in the call next(), otherwise return the request.
  next();
});

dashboardRouter.post("/editStudents", async (req, res) => {
  const { cls, total } = req.body;
  if (cls && total) {
    const [rows, fields] = await promisePool.query(
      "UPDATE `zbnhs_students` SET `total`=? WHERE `class`=?",
      [total, cls]
    );
    if (rows.affectedRows > 0) {
      return res.json({
        success: true,
        message: "Successfully updated students",
        severity: "success",
      });
    } else {
      return res.json({
        success: false,
        message: "Something went wrong. Please try again",
        severity: "warning",
      });
    }
  } else {
    return res.json({
      success: false,
      message: "Error updating students",
      severity: "warning",
    });
  }
});

dashboardRouter.post("/editTeacher", async (req, res) => {
  const {
    picData,
    fullName,
    designation,
    fathersName,
    mothersName,
    gender,
    education,
    religion,
    dateOfBirth,
    contact,
    email,
    bloodGroup,
    joined,
  } = req.body;
  console.log(dateOfBirth + "-" + joined);
  let file_name = "",
    uploadDirectory = "";
  console.log(req.body.dateOfBirth, " joined :", req.body.joined);
  if (fullName && designation && gender) {
    //handle Picture
    if (picData && picData.length > 0 && req.body.fileName) {
      file_name =
        "ZBNHS_Teacher_" + Date.now() + path.extname(req.body.fileName);
      uploadDirectory = `${process.cwd()}/uploads/images/${file_name}`;
      const imageData = picData.replace(/^data:image\/\w+;base64,/, "");
      const imageBuffer = Buffer.from(imageData, "base64");
      await fs.writeFile(uploadDirectory, imageBuffer);
      console.log(
        "uploadDirectory:",
        uploadDirectory,
        "-- filename:",
        file_name
      );
    }
    const imageURL = process.env.DOMAIN + "/uploads/images/" + file_name;
    const [rows, fields] = await promisePool.query(
      "INSERT INTO `zbnhs_teachers` (`fullName`,`imageURL`,`designation`,`fathersName`,`mothersName`,`gender`,`education`,`religion`,`dateOfBirth`,`contact`,`email`,`bloodGroup`,`joined`) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?)",
      [
        fullName,
        imageURL,
        designation,
        fathersName,
        mothersName,
        gender,
        education,
        religion,
        dateOfBirth,
        contact,
        email,
        bloodGroup,
        joined,
      ]
    );
    if (rows.affectedRows > 0) {
      return res.json({
        success: true,
        severity: "success",
        message: "Successfully added teacher!",
      });
    } else {
      return res.json({
        success: false,
        severity: "warning",
        message: "Error! Failed to save data!",
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

//Handle Delete Teacher
dashboardRouter.delete("/teachers", async (req, res) => {
  const id = req.body.id;
  if (req.body.imageURL.length > 0) {
    const imageDir = req.body.imageURL.split("/").slice(3, 6).join("/");
    try {
      await fs.unlink(imageDir);
    } catch (err) {
      console.log(err);
    }
  }
  console.log(JSON.stringify(req.body));
  const [rows, fields] = await promisePool.query(
    "DELETE FROM `zbnhs_teachers` WHERE `id`=?",
    [id]
  );
  if (rows.affectedRows > 0) {
    return res.json({ success: true, message: "Deleted Successfully!" });
  } else {
    return res.json({ success: false, message: "Failed to delete!" });
  }
});
module.exports = dashboardRouter;
