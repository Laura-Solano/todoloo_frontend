import React, { Component } from "react";
import { Modal, TextField, Button, Box, IconButton } from "@material-ui/core";
import { Container } from "@mui/material";
import APIURL from "../../helpers/environment";

export default class ReplyEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reply: this.props.replyToEdit.reply,
      open: false,
    };
  }
  handleReplyClose = () => {
    this.setState({ open: !this.state.open });
  };

  handleReplyChange = async (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  handleReplyEdit = (e) => {
    e.preventDefault();
    console.log(this.props.replyToEdit);
    fetch(
      `${APIURL}reply/editReply/${this.props.replyToEdit.id}`,

      {
        method: "PUT",
        body: JSON.stringify({
          reply: {
            reply: this.state.reply,
          },
        }),
        headers: new Headers({
          "Content-Type": "application/json",
          Authorization: this.props.sessionToken,
        }),
      }
    )
      .then((response) => response.json())
      .then((result) => {
        this.setState({ ReplyEdit: result });
        this.handleReplyClose();
        this.props.fetchReviews();
      });
  };
  render() {
    return (
      <Container>
        <Button
          type="submit"
          variant="outlined"
          size="small"
          onClick={() => {
            this.handleReplyClose();
            this.props.handleReplyEdit(this.props.reply);
          }}
        >
          Edit Reply
        </Button>
        <Modal
          open={this.state.open}
          onClose={!this.state.open}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
        >
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "800",
              height: "800",
              maxWidth: "100%",
              maxHeight: "100%",
              color: "background.paper",
              border: "2px solid #000",
              boxShadow: 24,
              p: 4,
              bgcolor: "white",
            }}
          >
            <Box
              component="form"
              onSubmit={this.handleReplyEdit}
              sx={{ "& .MuiTextField-root": { m: 1, width: "25ch" } }}
            >
              <IconButton
                aria-label="close"
                sx={{
                  position: "absolute",
                  right: 8,
                  top: 8,
                }}
              ></IconButton>
              <h2>Edit the reply</h2>

              <TextField
                fullWidth
                sx={{ m: 1, width: "25ch" }}
                onChange={this.handleReplyChange}
                variant="filled"
                label="Write your reply:"
                multiline
                value={this.state.reply}
                name="reply"
                rows={10}
                required
              ></TextField>

              <div>
                <Button
                  sx={{ mt: 4 }}
                  fullWidth
                  id="modal-description"
                  color="secondary"
                  variant="contained"
                  type="submit"
                >
                  Post
                </Button>
                <Button
                  sx={{ mt: 4 }}
                  fullWidth
                  id="modal-description"
                  color="secondary"
                  variant="contained"
                  onClick={() => this.handleReplyClose()}
                >
                  Cancel
                </Button>
              </div>
            </Box>
          </Box>
        </Modal>
      </Container>
    );
  }
}
