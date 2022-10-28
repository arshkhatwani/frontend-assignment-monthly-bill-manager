import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

export default function Navbar() {
  return (
    <Box className="mb-8" sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Monthly Budget Manager
          </Typography>

          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Monthly Budget : 50000
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
