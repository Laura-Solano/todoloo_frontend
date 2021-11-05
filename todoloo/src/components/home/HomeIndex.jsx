import React, { Component } from "react";
import Navbar from "../Navbar";
import Cards from "../home/Cards";
import { Container, Box } from "@mui/material";
class HomeIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userActive: false,
    };
    this.registerActiveOff = this.registerActiveOff.bind(this);
  }

  registerActiveOn() {
    this.setState({
      registerActive: true,
    });
  }

  registerActiveOff() {
    this.setState({
      registerActive: false,
    });
  }
  render() {
    return (
      <Container>
        <Box>I'm placing something here</Box>
        <div>
          <Navbar />
          <Cards />
        </div>
      </Container>
    );
  }
}
export default HomeIndex;
