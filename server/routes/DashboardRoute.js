const express = require("express");
require("dotenv").config();
const dashboardRouter = express.Router();
const fs = require("fs/promises");
const path = require("path");
const bcrypt = require("bcryptjs");
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
    indexNo,
    gender,
    dateOfBirth,
    permanentAddress,
    presentAddress,
    firstMPOdate,
    currentSchoolMPOdate,
    firstJoined,
    joinedHere,
    BEDscaleDate,
    firstScaleDate,
    secondScaleDate,
    education,
    bank,
    NID,
    contact,
    information,
    religion,
  } = req.body;

  /*
  console.log(
    picData,
    fullName,
    designation,
    fathersName,
    mothersName,
    indexNo,
    gender,
    dateOfBirth,
    permanentAddress,
    presentAddress,
    firstMPOdate,
    currentSchoolMPOdate,
    firstJoined,
    joinedHere,
    BEDscaleDate,
    firstScaleDate,
    secondScaleDate,
    education,
    bank,
    NID,
    contact,
    information,
    religion
  );
*/
  let file_name = "",
    uploadDirectory = "",
    imageURL = "";
  //console.log(req.body.dateOfBirth, " joined :", req.body.joined);
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
      "INSERT INTO `zbnhs_teachers` (`fullName`,`imageURL`,`designation`,`fathersName`,`mothersName`,`indexNo`,`gender`,`dateOfBirth`,`permanentAddress`,`presentAddress`,`firstMPOdate`,`currentSchoolMPOdate`,`firstJoined`,`joinedHere`,`BEDscaleDate`,`firstScaleDate`,`secondScaleDate`,`education`,`bank`,`NID`,`contact`,`information`,`religion`) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",
      [
        fullName,
        imageURL,
        designation,
        fathersName,
        mothersName,
        indexNo,
        gender,
        dateOfBirth,
        permanentAddress,
        presentAddress,
        firstMPOdate,
        currentSchoolMPOdate,
        firstJoined,
        joinedHere,
        BEDscaleDate,
        firstScaleDate,
        secondScaleDate,
        education,
        bank,
        NID,
        contact,
        information,
        religion,
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
  //console.log(JSON.stringify(req.body));
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

///**** Handle headmaster and assistant headmaster message */
dashboardRouter.post("/headmasterMessage", async (req, res) => {
  const { title, description, picData, oldPicURL, person } = req.body;

  const verifyPerson = () => {
    if (person === "headmaster") {
      return "hm";
    } else if (person === "assistantHeadmaster") {
      return "ahm";
    }
  };
  /*
  console.log(
    "title:",
    title,
    "description:",
    description,
    "-picdata:",
    picData.length,
    "-oldPicURL:",
    oldPicURL,
    "Person:",
    person
  );
*/
  if (title.length === 0 || description.length === 0 || person.length === 0) {
    return res.json({
      success: false,
      severity: "warning",
      message: "Message or Picture is empty. Please try again",
    });
  }
  let file_name = "",
    uploadDirectory = "",
    imageURL = "",
    imageName = req.body?.fileName;

  //handle Picture
  if (picData && picData.length > 0 && imageName.length > 0) {
    if (oldPicURL?.length > 0) {
      try {
        const fileDir = req.body.oldPicURL.split("/").slice(3, 6).join("/");

        await fs.unlink(fileDir);
      } catch (error) {
        console.log(error);
      }
    }
    file_name =
      "ZBNHS_HeadMaster_" + Date.now() + path.extname(req.body.fileName);
    uploadDirectory = `${process.cwd()}/uploads/images/${file_name}`;
    const imageData = picData.replace(/^data:image\/\w+;base64,/, "");
    const imageBuffer = Buffer.from(imageData, "base64");
    await fs.writeFile(uploadDirectory, imageBuffer);
    imageURL = process.env.DOMAIN + "/uploads/images/" + file_name;
  }
  const [rows, fields] = await promisePool.query(
    "UPDATE `zbnhs_headMessage` SET `picURL`=?, `title`=?, `description`=? WHERE `name`=?",
    [
      imageURL.length > 0 ? imageURL : oldPicURL,
      title,
      description,
      verifyPerson(),
    ]
  );
  if (rows.affectedRows > 0) {
    return res.json({
      success: true,
      severity: "success",
      message: `Successfully updated ${person} message`,
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

//Handle ChangeUsername & password
dashboardRouter.post("/settings/changePassword", async (req, res) => {
  const { oldUser, oldPassword, newUser, newPassword } = req.body;

  if (
    oldUser.length == 0 ||
    oldPassword.length == 0 ||
    newUser.length == 0 ||
    newPassword.length == 0
  ) {
    return res.json({
      severity: "warning",
      message: "Please fill all the fields and try again",
    });
  }

  // Collect info from db
  const [rows, fields] = await promisePool.query(
    "SELECT `name`,`password` FROM zbnhs_admin WHERE `id`=?",
    [1]
  );
  const db_userName = rows[0].name;
  const db_userPassword = rows[0].password;
  //console.log("db:", db_userName, "-", db_userPassword);
  // Validate credentials
  const isSamePassword = await bcrypt.compare(oldPassword, db_userPassword);
  if (db_userName === oldUser && isSamePassword) {
    // Set session username before calling verifySession
    req.session.userName = newUser;

    //create new password hash.
    const salt = await bcrypt.genSalt(10);
    const passwordHash = await bcrypt.hash(newPassword, salt);
    //console.log("newPassword:", newPassword, " - hash:", passwordHash);
    //update new password in database
    const [rows, fields] = await promisePool.query(
      "UPDATE `zbnhs_admin` SET `name`=?,`password`=? WHERE `id`=?",
      [newUser, passwordHash, 1]
    );
    if (rows.affectedRows > 0) {
      return res.json({
        success: true,
        severity: "success",
        message: "Successfully updated Username and Password",
      });
    } else {
      return res.json({
        success: false,
        severity: "warning",
        message: "Error! Failed to Update data!",
      });
    }
  } else {
    return res.json({
      message: "Incorrect username or password!",
      severity: "warning",
      success: false,
    });
  }
});

module.exports = dashboardRouter;
