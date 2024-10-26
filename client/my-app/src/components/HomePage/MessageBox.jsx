import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { Divider } from "@mui/material";
import Box from "@mui/material/Box";
import { useState, useEffect } from "react";
import settings from "../../helpers/Settings";
export default function MessageBox() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    getMessages();
  }, []);
  const getMessages = async () => {
    const req = await fetch(settings.backendURL + "/getHeadmasterMessage", {
      method: "get",
      headers: { "Content-type": "application/json" },
      credentials: "include",
    });
    const res = await req.json();
    setMessages(res);
  };

  return (
    <>
      <Container sx={{ width: "100%", margin: "2rem auto" }}>
        <Stack
          direction={{ sm: "row", xs: "column" }}
          gap={2}
          justifyContent="space-around"
        >
          {messages.map((info, index) => (
            <Box
              key={index}
              sx={{
                width: { xs: "100%", sm: "400px" },
                minHeight: "150px",
                borderRadius: "10px",
                padding: "0.5rem",
                border: "1px solid lightGray",
                marginBottom: "1rem",
                background: "rgba(30,144,255,0.05)",
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  background: "#1272cc",
                  borderRadius: "5px 5px 0 0",
                  padding: "0.5rem 0 0.5rem 0",
                }}
              >
                <Typography
                  variant="h6"
                  color="purple"
                  textAlign="center"
                  sx={{ color: "white" }}
                >
                  {info.title || "Message of the Headmaster".toUpperCase()}
                </Typography>
              </Box>
              <Divider />
              <Stack
                direction={{ sm: "row", xs: "column" }}
                gap={2}
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
                      borderRadius: "10px",
                    }}
                  />
                </Box>
                <Box sx={{ width: { xs: "100%", sm: "70%" } }}>
                  <Typography variant="p" sx={{ align: "justify" }}>
                    {info.description}
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
