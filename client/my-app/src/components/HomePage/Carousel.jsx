import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useState, useEffect } from "react";
import Carousel from "react-material-ui-carousel";
export default function CarouselComponent() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    getPosts();
  }, []);

  const getPosts = async () => {
    const req = await fetch("http://localhost:3000/gallery", {
      method: "GET",
      headers: { "Content-type": "application/json" },
    });
    const res = await req.json();
    if (res.length > 0) {
      if (res.length > 4) {
        setPosts(res.slice(0, 4));
      } else {
        setPosts(res);
      }
    }
  };

  return (
    <>
      <Container
        sx={{
          mb: "3rem",
          mt: "2rem",
        }}
      >
        <Typography
          variant="h5"
          component="p"
          sx={{ mb: "1rem", textAlign: "center" }}
        >
          Recent Posts
        </Typography>
        <Carousel
          animation="slide"
          stopAutoPlayOnHover="false"
          cycleNavigation="true"
        >
          {posts.map((post, index) => (
            <Item key={index} item={post} />
          ))}
        </Carousel>
      </Container>
    </>
  );
}

function Item(props) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        rowGap: "1rem",
        width: { sm: "40%", height: "auto" },
        margin: "0px auto",
        padding: { sm: "1rem" },
        textAlign: "center",
      }}
    >
      <img
        src={props.item.imageURL}
        alt={props.item.description}
        style={{
          border: "5px solid white",
          boxShadow: "0px 1px 3px black",
        }}
      />
      <Typography variant="p">{props.item.description}</Typography>
    </Box>
  );
}
