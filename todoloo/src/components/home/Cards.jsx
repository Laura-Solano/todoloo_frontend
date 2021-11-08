import React, { Component } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { CardActionArea } from "@mui/material";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import ReviewCreate from "../reviews/ReviewCreate";

export default class Cards extends Component {
  constructor(props) {
    super(props);
    this.state = { reviews: {} };
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

  // fetchReviewCards = async () => {
  //   try {
  //     const response = await fetch("http://localhost:3000/reviews");
  //     const jsonData = await response.json();
  //     console.log(jsonData.reviews);
  //     this.setState({
  //       reviews: jsonData.reviews,
  //     });
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };
  // fetchReviewCards = () => {
  //   fetch("http://localhost:3000/reviews")
  //   .then((response) => response.json());
  //   .then((jsonData) =>{
  //     console.log(jsonData)
  //     if(jsonData){
  //       this.setState({
  //         reviews: jsonData.reviews
  //       })
  //     }
  //   })
  // };

  render() {
    return (
      <Container maxWidth="sm">
        <Stack
          sx={{ pt: 4 }}
          direction="row"
          spacing={2}
          justifyContent="center"
        ></Stack>
        <Container sx={{ py: 8 }} maxWidth="md">
          <Grid container spacing={4}>
            {this.state.reviews.map((review) => (
              <Grid item key={review.id} xs={12} sm={6} md={4}>
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <CardActionArea>
                    <Link to={`/reviews/${review.id}`}>
                      <CardMedia
                        component="img"
                        sx={{
                          pt: "56.25%",
                        }}
                        image={review.photoUrl}
                        alt={review.locationName}
                      />
                      <CardContent sx={{ flexGrow: 1 }}>
                        <Typography
                          gutterBottom
                          variant="h5"
                          component="h2"
                          noWrap
                        >
                          {review.locationName}
                        </Typography>
                        <Typography>{review.review}</Typography>
                      </CardContent>

                      <Button size="small">View</Button>
                      <Button size="small">Edit</Button>
                    </Link>
                  </CardActionArea>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Container>
    );
  }
}
