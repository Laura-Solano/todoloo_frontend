import { Component, React } from "react";
import {
  Table,
  Button,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Box,
  Container,
} from "@material-ui/core";
import APIURL from "../../helpers/environment";
import ReplyCreate from "../reply/ReplyCreate";

const ReviewCard = (props) => {
  const replyDelete = (reply) => {
    fetch(`${APIURL}reply/deleteReply/${reply.id}`, {
      method: "DELETE",

      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: props.sessionToken,
      }),
    })
      .then((res) => {
        props.fetchReviews();
      })
      .catch((error) => console.log(error));
  };

  return (
    <TableContainer component={Paper}>
      <h3>Our Reviews</h3>
      <Table sx={{ minWidth: 650 }}>
        <TableHead>
          <TableRow>
            <TableCell align="Center">#</TableCell>
            <TableCell align="Center">Location Name</TableCell>
            <TableCell align="Center">Review</TableCell>
            <TableCell align="Center">Free?</TableCell>
            <TableCell align="Center">Number of Stalls</TableCell>
            <TableCell align="Center">Stall Type</TableCell>
            <TableCell align="Center">Photo</TableCell>
            <TableCell align="Center">Tools</TableCell>
            <TableCell align="Center">Responses</TableCell>
            <TableCell align="center">Owner Reply</TableCell>
            <TableCell align="center">Owner Tools</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.reviews.map((review, id) => {
            return (
              <TableRow key={id}>
                <TableHead scope="row">{review.id}</TableHead>
                <TableCell align="right">{review.locationName}</TableCell>
                <TableCell align="right">{review.review}</TableCell>
                <TableCell align="right">{review.isFree}</TableCell>
                <TableCell align="right">{review.numStall}</TableCell>
                <TableCell align="right">{review.stallType}</TableCell>
                <TableCell align="right">{review.photoUrl}</TableCell>

                <TableCell>
                  <Box>
                    <Button
                      variant="outlined"
                      size="small"
                      id={review.id}
                      onClick={props.delete}
                    >
                      Delete Review
                    </Button>
                    <br />
                    <Button
                      variant="outlined"
                      size="small"
                      onClick={(e) => {
                        props.handleOpen();
                        props.handleUpdateReview(review);
                      }}
                    >
                      Update Review
                    </Button>
                  </Box>
                  <br />
                </TableCell>
                <TableCell>
                  {/* Reply Create */}
                  <ReplyCreate
                    sessionToken={props.sessionToken}
                    reviewToReply={props.reviewToReply}
                    handleReply={props.handleReply}
                    review={review}
                    fetchReviews={props.fetchReviews}
                  />
                </TableCell>
                <TableCell>{review.reply?.reply}</TableCell>
                <TableCell>
                  <Box>
                    <Button
                      variant="outlined"
                      size="small"
                      onClick={() => {
                        replyDelete(review.reply);
                      }}
                    >
                      Delete Reply
                    </Button>
                    <br />
                    <Button variant="outlined" size="small">
                      Delete Reply
                    </Button>
                  </Box>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
export default ReviewCard;
