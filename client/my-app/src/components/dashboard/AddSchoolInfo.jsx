import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { Card, CardContent, CardActions } from "@mui/material";
import Container from "@mui/material/Container";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import { useState } from "react";
import { imageResizer } from "../../helpers/ImageResizer";
export default function AddSchoolInfo() {
  const [info, setInfo] = useState({
    title: "",
    description: "",
    picData: "",
  });
  const VisuallyHiddenInput = styled("input")({
    clip: "rect(0 0 0 0)",
    clipPath: "inset(50%)",
    height: 1,
    overflow: "hidden",
    position: "absolute",
    bottom: 0,
    left: 0,
    whiteSpace: "nowrap",
    width: 1,
  });

  const handleImageInput = async (e) => {
    setInfo((prev) => ({ ...prev, fileName: e.target.files[0].name }));
    const resizedImage = await imageResizer(e.target.files[0]);
    setInfo((prev) => ({ ...prev, picData: resizedImage.resizedData }));
  };

  return (
    <>
      <Box
        sx={{
          width: "100%",
          minHeight: "70vh",
          background: "rgba(0,0,0,0.1)",
          top: 0,
          paddingTop: "3rem",
          paddingBottom: "2rem",
        }}
      >
        <Container
          sx={{
            marginTop: "2rem",
          }}
        >
          <Typography variant="h4" component="h1" textAlign="center">
            Add School Information
          </Typography>
          <Card
            sx={{ maxWidth: { xs: "100%", sm: "40%" }, margin: " 2rem auto" }}
          >
            <CardContent>
              <TextField
                type="text"
                label="Title"
                variant="standard"
                sx={{ marginBottom: 2 }}
                fullWidth
                onChange={(e) =>
                  setInfo((prev) => ({ ...prev, title: e.target.value }))
                }
              />
              <TextField
                type="text"
                label="Description..."
                fullWidth
                multiline
                sx={{ marginBottom: 2 }}
                rows={2}
                onChange={(e) =>
                  setInfo((prev) => ({ ...prev, description: e.target.value }))
                }
              />
              <IconButton component="label" color="success">
                <AddPhotoAlternateIcon />
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ marginLeft: "2px" }}
                >
                  Add Picture
                </Typography>
                <VisuallyHiddenInput
                  type="file"
                  accept="image/*"
                  onChange={handleImageInput}
                />
              </IconButton>
              {info.picData.length > 0 ? (
                <img
                  src={info.picData}
                  style={{ width: "200px", margin: "1rem" }}
                />
              ) : null}
            </CardContent>
            <CardActions>
              <Button variant="contained" color="success" fullWidth>
                Save Changes
              </Button>
            </CardActions>
          </Card>
        </Container>
      </Box>
    </>
  );
}
