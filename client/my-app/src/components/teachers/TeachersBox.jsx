import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import { Card, CardContent, CardActions } from "@mui/material";
import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Link from "../custom/CustomLink";
import { useState, useEffect } from "react";

export default function TeachersBox() {
  const [teacherList, setTeacherList] = useState([]);

  useEffect(() => {
    getTeachers();
  }, []);

  const getTeachers = async () => {
    const req = await fetch("http://localhost:3000/teachers", {
      method: "GET",
      headers: { "Content-type": "application/json" },
    });
    const res = await req.json();
    setTeacherList(res);
  };

  return (
    <>
      <Typography
        variant="h4"
        component="h1"
        sx={{
          fontFamily: "roboto,sans-serif",
          textAlign: "center",
          padding: "0.5rem",
          background: "linear-gradient(to right, cyan, magenta)",
          color: "white",
          marginTop: "2rem",
        }}
      >
        Honourable Teachers
      </Typography>

      <Container sx={{ paddingBottom: "2rem" }}>
        <Stack
          direction={{ xs: "column", sm: "row" }}
          flexWrap="wrap"
          gap={3}
          sx={{ marginTop: "3rem" }}
        >
          {teacherList.map((teacher) => (
            <Card
              sx={{
                width: { xs: "100%", sm: "300px" },
                background: "rgba(15,13,55,0.05)",
              }}
              key={teacher.id}
              variant="outlined"
            >
              <CardContent>
                <Stack
                  direction={{ sm: "row" }}
                  gap="2rem"
                  alignItems={{ xs: "center", sm: "inherit" }}
                >
                  <Avatar
                    alt={teacher.name}
                    src={teacher.pic ? teacher.pic : "/images/avatar0.webp"}
                    sx={{ width: { xs: 85 }, height: { xs: 85 } }}
                  />
                  <Box>
                    <Typography
                      variant="h5"
                      sx={{ textAlign: { xs: "center" } }}
                      component="p"
                    >
                      {teacher.name}
                    </Typography>
                    <Typography
                      variant="p"
                      sx={{ textAlign: { xs: "center" } }}
                      component="p"
                      color="text.secondary"
                    >
                      {teacher.designation}
                    </Typography>
                  </Box>
                </Stack>
              </CardContent>
              <CardActions disableSpacing>
                <Link to={`/teachers/profile/${teacher.id}`}>
                  <Button variant="outlined">View Profile</Button>
                </Link>
              </CardActions>
            </Card>
          ))}
        </Stack>
      </Container>
    </>
  );
}
