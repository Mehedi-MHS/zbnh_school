const express = require("express");
const HomeRouter = express.Router();

HomeRouter.get("/notice", (req, res) => {
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

HomeRouter.get("/getStudents", (req, res) => {
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

module.exports = HomeRouter;
