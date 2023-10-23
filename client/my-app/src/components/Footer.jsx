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

export default function Footer() {
  const mainMenuOptions = [
    { title: "Notice", url: "/notice" },
    { title: "Teachers", url: "/teachers" },
    { title: "Students", url: "/students" },
    { title: "Gallery", url: "/gallery" },
    { title: "About School", url: "/about" },
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
      title: "+88012354879",
      url: "callto:+88012354879",
    },
    {
      icon: <EmailIcon sx={{ color: "orange" }} />,
      title: "headmaster.zbnhschool@gmail.com",
      url: "mailto:headmaster.zbnhschool@gmail.com",
    },
    {
      icon: <LocationOnIcon sx={{ color: "orange" }} />,
      title: "ZamiderHat, Begumgonj, Noakhali -3200",
      url: "",
    },
  ];
  return (
    <>
      <Box
        sx={{
          maxWidth: "100vw",
          overflow: "hidden",
          padding: { xs: "1rem 0.5rem", sm: "2rem 1rem" },
          background: "darkBlue",
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
        Developer
      </Typography>
    </>
  );
}
