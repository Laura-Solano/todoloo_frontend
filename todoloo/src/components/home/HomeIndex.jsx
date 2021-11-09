import React, { Component } from "react";
import { Container, Box, Button, Typography } from "@mui/material";
import ReviewCreate from "../reviews/ReviewCreate";
import AllCards from "./AllCards";
import ReviewCard from "../reviews/ReviewCard";
class HomeIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: [],
    };
  }
  componentWillMount() {
    this.fetchReviews();
  }
  fetchReviews = () => {
    fetch("http://localhost:3000/reviews", {
      method: "GET",
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: this.props.token,
      }),
    })
      .then((res) => res.json())
      .then((jsonData) => {
        return this.setState({ reviews: jsonData });
      });
  };

  handleOpen() {
    this.setState({ handleOpen: !this.state.handleOpen });
  }

  reviewDelete = (event) => {
    console.log(event.target.id);
    fetch(`http://localhost:3000/reviews/Delete/${event.target.id}`, {
      method: "DELETE",
      //body: JSON.stringify({ reviews: { id: event.target.id } }),
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: this.props.sessionToken,
      }),
    })
      .then((res) => this.fetchReviews())
      .catch((error) => console.log(error));
  };

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
        </Container>

        {/* <Navbar /> */}

        <ReviewCreate
          sessionToken={this.props.sessionToken}
          reviewArray={this.fetchReviews}
        />
        <div>
          {/* <AllCards /> */}
          <ReviewCard reviews={this.state.reviews} delete={this.reviewDelete} />
        </div>
      </Container>
    );
  }
}

export default HomeIndex;
