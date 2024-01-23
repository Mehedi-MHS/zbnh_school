import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import { Card, CardMedia, CardContent } from "@mui/material";
import Link from "./custom/CustomLink";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";
import SEO from "./custom/SEO";
import { useState, useEffect } from "react";
import settings from "../helpers/Settings";
export default function Gallery() {
  const [galleryData, setGalleryData] = useState([]);

  useEffect(() => {
    getGalleryData();
  }, []);

  const getGalleryData = async () => {
    const req = await fetch(settings.backendURL + "/gallery", {
      method: "GET",
      headers: { "Content-type": "application/json" },
    });
    const res = await req.json();
    if (res.length > 0) {
      setGalleryData(res);
    }
  };

  return (
    <>
      <SEO
        title="Gallery"
        description="See all the latest events of ZamiderHat Begum Nurunnahar High School"
        name="ZamiderHat Begum Nurunnahar High School"
        type="Article"
      />
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
        <Stack
          direction={{ xs: "column", sm: "row" }}
          gap={3}
          flexWrap="wrap"
          justifyContent="space-around"
          sx={{ margin: "1px auto" }}
        >
          {galleryData.length > 0 ? (
            galleryData.map((data, index) => (
              <Card
                key={index}
                sx={{
                  background: "none",
                  boxShadow: "none",
                  borderRadius: 0,
                  maxWidth: { xs: "100%", sm: "30%" },
                }}
              >
                <Link to={data.imageURL}>
                  <CardMedia
                    component="img"
                    image={data.imageURL}
                    alt={data.description}
                    sx={{ height: "200px" }}
                  />
                </Link>
                <CardContent sx={{ textAlign: "center" }}>
                  <Typography variant="body2" color="text.secondary">
                    {data.description}
                  </Typography>
                </CardContent>
              </Card>
            ))
          ) : (
            <GallerySkeleton />
          )}
        </Stack>
      </Container>
    </>
  );
}

function GallerySkeleton() {
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
