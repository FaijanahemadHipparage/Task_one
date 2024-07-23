import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

const Footer = () => {
  return (
    <AppBar position="static" color="primary" sx={{ top: "auto", bottom: 0 }}>
      <Toolbar>
        <Typography color="inherit" flexGrow={1}>
          2024 &copy; Demo footer
        </Typography>
        <Typography color="inherit">
          Email-: faijan.ahemad@nwssoft.com
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Footer;
