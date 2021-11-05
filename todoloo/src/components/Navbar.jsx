import * as React from "react";
import AppBar from "@mui/material/AppBar";
import { Button, Toolbar } from "@material-ui/core";

function Navbar() {
  return (
    <React.Fragment>
      <AppBar
        position="fixed"
        sx={{ top: "auto", bottom: 0, backgroundColor: "#3bc3c3" }}
      >
        <Toolbar>
          <Button color="inherit">Add a Review+</Button>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}

export default Navbar;
