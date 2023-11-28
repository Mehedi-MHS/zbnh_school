import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { Divider } from "@mui/material";
import Box from "@mui/material/Box";

export default function MessageBox() {
  const demoInfo = [
    {
      title: "Message of the Headmaster",
      picURL: "",
      message:
        "I welcome you all the faculty members and lorem ipsum Dolor sit amet. Toe build a digital bangladesh",
    },
    {
      title: "Message of Assistant Headmaster",
      picURL: "",
      message:
        "I welcome you all the faculty members and lorem ipsum Dolor sit amet. Toe build a digital bangladesh",
    },
  ];

  return (
    <>
      <Container sx={{ width: "100%", margin: "2rem auto" }}>
        <Stack
          direction={{ sm: "row", xs: "column" }}
          gap={2}
          justifyContent="space-around"
        >
          {demoInfo.map((info, index) => (
            <Box
              key={index}
              sx={{
                width: { xs: "100%", sm: "400px" },
                minHeight: "150px",
                borderRadius: "10px",
                padding: "0.5rem",
                border: "1px solid lightGray",
                marginBottom: "1rem",
              }}
            >
              <Box sx={{ width: "100%" }}>
                <Typography variant="h6" color="purple" textAlign="center">
                  {info.title.toUpperCase() ||
                    "Message of the Headmaster".toUpperCase()}
                </Typography>
              </Box>
              <Divider />
              <Stack
                direction={{ sm: "row", xs: "column" }}
                gap={1}
                justifyContent="space-between"
                sx={{ marginTop: "0.5rem" }}
              >
                <Box
                  sx={{
                    width: { xs: "45%", sm: "30%" },
                    margin: { xs: "0px auto" },
                  }}
                >
                  <img
                    src={info.picURL || "/images/avatar0.webp"}
                    style={{
                      width: "100%",
                    }}
                  />
                </Box>
                <Box sx={{ width: { xs: "100%", sm: "70%" } }}>
                  <Typography variant="p" textAlign="justify">
                    {info.message}
                  </Typography>
                </Box>
              </Stack>
            </Box>
          ))}
        </Stack>
      </Container>
    </>
  );
}
