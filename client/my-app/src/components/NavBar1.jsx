"use client";
import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Menu,
  MenuItem,
  Drawer,
  List,
  ListItemText,
  Box,
  Button,
  ListItemButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null); // Desktop dropdown anchor

  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  // Mobile drawer content
  const drawer = (
    <Box sx={{ width: 250 }} role="presentation" onClick={handleDrawerToggle}>
      <List>
        <ListItemButton>
          <ListItemText primary="Admissions" />
        </ListItemButton>
        <ListItemButton>
          <ListItemText primary="Events" />
        </ListItemButton>
        <ListItemButton>
          <ListItemText primary="Contact" />
        </ListItemButton>

        {/* About Us dropdown in mobile */}
        <ListItemButton>
          <ListItemText primary="About Us" />
        </ListItemButton>
        <Box sx={{ pl: 4 }}>
          <ListItemButton>
            <ListItemText primary="History" />
          </ListItemButton>
          <ListItemButton>
            <ListItemText primary="Mission" />
          </ListItemButton>
          <ListItemButton>
            <ListItemText primary="Teachers" />
          </ListItemButton>
        </Box>
      </List>
    </Box>
  );

  return (
    <AppBar position="sticky" sx={{ bgcolor: "white", color: "black" }}>
      {/* Row 1: Logo + School Name */}
      <Toolbar sx={{ justifyContent: "space-between",alignItems:"center", borderBottom: "1px solid #ddd" }}>
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <img src="images/logo2.png" alt="logo" style={{ width: 40, height: 40 }} />
          <Box>
          <Typography variant="h6" sx={{ fontWeight: "bold",color:"darkblue" }}>
            Jamidar Hat Begum Nurunnahar High School
          </Typography>
<Typography variant="body2" >ESTD : 1964 ; Jamidar Hat, Begumgonj, Noakhali. </Typography>
          </Box>
        </Box>

        {/* Hamburger for mobile */}
        <IconButton
          edge="end"
          color="inherit"
          aria-label="menu"
          onClick={handleDrawerToggle}
          sx={{ display: { md: "none" } }}
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>

      {/* Row 2: Desktop navigation */}
      <Toolbar sx={{ justifyContent: "center", display: { xs: "none", md: "flex" }, gap: 4, backgroundcolor:"Blue" }}>
        <Button sx={{ color: "black", textTransform: "none" }}>Admissions</Button>
        <Button sx={{ color: "black", textTransform: "none" }}>Events</Button>
        <Button sx={{ color: "black", textTransform: "none" }}>Contact</Button>

        {/* About Us dropdown */}
        <Button
          sx={{ color: "black", textTransform: "none" }}
          endIcon={<ArrowDropDownIcon />}
          onClick={handleMenuClick}
        >
          About Us
        </Button>
        <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
          <MenuItem onClick={handleMenuClose}>History</MenuItem>
          <MenuItem onClick={handleMenuClose}>Mission</MenuItem>
          <MenuItem onClick={handleMenuClose}>Teachers</MenuItem>
        </Menu>
      </Toolbar>

      {/* Mobile drawer */}
      <Drawer anchor="left" open={mobileOpen} onClose={handleDrawerToggle}>
        {drawer}
      </Drawer>
    </AppBar>
  );
}
