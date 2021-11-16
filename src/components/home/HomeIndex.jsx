import React, { Component } from "react";
import { Container, Typography } from "@mui/material";
import ReviewCreate from "../reviews/ReviewCreate";
import ReviewEdit from "../reviews/ReviewEdit";
import ReviewCard from "../reviews/ReviewCard";
import APIURL from "../../helpers/environment";
class HomeIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: [],
      reviewToUpdate: {},
      reply: [],
      updateActive: false,
      open: false,
      reviewToReply: {},
      replyToEdit: {},
    };
  }
  ////GET all reviews
  componentWillMount() {
    this.fetchReviews();
  }
  fetchReviews = () => {
    fetch(`${APIURL}reviews`, {
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
    fetch(`${APIURL}reviews/Delete/${e.target.id}`, {
      method: "DELETE",
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: this.props.sessionToken,
      }),
    })
      .then((res) => this.fetchReviews())
      .catch((error) => console.log(error));
  };
  //create Reply
  handleReply = (review) => {
    this.setState({ reviewToReply: review });
  };
  // Edit Reply;
  handleReplyEdit = (reply) => {
    this.setState({ replyToEdit: reply });
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
            reply={this.state.reply}
            handleReply={this.handleReply}
            reviewToReply={this.state.reviewToReply}
            sessionToken={this.props.sessionToken}
            fetchReviews={this.fetchReviews}
            replyToEdit={this.state.replyToEdit}
            handleReplyEdit={this.handleReplyEdit}
          />
        </div>
        {this.state.updateActive && (
          <ReviewEdit
            reviewToUpdate={this.state.reviewToUpdate}
            sessionToken={this.props.sessionToken}
            handleUpdateReview={this.handleUpdateReview}
            handleClose={this.handleClose}
            reviewArray={this.fetchReviews}
          />
        )}

        <div></div>
      </Container>
    );
  }
}

export default HomeIndex;
