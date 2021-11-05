import * as React from "react";
import AppBar from "@mui/material/AppBar";
import { Toolbar, Box, Link, Button } from "@material-ui/core";
import Icon from "../assets/images/Icon1.JPG";
import { Link as RouterLink } from "react-router-dom";
function Header() {
  return (
    <React.Fragment>
      <AppBar
        color="default"
        position="fixed"
        sx={{
          justifyContent: "space-between",
          backgroundColor: "#9575cd",
        }}
      >
        <Toolbar color="primary">
          <Box />
          <Link to="/">
            <Box
              component="img"
              sx={{
                width: 50,
                maxHeight: { xs: 233, md: 180 },
                maxWidth: { xs: 350, md: 250 },
              }}
              alt="TodoLoo"
              src={Icon}
            />
          </Link>
          <Box sx={{ flex: 1, display: "flex", justifyContent: "flex-end" }}>
            <Button variant="contained" href="/auth/signup">
              Join In
            </Button>
            <Button variant="outlined" href="/auth/signin">
              Sign In
            </Button>
            <Button
              href="/"
              onClick={() => this.props.clearToken()}
              className="headerButton"
              style={{
                visibility: localStorage.getItem("token")
                  ? "visible"
                  : "hidden",
                color: "#3E239E",
              }}
            >
              Logout
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </React.Fragment>
  );
}

export default Header;
