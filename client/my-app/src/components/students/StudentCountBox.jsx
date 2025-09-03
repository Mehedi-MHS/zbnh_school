import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import SchoolIcon from "@mui/icons-material/School";
import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";
import { Button } from "@mui/material";
import Link from "../custom/CustomLink";
export default function StudentCountBox() {
  //class title
  const classes = [
    { cls: 6, title: "Six" },
    { cls: 7, title: "Seven" },
    { cls: 8, title: "Eight" },
    { cls: 9, title: "Nine" },
    { cls: 10, title: "Ten" },
  ];

  return (
    <>
      <Container sx={{ marginTop: "2rem" }}>
        <Typography
          variant="h3"
          component="h1"
          sx={{
            fontFamily: "roboto,sans-serif",
            textAlign: "center",
            padding: "0.5rem",
            color: "#000",
            "&:hover": {
              color: "green",
              transition: "0.5s",
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
            maxWidth: "100%",
            overflow: "hidden",
          }}
        >
          {classes.map((cls, index) => (
            <Box
              key={index}
              data-aos='fade-up'
              sx={{
                padding: "2.5rem 1rem",
                border: "1px solid gray",
                backgroundImage: "url('/images/student-bg1.png')",
                backgroundSize:"cover",
                width: { xs: "250px", sm: "300px" },
                position: "relative",
                borderRadius: "0.5rem",
                "&:hover":{
                  border:"1px solid cyan",
                  boxShadow:"0px 1px 2px #ebedeb"
                }
                
              }}
            >

              <Typography variant="h4" textAlign="center" color="silver">
                Class :
              </Typography>
              <Typography
                variant="h2"
                textAlign="center"
                fontWeight="bold"
                component="p"
                sx={{ color: "#41125e", marginBottom: "2rem" }}
              >
                {cls.title}
              </Typography>
              <Link to={`/students/class/${cls.cls}`}>
                <Button
                  variant="contained"
                  sx={{
                    position: "absolute",
                    bottom: "7px",
                    right: "7px",
                    background: "#12731c",
                    border: "1px solid white",
                  }}
                >
                  View details
                </Button>
              </Link>
            </Box>
          ))}
        </Stack>
      </Container>
    </>
  );
}
