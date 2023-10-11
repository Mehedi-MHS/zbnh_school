import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import { Card, CardContent, CardActions } from "@mui/material";
import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
export default function TeachersBox() {
  const teacherList = [
    {
      id: 1,
      name: "MD Ismail Chowdhury",
      designation: "Headmaster",
      pic: "",
      profile_url: "",
    },
    {
      id: 2,
      name: "Rahmat Ullah Sujon",
      designation: "State Headmaster",
      pic: "",
      profile_url: "",
    },
    {
      id: 3,
      name: "Omor Faruk",
      designation: "Senior IT teacher",
      pic: "",
      profile_url: "",
    },
    {
      id: 4,
      name: "Teacher4",
      designation: "Assistant English Teacher ",
      pic: "",
      profile_url: "",
    },
    {
      id: 5,
      name: "Teacher5",
      designation: "Guest Teacher",
      pic: "",
      profile_url: "",
    },
  ];
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

      <Container>
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
                <Button variant="outlined">View Profile</Button>
              </CardActions>
            </Card>
          ))}
        </Stack>
      </Container>
    </>
  );
}
