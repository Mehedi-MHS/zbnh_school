import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import SchoolIcon from "@mui/icons-material/School";
import { useState } from "react";
import Stack from "@mui/material/Stack";
export default function StudentCountBox() {
  const [students, setStudents] = useState([
    {
      cls: "Six",
      count: 0,
    },
    {
      cls: "Seven",
      count: 0,
    },
    {
      cls: "Eight",
      count: 0,
    },
    {
      cls: "Nine",
      count: 0,
    },
    {
      cls: "Ten",
      count: 0,
    },
  ]);

  return (
    <>
      <Typography
        variant="h3"
        component="h1"
        sx={{
          fontFamily: "roboto,sans-serif",
          textAlign: "center",
          padding: "0.5rem",
          background: "black",
          color: "white",
          marginTop: "2rem",
        }}
      >
        <SchoolIcon
          sx={{ color: "white", fontSize: "inherit", marginRight: "5px" }}
        />
        Our Students
      </Typography>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        flexWrap="wrap"
        gap={3}
        sx={{
          margin: "10px auto",
          background: "lightGreen",
          padding: "2rem 0",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {students.map((student, index) => (
          <Box
            key={index}
            sx={{
              padding: "2.5rem 1rem",
              border: "1px solid gray",
              background: "white",
              width: { xs: "250px", sm: "300px" },
              position: "relative",
              borderRadius: "0.5rem",
              "&:hover": {
                boxShadow: "0px 2px 5px magenta",
                cursor: "pointer",
              },
            }}
          >
            <Box
              sx={{
                position: "absolute",
                marginBottom: "10px",
                background: "dodgerBlue",
                top: 0,
                left: 0,
                textAlign: "center",
                padding: "4px 0.5rem",
                borderTopLeftRadius: "0.5rem",
              }}
            >
              <Typography
                variant="p"
                sx={{ textAlign: "center", color: "white", fontWeight: "bold" }}
              >
                Class : {student.cls}
              </Typography>
            </Box>
            <Typography variant="h4">
              Total Students: {student.count}
            </Typography>
          </Box>
        ))}
      </Stack>
    </>
  );
}
