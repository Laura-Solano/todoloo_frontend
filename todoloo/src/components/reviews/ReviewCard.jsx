import { React } from "react";
import { Table, Button } from "reactstrap";
import ReplyCreate from "../reply/ReplyCreate";
const ReviewCard = (props) => {
  return (
    <div>
      <h3>Our Reviews</h3>
      <hr />
      <Table striped>
        <thead>
          <tr>
            <th>#</th>
            <th>Location Name</th>
            <th>Review</th>
            <th>Free?</th>
            <th>Number of Stalls</th>
            <th>Stall Type</th>
            <th>photoUrl</th>
            <th>Tools</th>
            <th>Responses</th>
          </tr>
        </thead>
        <tbody>
          {props.reviews.map((review, id) => {
            return (
              <tr key={id}>
                <th scope="row">{review.id}</th>
                <td>{review.locationName}</td>
                <td>{review.review}</td>
                <td>{review.isFree}</td>
                <td>{review.numStall}</td>
                <td>{review.stallType}</td>
                <td>{review.photoUrl}</td>

                <td>
                  <Button onClick={(e) => props.delete(e)}>
                    Delete Review
                  </Button>
                  <br />
                  <Button onClick={(e) => this.props.handleUpdateReview}>
                    Update Review
                  </Button>
                  <br />
                </td>
                <td>
                  <ReplyCreate />
                </td>
                <td>{review.reply?.reply}</td>
                <td>
                  <Button onClick={(e) => this.props.replydelete(e)}>
                    Delete Reply
                  </Button>
                  <br />
                  <Button onClick={(e) => this.handleUpdateReply()}>
                    Update Reply
                  </Button>
                  <br />
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};
export default ReviewCard;
