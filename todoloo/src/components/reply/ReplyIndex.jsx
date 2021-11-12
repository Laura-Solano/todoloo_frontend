import { React } from "react";
import { Table, Button } from "reactstrap";

const ReplyIndex = () => {
  const replyDelete = (e) => {
    console.log(e.target.id);
    fetch(`http://localhost:3000/deleteReply/${e.target.id}`, {
      method: "DELETE",
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: this.props.sessionToken,
      }),
    })
      .then((res) => this.fetchReplies())
      .catch((error) => console.log(error));
  };
  return (
    <div>
      <h3>Owner Replies</h3>
    </div>
  );
};

export default ReplyIndex;
