import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState, useEffect } from "react";
export default function Carousel() {
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
      setPosts(res);
    }
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <Arrow />,
    prevArrow: <Arrow />,
  };

  return (
    <>
      <Container
        sx={{
          mb: "3rem",
          mt: "2rem",
          maxWidth: "95%",
          pb: "3rem",
          pt: "2rem",
        }}
      >
        <Typography
          variant="h5"
          component="p"
          sx={{ mb: "1rem", textAlign: "center" }}
        >
          Recent Posts
        </Typography>
        <Slider {...settings}>
          {posts.map((data, index) => (
            <Box key={index} sx={{ textAlign: "center" }}>
              <img src={data.image} />
              <Typography variant="p">{data.description}</Typography>
            </Box>
          ))}
        </Slider>
      </Container>
    </>
  );
}

function Arrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "blue",
        borderRadius: "100px",
        padding: "0px auto",
      }}
      onClick={onClick}
    />
  );
}
