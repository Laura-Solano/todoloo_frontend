import React, { Component } from "react";
import { Container, Typography } from "@mui/material";
import ReviewCreate from "../reviews/ReviewCreate";
import ReviewEdit from "../reviews/ReviewEdit";
import ReviewCard from "../reviews/ReviewCard";
import ReplyIndex from "../reply/ReplyIndex";
import ReplyCreate from "../reply/ReplyCreate";
class HomeIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: [],
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
  //Create Review

  handleOpen() {
    this.setState({ handleOpen: !this.state.handleOpen });
  }

  //Delete All Reviews
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
  //Edit Review
  reviewUpdate = (e, review) => {
    e.preventDefault();
    fetch(`http://localhost:3000/reviews/Edit/${review.id}`, {
      method: "PUT",
      body: JSON.stringify({ reviews: review }),
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: this.props.sessionToken,
      }),
    }).then((res) => {
      this.setState({ updatePress: false });
      this.fetchReviews();
    });
  };
  setUpdatedReview = (e, review) => {
    this.setState({
      reviewToUpdate: review,
      updatePressed: true,
    });
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

        <ReplyCreate
          sessionToken={this.props.sessionToken}
          replyArray={this.fetchReplies}
        />
        <div>
          <ReviewCard
            reviews={this.state.reviews}
            delete={this.reviewDelete}
            update={this.reviewUpdate}
          />
        </div>

        <ReviewEdit
          t={this.state.updatePressed}
          update={this.reviewUpdate}
          review={this.state.reviewToUpdate}
        />
        <div></div>
        <ReplyIndex />
      </Container>
    );
  }
}

export default HomeIndex;
