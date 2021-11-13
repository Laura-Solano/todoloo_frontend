import React, { Component } from "react";
import { Modal, TextField, Button, Box } from "@material-ui/core";
import { Container } from "@mui/material";

export default class ReplyCreate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reply: "",
      replyCreate: {},
      open: false,
    };
  }
  handleClose() {
    this.setState({ open: !this.state.open });
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    fetch("http://localhost:3000/reply/create", {
      method: "POST",
      body: JSON.stringify({
        reply: {
          reply: this.state.reply,
        },
      }),
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: this.props.sessionToken,
      }),
    })
      .then((response) => response.json())
      .then((result) => {
        this.props.replyArray();
        this.setState({ replyCreate: result });
        console.log(result);
        this.handleClose();
      });
  };

  render() {
    return (
      <Container>
        <Button
          type="submit"
          color="secondary"
          variant="contained"
          onClick={() => this.handleClose()}
        >
          Add Reply
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
              bgcolor: "background.paper",
              border: "2px solid #000",
              boxShadow: 24,
              p: 4,
            }}
          >
            <Box
              component="form"
              onSubmit={this.handleSubmit}
              sx={{ "& .MuiTextField-root": { m: 1, width: "25ch" } }}
            >
              <TextField
                fullWidth
                sx={{ m: 1, width: "25ch" }}
                onChange={(e) => this.setState({ reply: e.target.value })}
                variant="filled"
                label="Reply Here:"
                multiline
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
                  onClick={() => this.handleClose()}
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
