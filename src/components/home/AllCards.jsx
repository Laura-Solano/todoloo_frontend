import React, { Component } from "react";
import ReviewCard from "../reviews/ReviewCard";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";
export default class Cards extends Component {
  constructor(props) {
    super(props);
    this.state = { reviews: [] };
  }
  fetchReviewCArds = () => {
    fetch("http://localhost:3000/reviews")
      .then((resp) => resp.json())
      .then((jsonData) => {
        console.log(jsonData);
        if (jsonData) {
          this.setState({
            reviews: jsonData.reviews,
          });
        }
      });
  };
  render() {
    return (
      <div>
        <div></div>
      </div>
    );
  }
}
