import React, { Component } from "react";
import Navbar from "../Navbar";
import Cards from "../home/Cards";
import { Container, Box, Button, Typography } from "@mui/material";
import ReviewCreate from "../reviews/ReviewCreate";

class HomeIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };

    this.handleClose = this.handleClose.bind(this);
    this.handleOpen = this.handleOpen.bind(this);
  }
  handleClose() {
    this.setState({ open: !this.state.open });
  }
  handleOpen() {
    this.setState({ handleOpen: !this.state.handleOpen });
  }

  render() {
    return (
      <Container class="main">
        <Container>
          <Typography variant="h1" color="primary">
            Welcome!
          </Typography>
          <Typography variant="h3">
            Thank you for joining our community, the more feedback we can get
            the better.
          </Typography>
          <Button
            type="submit"
            color="secondary"
            variant="contained"
            onClick={() => this.setState({ open: true })}
          >
            Add a Review
          </Button>
        </Container>

        <div>
          {/* <Navbar /> */}
          <Cards />
        </div>
        {this.state.open && (
          <ReviewCreate
            open={this.state.open}
            handleClose={this.handleClose}
            sessionToken={this.props.sessionToken}
          />
        )}
      </Container>
    );
  }
}
export default HomeIndex;
