const express = require("express");
const HomeRouter = express.Router();
const promisePool = require("../lib/dbConfig");

//image
HomeRouter.get("/uploads/images/:name", (req, res) => {
  const imageName = req.params.name;
  return res.sendFile(`${process.cwd()}/uploads/images/${imageName}`);
});

HomeRouter.get("/notice", (req, res) => {
  //get news from db order by date descending so that new notice appear on top
  const demoNotice = [
    {
      id: 1,
      title: "Post No 1 Lorem Ipusm Dolor Sit amet codfhd jjfljodfd ",
      date: "21 Sep 2023",
      file: "/file1",
    },
    {
      id: 2,
      title: "Post No 1 Lorem Ipusm Dolor",
      date: "21 Sep 2023",
      file: "/file1",
    },
    {
      id: 3,
      title: "Post No 1 Lorem Ipusm Dolor",
      date: "21 Sep 2023",
      file: "/file1",
    },

    {
      id: 4,
      title: "Post No 1 Lorem Ipusm Dolor",
      date: "21 Sep 2023",
      file: "/file1",
    },

    {
      id: 5,
      title: "Post No 1 Lorem Ipusm Dolor",
      date: "21 Sep 2023",
      file: "/file1",
    },

    {
      id: 6,
      title: "Post No 1 Lorem Ipusm Dolor",
      date: "21 Sep 2023",
      file: "/file1",
    },
  ];

  res.json(demoNotice);
});

HomeRouter.get("/getStudents", async (req, res) => {
  const [rows, fields] = await promisePool.query(
    "SELECT * FROM `zbnhs_students`"
  );
  //console.log("rows:", rows, "fields:", fields);
  /*const demoStudents = [
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
  */
  res.json(rows);
});

HomeRouter.get("/gallery", (req, res) => {
  const demoData = [
    {
      id: 1,
      image: "/images/school.jpg",
      description:
        "Lorem Ipsum Dolor Sit amet condsid oi dlfjdlhf olj odifdj jfji odoiieur et nhodufodfidofuou od fiduf idf o",
    },
    {
      id: 2,
      image: "/images/school.jpg",
      description:
        "Lorem Ipsum Dolor Sit amet condsid oi dlfjdlhf olj odifdj jfji odoiieur et nhodufodfidofuou od fiduf idf o",
    },
  ];
  res.json(demoData);
});

HomeRouter.get("/about", (req, res) => {
  const demoPost = [
    {
      id: 1,
      title: "Our School At a Glance",
      image: "/images/school.jpg",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpnemo animi maxime aliquid, itaque nobis eveniet quisquam istecupiditate eligendi corporis aspernatur, eos harum minima intemporibus facere hic omnis",
    },
    {
      id: 3,
      title: "Our Mission and Vision",
      image: "/images/school.jpg",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpnemo animi maxime aliquid, itaque nobis eveniet quisquam istecupiditate eligendi corporis aspernatur, eos harum minima intemporibus facere hic omnis",
    },
  ];
  res.json(demoPost);
});

module.exports = HomeRouter;
