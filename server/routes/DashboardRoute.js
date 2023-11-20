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

  let file_name = "",
    uploadDirectory = "",
    imageURL = "";
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

      imageURL = process.env.DOMAIN + "/uploads/images/" + file_name;
    }
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

dashboardRouter.post("/addSchoolInfo", async (req, res) => {
  const { title, description, picData } = req.body;

  let file_name = "",
    uploadDirectory = "",
    imageURL = "";

  if (title && description) {
    //handle Picture
    if (picData && picData.length > 0 && req.body.fileName) {
      file_name = "ZBNHS_About_" + Date.now() + path.extname(req.body.fileName);
      uploadDirectory = `${process.cwd()}/uploads/images/${file_name}`;
      const imageData = picData.replace(/^data:image\/\w+;base64,/, "");
      const imageBuffer = Buffer.from(imageData, "base64");
      await fs.writeFile(uploadDirectory, imageBuffer);

      imageURL = process.env.DOMAIN + "/uploads/images/" + file_name;
    }
    const [rows, fields] = await promisePool.query(
      "INSERT INTO `zbnhs_about` (`title`,`description`,`imageURL`) VALUES (?,?,?)",
      [title, description, imageURL]
    );
    if (rows.affectedRows > 0) {
      return res.json({
        success: true,
        severity: "success",
        message: "Successfully saved school information",
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

//Handle Delete School info
dashboardRouter.delete("/schoolInfo", async (req, res) => {
  const id = req.body.id;
  if (req.body.imageURL.length > 0) {
    const imageDir = req.body.imageURL.split("/").slice(3, 6).join("/");
    try {
      await fs.unlink(imageDir);
    } catch (err) {
      console.log(err);
    }
  }

  const [rows, fields] = await promisePool.query(
    "DELETE FROM `zbnhs_about` WHERE `id`=?",
    [id]
  );
  if (rows.affectedRows > 0) {
    return res.json({ success: true, message: "Deleted Successfully!" });
  } else {
    return res.json({
      success: false,
      message: "Failed to delete! Please try again.",
    });
  }
});

//Manage Gallery Posts upload
dashboardRouter.post("/addGalleryPost", async (req, res) => {
  const { description, picData } = req.body;

  let file_name = "",
    uploadDirectory = "",
    imageURL = "";

  if (description) {
    //handle Picture
    if (picData && picData.length > 0 && req.body.fileName) {
      file_name =
        "ZBNHS_Gallery_" + Date.now() + path.extname(req.body.fileName);
      uploadDirectory = `${process.cwd()}/uploads/images/${file_name}`;
      const imageData = picData.replace(/^data:image\/\w+;base64,/, "");
      const imageBuffer = Buffer.from(imageData, "base64");
      await fs.writeFile(uploadDirectory, imageBuffer);

      imageURL = process.env.DOMAIN + "/uploads/images/" + file_name;
    }
    const [rows, fields] = await promisePool.query(
      "INSERT INTO `zbnhs_gallery` (`description`,`imageURL`) VALUES (?,?)",
      [description, imageURL]
    );
    if (rows.affectedRows > 0) {
      return res.json({
        success: true,
        severity: "success",
        message: "Successfully uploaded gallery post",
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

//Delete Gallery Posts
dashboardRouter.delete("/galleryPost", async (req, res) => {
  const id = req.body.id;
  if (req.body.imageURL.length > 0) {
    const imageDir = req.body.imageURL.split("/").slice(3, 6).join("/");
    try {
      await fs.unlink(imageDir);
    } catch (err) {
      console.log(err);
    }
  }

  const [rows, fields] = await promisePool.query(
    "DELETE FROM `zbnhs_gallery` WHERE `id`=?",
    [id]
  );
  if (rows.affectedRows > 0) {
    return res.json({ success: true, message: "Deleted Successfully!" });
  } else {
    return res.json({
      success: false,
      message: "Failed to delete! Please try again.",
    });
  }
});

//Notice route
dashboardRouter.post("/addNotice", async (req, res) => {
  const title = req.body.title;
  let pdfData = req.files.pdf.data;
  let pdfName = req.files.pdf.name;

  let file_name = "",
    uploadDirectory = "",
    fileURL = "";
  let extension = path.extname(pdfName).toLowerCase();

  if (title && extension == ".pdf") {
    //handle pdf
    file_name = "ZBNHS_Notice_" + Date.now() + extension;
    uploadDirectory = `${process.cwd()}/uploads/files/${file_name}`;
    await fs.writeFile(uploadDirectory, pdfData);

    fileURL = process.env.DOMAIN + "/uploads/files/" + file_name;
  } else {
    return res.json({
      message: "Please Select a .pdf file!",
      severity: "warning",
    });
  }
  const [rows, fields] = await promisePool.query(
    "INSERT INTO `zbnhs_notice` (`title`,`fileURL`,`date`) VALUES (?,?,?)",
    [title, fileURL, new Date().toUTCString().split(" ").slice(1, 4).join(" ")]
  );
  if (rows.affectedRows > 0) {
    return res.json({
      success: true,
      severity: "success",
      message: "Successfully created new notice",
    });
  } else {
    return res.json({
      success: false,
      severity: "warning",
      message: "Missing data! Please Fill all the fields and try again.",
    });
  }
});

//Delete Notice
dashboardRouter.delete("/notice", async (req, res) => {
  const id = req.body.id;
  if (req.body.fileURL.length > 0) {
    const fileDir = req.body.fileURL.split("/").slice(3, 6).join("/");
    try {
      await fs.unlink(fileDir);
    } catch (err) {
      console.log(err);
    }
  }

  const [rows, fields] = await promisePool.query(
    "DELETE FROM `zbnhs_notice` WHERE `id`=?",
    [id]
  );
  if (rows.affectedRows > 0) {
    return res.json({ success: true, message: "Deleted Successfully!" });
  } else {
    return res.json({
      success: false,
      message: "Failed to delete! Please try again.",
    });
  }
});

//Manage Cover photo update
dashboardRouter.post("/settings", async (req, res) => {
  const { coverPhotoData } = req.body;

  let file_name = "",
    uploadDirectory = "",
    imageURL = "";

  //handle Picture
  if (coverPhotoData && coverPhotoData.length > 0 && req.body.coverFileName) {
    if (req.body.oldCoverPhotoURL?.length > 0) {
      try {
        const fileDir = req.body.oldCoverPhotoURL
          .split("/")
          .slice(3, 6)
          .join("/");

        await fs.unlink(fileDir);
      } catch (error) {
        console.log(error);
      }
    }
    file_name = "ZBNHS_Cover_" + Date.now() + path.extname(req.body.fileName);
    uploadDirectory = `${process.cwd()}/uploads/images/${file_name}`;
    const imageData = picData.replace(/^data:image\/\w+;base64,/, "");
    const imageBuffer = Buffer.from(imageData, "base64");
    await fs.writeFile(uploadDirectory, imageBuffer);
    imageURL = process.env.DOMAIN + "/uploads/images/" + file_name;
  }
  const [rows, fields] = await promisePool.query(
    "UPDATE `zbnhs_settings` SET `fileURL`=? WHERE `id`=1",
    [imageURL]
  );
  if (rows.affectedRows > 0) {
    return res.json({
      success: true,
      severity: "success",
      message: "Successfully updated cover photo",
    });
  } else {
    return res.json({
      success: false,
      severity: "warning",
      message: "Error! Failed to save data!",
    });
  }
});

module.exports = dashboardRouter;
