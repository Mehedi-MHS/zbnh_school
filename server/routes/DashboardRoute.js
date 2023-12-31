const express = require("express");
require("dotenv").config();
const dashboardRouter = express.Router();
const fs = require("fs/promises");
const path = require("path");
const promisePool = require("../lib/dbConfig");
dashboardRouter.all("/*", (req, res, next) => {
  //check user is logged in or not . applicable for all dashboard route
  //if logged in the call next(), otherwise return the request.
  if (req.session.userName && req.session.userName.length > 0) {
    next();
  } else {
    return res
      .status(403)
      .json({ message: "You are not allowed to access this content!" });
  }
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
dashboardRouter.post("/settings/coverPhoto", async (req, res) => {
  const { coverData, oldCoverPhotoURL, coverPhotoName } = req.body;
  /*
 coverData: info.coverData,
        oldCoverPhotoURL: info.coverURL,
        coverPhotoName: info.coverPhotoName,

 */
  let file_name = "",
    uploadDirectory = "",
    imageURL = "";
  let extension = path.extname(coverPhotoName).toLowerCase();

  //handle Picture
  if (coverData && coverData.length > 0 && coverPhotoName.length > 0) {
    if (oldCoverPhotoURL?.length > 0) {
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
    file_name = "ZBNHS_Cover_" + Date.now() + extension;
    uploadDirectory = `${process.cwd()}/uploads/images/${file_name}`;
    const imageData = coverData.replace(/^data:image\/\w+;base64,/, "");
    const imageBuffer = Buffer.from(imageData, "base64");
    await fs.writeFile(uploadDirectory, imageBuffer);
    imageURL = process.env.DOMAIN + "/uploads/images/" + file_name;
  }
  const [rows, fields] = await promisePool.query(
    "UPDATE `zbnhs_settings` SET `coverURL`=? WHERE `id`=1",
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

//Manage Logo update
dashboardRouter.post("/settings/logo", async (req, res) => {
  const { logoData, oldLogoURL, logoName } = req.body;
  /*
    logoData: info.logoData,
        oldLogoURL: info.logoURL,
        logoName: info.logoName,

 */
  let file_name = "",
    uploadDirectory = "",
    imageURL = "";
  let extension = path.extname(logoName).toLowerCase();

  //handle Picture
  if (logoData && logoData.length > 0 && logoName.length > 0) {
    if (oldLogoURL?.length > 0) {
      try {
        const fileDir = req.body.oldLogoURL.split("/").slice(3, 6).join("/");

        await fs.unlink(fileDir);
      } catch (error) {
        console.log(error);
      }
    }
    file_name = "ZBNHS_Logo_" + Date.now() + extension;
    uploadDirectory = `${process.cwd()}/uploads/images/${file_name}`;
    const imageData = logoData.replace(/^data:image\/\w+;base64,/, "");
    const imageBuffer = Buffer.from(imageData, "base64");
    await fs.writeFile(uploadDirectory, imageBuffer);
    imageURL = process.env.DOMAIN + "/uploads/images/" + file_name;
  }
  const [rows, fields] = await promisePool.query(
    "UPDATE `zbnhs_settings` SET `logoURL`=? WHERE `id`=1",
    [imageURL]
  );
  if (rows.affectedRows > 0) {
    return res.json({
      success: true,
      severity: "success",
      message: "Successfully updated website logo",
    });
  } else {
    return res.json({
      success: false,
      severity: "warning",
      message: "Error! Failed to save data!",
    });
  }
});

//Handle footer information
dashboardRouter.post("/settings/footer", async (req, res) => {
  const { schoolName, phone, email, location } = req.body;
  if (
    schoolName.length > 0 &&
    phone.length > 0 &&
    email.length > 0 &&
    location.length > 0
  ) {
    const [rows, fields] = await promisePool.query(
      "UPDATE `zbnhs_settings` SET `schoolName`=?,`phone`=?,`email`=?,`location`=? WHERE `id`=1",
      [schoolName, phone, email, location]
    );
    if (rows.affectedRows > 0) {
      return res.json({
        success: true,
        severity: "success",
        message: "Successfully updated information",
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
      message: "Please fill all the fields and try again!",
      severity: "warning",
    });
  }
});

module.exports = dashboardRouter;
