import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ListIcon from "@mui/icons-material/List";
import AdjustIcon from "@mui/icons-material/Adjust";
import AddLinkIcon from "@mui/icons-material/AddLink";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ContactsIcon from "@mui/icons-material/Contacts";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Link from "./custom/CustomLink";
import Tooltip from "@mui/material/Tooltip";
import { useState, useEffect } from "react";
import settings from "../helpers/Settings";
export default function Footer() {
  const [info, setInfo] = useState({
    phone: "",
    email: "",
    location: "",
  });

  useEffect(() => {
    getFooterInfo();
  }, []);

  const getFooterInfo = async () => {
    const req = await fetch(settings.backendURL + "/settings", {
      method: "GET",
    });
    const res = await req.json();
    if (res.length > 0) {
      setInfo({
        phone: res[0].phone,
        email: res[0].email,
        location: res[0].location,
      });
    }
  };

  const mainMenuOptions = [
    { title: "Notice", url: "/notice" },
    { title: "Teachers", url: "/teachers" },
    { title: "Students", url: "/students" },
    { title: "Gallery", url: "/gallery" },
    { title: "About School", url: "/about" },
    { title: "News and Events", url: "/news" },
  ];
  const relatedLinks = [
    {
      title: "Education Board Result",
      url: "http://www.educationboardresults.gov.bd/",
    },
    { title: "Ministry Of Education", url: "http://www.moedu.gov.bd/" },
    { title: "DG website", url: "http://www.dshe.gov.bd/" },
    { title: "Banbeis", url: "http://www.banbeis.gov.bd/" },
  ];
  const contactInfo = [
    {
      icon: <CallIcon sx={{ color: "orange" }} />,
      title: info.phone ? info.phone : "01xxxxxxxxx",
      url: `callto:${info?.phone}`,
    },
    {
      icon: <EmailIcon sx={{ color: "orange" }} />,
      title: info.email || "Not available",
      url: `mailto:${info.email}`,
    },
    {
      icon: <LocationOnIcon sx={{ color: "orange" }} />,
      title: info.location || "School road, ZamiderHat, Begumgonj, Noakhali",
      url: "#",
    },
  ];
  return (
    <>
      <Box
        sx={{
          maxWidth: "100vw",
          overflow: "hidden",
          padding: { xs: "1rem 0.5rem", sm: "2rem 1rem" },
          background: "#096b68",
          borderTop: "4px solid #04cca1",
        }}
      >
        <Stack
          direction={{ xs: "column", sm: "row" }}
          gap={3}
          sx={{ justifyContent: { sm: "space-around" } }}
        >
          <Box>
            <Typography variant="h5" component="div" sx={{ color: "white" }}>
              <ListIcon /> Main Menu
            </Typography>
            <Divider />

            <List>
              {mainMenuOptions.map((option, index) => (
                <ListItem key={index} disablePadding>
                  <ListItemButton sx={{ color: "cyan" }}>
                    <AdjustIcon sx={{ color: "orange", fontSize: "1rem" }} />
                    <Link to={option.url}>
                      <ListItemText
                        primary={option.title}
                        sx={{ marginLeft: "2px" }}
                      />
                    </Link>
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Box>
          <Box>
            <Typography variant="h5" component="div" sx={{ color: "white" }}>
              <AddLinkIcon /> Related Links
            </Typography>
            <Divider />
            <List>
              {relatedLinks.map((option, index) => (
                <ListItem key={index} disablePadding>
                  <ListItemButton sx={{ color: "cyan" }}>
                    <AdjustIcon sx={{ color: "orange", fontSize: "1rem" }} />
                    <Link to={option.url}>
                      <ListItemText
                        primary={option.title}
                        sx={{ marginLeft: "2px" }}
                      />
                    </Link>
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Box>
          <Box>
            <Typography variant="h5" component="div" sx={{ color: "white" }}>
              <ContactsIcon /> Contact Information
            </Typography>
            <Divider />
            <List>
              {contactInfo.map((option, index) => (
                <ListItem key={index} disablePadding>
                  <ListItemButton sx={{ color: "cyan" }}>
                    {option.icon}
                    <Link to={option.url}>
                      <ListItemText
                        primary={option.title}
                        sx={{ marginLeft: "2px" }}
                      />
                    </Link>
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Box>
        </Stack>
      </Box>
      <Typography variant="h6" component="div" sx={{ textAlign: "center" }}>
        &copy;Copyright {new Date().getFullYear()}. All rights reserved -
        <Tooltip
          title="Mehedi Hasan Shuvo (Batch: 2019) 
           Email: mehedimhs.dev@gmail.com"
          arrow
        >
          <Typography
            variant="inherit"
            sx={{
              cursor: "pointer",
              textDecoration: "underline",
              display: "inline-block",
              color: "green",
            }}
          >
            &nbsp;Developer
          </Typography>
        </Tooltip>
      </Typography>
    </>
  );
}
