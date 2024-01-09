import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Card, CardContent } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import { Skeleton } from "@mui/material";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
export default function TeachersProfileHome() {
  const [info, setInfo] = useState({
    id: "",
    imageURL: "",
    fullName: "",
    designation: "",
    fathersName: "",
    mothersName: "",
    indexNo: "",
    gender: "",
    dateOfBirth: "",
    permanentAddress: "",
    presentAddress: "",
    firstMPOdate: "",
    currentSchoolMPOdate: "",
    firstJoined: "",
    joinedHere: "",
    BEDscaleDate: "",
    firstScaleDate: "",
    secondScaleDate: "",
    education: "",
    bank: "",
    NID: "",
    contact: "",
    information: "",
    religion: "",
  });
  const { id } = useParams();

  useEffect(() => {
    getProfile();
  }, []);

  const getProfile = async () => {
    try {
      const req = await fetch(`http://localhost:3000/teachers/profile/${id}`, {
        method: "GET",
        headers: { "Content-type": "application/json" },
      });
      const res = await req.json();
      if (res.length > 0) {
        setInfo(res[0]);
      }
    } catch (error) {
      console.error("error in teachersProfile:", error);
    }
  };

  //In production mode keep the 'info' varible for storing user info as it is used to make dynamic array for generating dynamic table
  //info will be fetched from db

  //Donot modify tableCellOptions
  const tableCellOptions = [
    { title: "শিক্ষকের নাম", value: info.fullName || "Unknown" },
    { title: "পদবী", value: info.designation || "Unknown" },
    { title: "পিতার নাম", value: info.fathersName || "Unknown" },
    { title: "মাতার নাম", value: info.mothersName || "Unknown" },
    { title: "ইনডেক্স নং", value: info.indexNo || "Unknown" },
    { title: "Gender", value: info.gender || "Unknown" },
    { title: "জন্মতারিখ", value: info.dateOfBirth || "Unknown" },
    { title: "স্থায়ী ঠিকানা", value: info.permanentAddress || "Unknown" },
    { title: "বর্তমান ঠিকানা", value: info.presentAddress || "Unknown" },
    {
      title: "প্রথম এম.পি.ও ভুক্তির তারিখ",
      value: info.firstMPOdate || "Unknown",
    },
    {
      title: "অত্র বিদ্যালয়ে এম.পি.ও ভুক্তির তারিখ",
      value: info.currentSchoolMPOdate || "Unknown",
    },
    {
      title: "চাকুরীতে প্রথম যোগদানের তারিখ",
      value: info.firstJoined || "Unknown",
    },
    {
      title: "অত্র বিদ্যালয়ে যোগদানের তারিখ",
      value: info.joinedHere || "Unknown",
    },
    {
      title: "বি.এড স্কেল প্রাপ্তির তারিখ",
      value: info.BEDscaleDate || "Unknown",
    },
    {
      title: "প্রথম উচ্চতর স্কেল প্রাপ্তির তারিখ",
      value: info.firstScaleDate || "Unknown",
    },
    {
      title: "দ্বিতীয় উচ্চতর স্কেল প্রাপ্তির তারিখ",
      value: info.secondScaleDate || "Unknown",
    },
    { title: "শিক্ষাগত যোগ্যতা", value: info.education || "Unknown" },
    { title: "ব্যাংক হিসাব নং", value: info.bank || "Unknown" },
    { title: "এন.আইডি নং", value: info.NID || "Unknown" },
    { title: "মোবাইল নং", value: info.contact || "Unknown" },
    { title: "প্রশিক্ষণ সংক্রান্ত তথ্য", value: info.information || "Unknown" },
    { title: "Religion", value: info.religion || "Unknown" },
  ];

  const handleProfileFilter = (url, gender) => {
    if (!(url.length > 0) && gender.toLowerCase() == "male") {
      return "/images/avatar0.webp";
    } else if (url.length > 0 && gender.toLowerCase() == "male") {
      return url;
    } else {
      return "/images/Female.png";
    }
  };

  return (
    <>
      {Object.keys(info).length === 0 ? (
        <TeacherSkeleton />
      ) : (
        <Box
          sx={{
            background: "linear-gradient(to top right,magenta,cyan)",
            width: "100%",
            minHeight: "100vh",
            padding: { xs: " 8vw 2vw", sm: " 10vw 5vw" },
          }}
        >
          <Typography
            variant="h3"
            component="h1"
            sx={{ color: "#fff", textAlign: "center" }}
            gutterBottom
          >
            {info.fullName}
          </Typography>
          <Card>
            <CardContent>
              <Stack direction={{ xs: "column", sm: "row" }} gap={5}>
                <Box sx={{ display: "flex", justifyContent: { xs: "center" } }}>
                  <Avatar
                    alt={info.fullName}
                    src={handleProfileFilter(info.imageURL, info.gender)}
                    sx={{ width: "150px", height: "150px" }}
                  />
                </Box>
                <TableContainer>
                  <Table>
                    <TableBody>
                      {tableCellOptions.map((cell, index) =>
                        generateTableCell({
                          title: cell.title,
                          value: cell.value,
                          key: index,
                        })
                      )}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Stack>
            </CardContent>
          </Card>
        </Box>
      )}
    </>
  );
}

//my function for making table easily
const generateTableCell = ({ title, value, key }) => {
  return (
    <TableRow key={key}>
      <TableCell>
        <Typography variant="h6">{title}</Typography>
      </TableCell>
      <TableCell
        sx={{
          fontSize: { xs: "1rem", sm: "1.2rem" },
          color: "green",
        }}
      >
        {value}
      </TableCell>
    </TableRow>
  );
};

function TeacherSkeleton() {
  return (
    <>
      <Stack direction={{ sm: "row" }} gap={3} flexWrap="wrap">
        <Card
          sx={{
            width: { xs: "100%", sm: "300px" },
            background: "rgba(15,13,55,0.05)",
          }}
          variant="outlined"
        >
          <CardContent>
            <Stack
              direction={{ sm: "row" }}
              gap="2rem"
              alignItems={{ xs: "center", sm: "inherit" }}
            >
              <Skeleton
                variant="circular"
                sx={{ width: { xs: 85 }, height: { xs: 85 } }}
              />
              <Box sx={{ width: { xs: "100%", sm: "55%" } }}>
                <Skeleton variant="text" />

                <Skeleton variant="text" />
              </Box>
            </Stack>
          </CardContent>{" "}
        </Card>
      </Stack>
    </>
  );
}
