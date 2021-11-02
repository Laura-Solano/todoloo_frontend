import React, { Component } from "react";
import {
  Button,
  TextField,
  Box,
  Container,
  Typography,
  Avatar,
  Grid,
  Link,
} from "@material-ui/core";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      userName: "",
      password: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
  }
  handleEmailChange(e) {
    this.setState({ email: e.target.value });
    console.log("handlechange", e);
  }
  handlePasswordChange(e) {
    this.setState({ password: e.target.value });
    console.log("handlechange", e);
  }
  handleUsernameChange(e) {
    this.setState({ userName: e.target.value });
    console.log("handlechange", e);
  }
  handleSubmit(e) {
    console.log("form submitted");
    e.preventDefault();
  }

  render() {
    return (
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            boxShadow: 24,
            bgcolor: "tertiary.main",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign Up
          </Typography>

          <Box
            component="form"
            noValidate
            onSubmit={this.handleSubmit}
            sx={{
              "& .MuiTextField-root": {
                m: 2,
                width: "40ch",
                maxWidth: "100%",
              },
              textAlign: "center",
            }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  variant="standard"
                  placeholder="Email Address"
                  margin="normal"
                  required
                  onChange={this.handleEmailChange}
                  value={this.state.email}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="standard"
                  placeholder="Username"
                  margin="normal"
                  required
                  onChange={this.handleUsernameChange}
                  value={this.state.userName}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="standard"
                  placeholder="Password"
                  margin="normal"
                  required
                  onChange={this.handlePasswordChange}
                  value={this.state.password}
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  type="submit"
                  variant="contained"
                  color="secondary"
                  sx={{ width: "40ch" }}
                  onClick={this.handleSubmit}
                >
                  Sign Up
                </Button>
              </Grid>
              <Grid item xs={12}>
                <Link href="#" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    );
  }
}
