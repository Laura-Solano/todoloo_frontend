import React, { Component } from "react";
import {
  Button,
  TextField,
  Box,
  Container,
  Typography,
  Avatar,
  Grid,
} from "@material-ui/core";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { Link } from "react-router-dom";

export default class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    fetch("http://localhost:3000/user/login", {
      method: "POST",
      body: JSON.stringify({
        user: {
          email: this.state.email,
          password: this.state.password,
        },
      }),
      headers: new Headers({
        "Content-Type": "application/json",
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        this.props.updateToken(data.sessionToken);
      });
  };

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
            bgcolor: "White",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "primary" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5" color="primary">
            Sign In
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
                  variant="filled"
                  placeholder="Email Address"
                  margin="normal"
                  required
                  onChange={(e) => this.setState({ email: e.target.value })}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="standard"
                  placeholder="Password"
                  margin="normal"
                  required
                  onChange={(e) => this.setState({ password: e.target.value })}
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  type="submit"
                  variant="contained"
                  sx={{ width: "40ch" }}
                >
                  Sign In
                </Button>
              </Grid>
              <Grid item xs={12}>
                <Link to="/auth/signup">Don't have an account? Sign up</Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    );
  }
}
