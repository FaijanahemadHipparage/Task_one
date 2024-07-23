import React from "react";
import { AppBar, Button, Typography, Toolbar } from "@mui/material";

const Navebar = () => {
  return (
    <AppBar position="Static">
      <Toolbar position="">
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Registration Form
        </Typography>
        <Button variant="text" color="inherit">
          Home
        </Button>
        <Button variant="text" color="inherit">
          About
        </Button>
        <Button variant="text" color="inherit">
          Login
        </Button>

        <Button variant="text" color="inherit">
          LogOut
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navebar;
