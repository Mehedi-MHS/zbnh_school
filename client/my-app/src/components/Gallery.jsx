import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import { Card, CardMedia, CardContent } from "@mui/material";
import Link from "./custom/CustomLink";
import Container from "@mui/material/Container";
export default function Gallery() {
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
  return (
    <>
      <Container
        sx={{
          margin: { xs: "2rem auto", sm: "2rem auto" },
          overflow: "hidden",
        }}
      >
        <Typography
          variant="h3"
          component="h1"
          gutterBottom
          sx={{
            textAlign: "center",
            color: "green",
            textTransform: "uppercase",
            letterSpacing: "5px",
          }}
        >
          Gallery
        </Typography>
        <Stack direction={{ xs: "column", sm: "row" }} gap={3}>
          {demoData.map((data, index) => (
            <Card
              key={index}
              sx={{
                background: "none",
                boxShadow: "none",
                borderRadius: 0,
                maxWidth: { xs: "100%", sm: "30%" },
              }}
            >
              <Link to={data.image}>
                <CardMedia
                  component="img"
                  image={data.image}
                  alt="Demo"
                  sx={{ height: "200px" }}
                />
              </Link>
              <CardContent sx={{ textAlign: "center" }}>
                <Typography variant="body2" color="text.secondary">
                  {data.description}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Stack>
      </Container>
    </>
  );
}
