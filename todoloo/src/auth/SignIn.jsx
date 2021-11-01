import React, { Component } from "react";
import {
  Dialog,
  Button,
  TextField,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Box
} from "@material-ui/core";

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      message: "",
      open: false,
    };
  }

  setEmail = (e) => {
    this.setState({
      email: e.target.value,
    });
  };

  setPassword = (e) => {
    this.setState({
      password: e.target.value,
    });
  };

  signIn = () => {
    if (this.state.username === "react" && this.state.password === "password") {
      this.setState({
        open: true,
        message: "You have successfully Logged In!",
      });
    } else {
      this.setState({
        open: true,
        message: "Incorrect Username or Password!",
      });
    }
  };

  handleClose = () => {
    this.setState({
      open: false,
    });
  };

  render() {
    return (
      <Box
      sx={BoxContainerSx}>
      <Box
          component="form"
          sx={BoxFormSx}
          noValidate
          autocomplete="off"
      >
            <TextField
              variant="standard"
              placeholder="Username"
              margin="normal"
              required
              onChange={this.setEmail}
              value={this.state.email}
            />
            <TextField
              variant="standard"
              placeholder="Password"
              margin="normal"
              required
              type="password"
              onChange={this.setPassword}
              value={this.state.password}
            />

            <div className="Button">
              <Button
                variant="contained"
                color="primary"
                onClick={() => {
                  this.signIn();
                }}
              >
                Log In
              </Button>
            </div>
          </div>
          <Dialog
            open={this.state.open}
            onClose={this.handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">Sign In</DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                {this.state.message}
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={this.handleClose} color="primary">
                Okay
              </Button>
            </DialogActions>
          </Dialog>
          </Box>
        </Box>
    
  }
}
export default SignIn;
