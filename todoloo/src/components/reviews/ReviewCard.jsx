import { React } from "react";
import { Table, Button } from "reactstrap";

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
                  <Button id={review.id} onClick={(e) => props.delete(e)}>
                    Delete
                  </Button>
                  |
                  <Button
                    id={review.id}
                    onClick={(e) => props.update(e, review)}
                  >
                    Update
                  </Button>
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
