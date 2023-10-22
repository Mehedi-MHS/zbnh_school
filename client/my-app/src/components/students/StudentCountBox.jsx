import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import SchoolIcon from "@mui/icons-material/School";
import { useState, useEffect } from "react";
import Stack from "@mui/material/Stack";
export default function StudentCountBox() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    getStudents();
  }, []);
  const getStudents = async () => {
    const req = await fetch("http://localhost:3000/dashboard/getStudents", {
      method: "POST",
      headers: { "Content-type": "application/json" },
    });
    const res = await req.json();
    console.log(res);
    setStudents(res);
  };
  return (
    <>
      <Typography
        variant="h3"
        component="h1"
        sx={{
          fontFamily: "roboto,sans-serif",
          textAlign: "center",
          padding: "0.5rem",
          background: "rgba(55,63,72,0.3)",
          color: "white",
          "&:hover": {
            color: "black",
            background: "linear-gradient(to top right,cyan,magenta)",
          },
        }}
      >
        <SchoolIcon
          sx={{ color: "inherit", fontSize: "inherit", marginRight: "5px" }}
        />
        Our Students
      </Typography>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        flexWrap="wrap"
        gap={3}
        sx={{
          margin: "10px auto",
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
              background: "linear-gradient(to top right,magenta,Blue)",
              width: { xs: "250px", sm: "300px" },
              position: "relative",
              borderRadius: "0.5rem",
              "&:hover": {
                boxShadow: "0px 2px 5px cyan",
                background: "linear-gradient(to top right,Blue,magenta)",
                transition: "5s ease",
                cursor: "pointer",
              },
            }}
          >
            <Box
              sx={{
                position: "absolute",
                marginBottom: "10px",
                background: "black",
                top: 0,
                left: 0,
                width: "100%",
                textAlign: "center",
                padding: "4px 0.5rem",
                borderTopLeftRadius: "0.5rem",
              }}
            >
              <Typography
                variant="p"
                sx={{
                  textAlign: "center",
                  color: "white",
                  fontWeight: "bold",
                }}
              >
                Class : {student.title}
              </Typography>
            </Box>
            <Typography variant="h4" textAlign="center" color="silver">
              Total Students:
            </Typography>
            <Typography
              variant="h2"
              textAlign="center"
              component="p"
              sx={{ color: "#fff" }}
            >
              {student.total}
            </Typography>
          </Box>
        ))}
      </Stack>
    </>
  );
}
