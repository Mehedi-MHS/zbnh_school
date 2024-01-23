import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import ListItemIcon from "@mui/material/ListItemIcon";
import HomeIcon from "@mui/icons-material/Home";
import CircleNotificationsIcon from "@mui/icons-material/CircleNotifications";
import CoPresentIcon from "@mui/icons-material/CoPresent";
import GroupsIcon from "@mui/icons-material/Groups";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import InfoIcon from "@mui/icons-material/Info";
import DashboardIcon from "@mui/icons-material/Dashboard";
import Link from "./custom/CustomLink"; //created custom link to work mui with react-router-dom
import Divider from "@mui/material/Divider";
import { Stack } from "@mui/material";
import { useState, useEffect } from "react";
import settings from "../helpers/Settings";
const drawerWidth = 240;
const navItems = [
  {
    name: "Home",
    url: "/",
    icon: <HomeIcon />,
  },
  {
    name: "Notice",
    url: "notice",
    icon: <CircleNotificationsIcon />,
  },
  {
    name: "Teachers",
    url: "teachers",
    icon: <CoPresentIcon />,
  },
  {
    name: "Students",
    url: "students",
    icon: <GroupsIcon />,
  },
  {
    name: "Gallery",
    url: "gallery",
    icon: <InsertPhotoIcon />,
  },
  {
    name: "About School",
    url: "about",
    icon: <InfoIcon />,
  },
  {
    name: "Dashboard",
    url: "dashboard",
    icon: <DashboardIcon />,
  },
];

export default function NavBar(props) {
  const [logoURL, setLogoURL] = useState("/images/logo.png");
  useEffect(() => {
    getLogo();
  }, []);
  const getLogo = async () => {
    const req = await fetch(settings.backendURL + "/settings", {
      method: "GET",
    });
    const res = await req.json();
    if (res.length > 0) {
      setLogoURL(res[0]?.logoURL);
    }
  };

  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle}>
      {/*<Typography variant="h6" sx={{ my: 2 }}>
        MUI
      </Typography>
      <Divider />
      */}
      <List>
        {navItems.map((item, index) => (
          <Link key={index} to={item.url}>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>{item.icon}</ListItemIcon>

                <ListItemText primary={item.name} />
              </ListItemButton>
            </ListItem>

            <Divider />
          </Link>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Box
            component="img"
            src={logoURL ? logoURL : "/images/logo.png"}
            sx={{
              width: { xs: "60px", sm: "80px" },
              height: "auto",
              ml: { xs: "30%", sm: 0 },
            }}
          />
          {/* <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "block", sm: "block" } }}
          >
            MUI
          </Typography>
          */}
          <Stack
            direction="row"
            spacing={{ sm: 3 }}
            sx={{
              display: { xs: "none", sm: "block" },
              ml: { sm: 7 },
            }}
          >
            {navItems.map((item, index) => (
              <Link
                key={index}
                to={item.url}
                sx={{ color: "#fff", textDecoration: "none" }}
              >
                <Button sx={{ color: "#fff" }} startIcon={item.icon}>
                  {" "}
                  {item.name}
                </Button>
              </Link>
            ))}
          </Stack>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      <Toolbar />
      {/*
        <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
      </Box>
        */}
    </Box>
  );
}
