import React, { Component } from "react";
import { Container, Typography } from "@mui/material";
import ReviewCreate from "../reviews/ReviewCreate";
import ReviewEdit from "../reviews/ReviewEdit";
import ReviewCard from "../reviews/ReviewCard";
class HomeIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: [],
      reviewToUpdate: {},
      replies: [],
      updateActive: false,
      open: false,
    };
  }
  ////GET all reviews
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

  //Edit a Review
  handleUpdateReview = (review) => {
    this.setState({ reviewToUpdate: review });
  };
  handleOpen = () => {
    this.setState({ updateActive: true });
  };
  handleClose = () => {
    this.setState({ updateActive: false });
  };
  //Delete A Reviews
  reviewDelete = (e) => {
    console.log(e.target.id);
    fetch(`http://localhost:3000/reviews/Delete/${e.target.id}`, {
      method: "DELETE",
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: this.props.sessionToken,
      }),
    })
      .then((res) => this.fetchReviews())
      .catch((error) => console.log(error));
  };
  // Delete Reply;
  replyDelete = (e) => {
    console.log(e.target.id);
    fetch(`http://localhost:3000/reply/deleteReply/${e.target.id}`, {
      method: "DELETE",
      body: JSON.stringify({ review: { id: e.target.id } }),
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
            the better relief we all will have.
          </Typography>
        </Container>
        {/* <Navbar /> */}
        <ReviewCreate
          sessionToken={this.props.sessionToken}
          reviewArray={this.fetchReviews}
          updateReviewArray={this.fetchReviews}
        />

        <div>
          <ReviewCard
            reviews={this.state.reviews}
            delete={this.reviewDelete}
            replyDelete={this.replyDelete}
            handleUpdateReview={this.handleUpdateReview}
            handleReplyClose={this.handleReplyClose}
            handleOpen={this.handleOpen}
          />
        </div>
        {this.state.updateActive && (
          <ReviewEdit
            reviewToUpdate={this.state.reviewToUpdate}
            sessionToken={this.props.sessionToken}
            handleUpdateReview={this.handleUpdateReview}
            handleClose={this.handleClose}
          />
        )}

        <div></div>
      </Container>
    );
  }
}

export default HomeIndex;
