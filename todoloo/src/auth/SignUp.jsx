import React, { Component } from "react";
import {
  Dialog,
  Button,
  TextField,
  Box,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@material-ui/core";
export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      userName: "",
      password: "",
      message: "",
      registrationError: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    CSSConditionRule.log("handlechange", e);
  }
  handleSubmit(e) {
    e.preventDefault();
  }
  render() {
    return (
      <Box>
        <Box component="form" onSubmit={this.handleSubmit}>
          <div>
            <TextField
              variant="standard"
              placeholder="Email Address"
              margin="normal"
              required
              onChange={this.handleChange}
              value={this.state.email}
            />
          </div>
          <div>
            <TextField
              variant="standard"
              placeholder="Username"
              margin="normal"
              required
              onChange={this.handleChange}
              value={this.state.userName}
            />
          </div>
          <div>
            <TextField
              variant="standard"
              placeholder="Password"
              margin="normal"
              required
              onChange={this.handleChange}
              value={this.state.password}
            />
            <div>
              <Button
                variant="contained"
                color="secondary"
                sx={{ width: "40ch" }}
                onClick={this.handleSubmit}
              >
                Join In
              </Button>
            </div>
          </div>
        </Box>
      </Box>
    );
  }
}
