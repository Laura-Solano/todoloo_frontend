import * as React from "react";
import AppBar from "@mui/material/AppBar";
import { Button, Toolbar } from "@material-ui/core";

function NavBar() {
  return (
    <React.Fragment>
      <AppBar
        position="fixed"
        sx={{ top: "auto", bottom: 0, color: "primary.main" }}
      >
        <Toolbar>
          <Button color="secondary">Login</Button>
          <Button color="secondary">Sign Up</Button>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}

export default NavBar;
