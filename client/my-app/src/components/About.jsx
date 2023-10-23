import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

import Stack from "@mui/material/Stack";

export default function About() {
  const demoPost = [
    {
      id: 1,
      title: "Our School At a Glance",
      image: "/images/school.jpg",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpnemo animi maxime aliquid, itaque nobis eveniet quisquam istecupiditate eligendi corporis aspernatur, eos harum minima intemporibus facere hic omnis",
    },
    {
      id: 2,
      title: "Our Mission and Vision",
      image: "/images/school.jpg",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpnemo animi maxime aliquid, itaque nobis eveniet quisquam istecupiditate eligendi corporis aspernatur, eos harum minima intemporibus facere hic omnis",
    },
  ];
  return (
    <>
      <Container
        sx={{
          width: "100vw",

          padding: { xs: "2rem 0.5rem", sm: "5rem 0.5rem" },
        }}
      >
        <Stack direction={{ xs: "column", sm: "row" }} gap={3}>
          {demoPost.map((post, index) => (
            <Card
              key={index}
              sx={{ maxWidth: { xs: "100%", sm: "33%" }, margin: "auto" }}
            >
              <CardMedia
                sx={{ height: 180 }}
                image={post.image}
                title="School"
              />
              <CardContent>
                <Typography
                  variant="h5"
                  component="div"
                  gutterBottom
                  textAlign="center"
                >
                  {post.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {post.description}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Stack>
      </Container>
    </>
  );
}
