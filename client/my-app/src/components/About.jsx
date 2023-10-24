import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";
import { useState, useEffect } from "react";
export default function About() {
  const [post, setPost] = useState([]);

  useEffect(() => {
    getPost();
  }, []);

  const getPost = async () => {
    const req = await fetch("http://localhost:3000/about", {
      method: "GET",
      headers: { "Content-type": "application/json" },
    });
    const res = await req.json();
    if (res.length > 0) {
      setPost(res);
    }
  };

  return (
    <>
      <Container
        sx={{
          width: "100vw",

          padding: { xs: "2rem 0.5rem", sm: "5rem 0.5rem" },
        }}
      >
        <Stack direction={{ xs: "column", sm: "row" }} gap={3}>
          {post.length > 0 ? (
            post.map((post, index) => (
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
            ))
          ) : (
            <PostSkeleton />
          )}
        </Stack>
      </Container>
    </>
  );
}

function PostSkeleton() {
  return (
    <>
      <Stack direction={{ sm: "row" }} gap={3}>
        {[1, 2, 3].map((num, index) => (
          <Box
            key={index}
            sx={{
              width: { xs: "100%", sm: "30vw" },
              maxWidth: { sm: "30vw" },
              height: "300px",
            }}
          >
            <Skeleton
              variant="rectangular"
              sx={{ width: "100%", height: "200px" }}
              animation="wave"
            />

            <Skeleton
              variant="text"
              animation="wave"
              sx={{ width: "100%", marginTop: "1rem" }}
            />
          </Box>
        ))}
      </Stack>
    </>
  );
}
