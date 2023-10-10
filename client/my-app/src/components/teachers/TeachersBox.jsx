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
        variant="h3"
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
        Our Honourable Teachers
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
                width: { xs: "100%", sm: "30%" },
                margin: { xs: "0 0 1rem 0", sm: "0 1rem 1rem 0" },
              }}
              key={teacher.id}
            >
              <CardContent>
                <Stack direction={{ sm: "row" }} gap="2rem">
                  <Avatar
                    alt={teacher.name}
                    src={teacher.pic ? teacher.pic : "/images/avatar0.webp"}
                  />
                  <Box>
                    <Typography variant="h5" component="p">
                      {teacher.name}
                    </Typography>
                    <Typography
                      variant="p"
                      component="p"
                      color="text.secondary"
                    >
                      {teacher.designation}
                    </Typography>
                  </Box>
                </Stack>
              </CardContent>
              <CardActions>
                <Button variant="outlined">View Profile</Button>
              </CardActions>
            </Card>
          ))}
        </Stack>
      </Container>
    </>
  );
}
