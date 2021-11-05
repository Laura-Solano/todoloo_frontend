import * as React from "react";
import AppBar from "@mui/material/AppBar";
import { Button, Toolbar } from "@material-ui/core";

function Navbar() {
  return (
    <React.Fragment>
      <AppBar
        position="fixed"
        sx={{ top: "auto", bottom: 0, color: "secondary" }}
      >
        <Toolbar>
          <Button color="secondary">Add a Review+</Button>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}

export default Navbar;
