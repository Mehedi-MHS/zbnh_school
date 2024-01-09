import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import Link from "./custom/CustomLink";
import Container from "@mui/material/Container";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
export default function NotFound() {
  return (
    <>
      <Container
        sx={{
          marginTop: "15vh",
          marginBottom: "2rem",
        }}
      >
        <Typography
          variant="h3"
          component="h1"
          color="text.secondary"
          sx={{ textAlign: "center" }}
        >
          <SentimentVeryDissatisfiedIcon
            sx={{ color: "inherit", fontSize: "inherit" }}
          />
          <br />
          Sorry! This page is unavailable.
          <br />
          <Link to="/">
            <Button
              variant="contained"
              endIcon={<ArrowForwardIosIcon />}
              sx={{ marginTop: "20vh" }}
            >
              Go to home
            </Button>
          </Link>
        </Typography>
      </Container>
    </>
  );
}
