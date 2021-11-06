import React, { Component } from "react";
import {
  Modal,
  TextField,
  Button,
  Checkbox,
  Box,
  FormControlLabel,
  MenuItem,
  IconButton,
} from "@material-ui/core";
import ImageUpload from "./ImageUpload";

export default class ReviewCreate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      locationName: "",
      review: "",
      isFree: false,
      numStall: "",
      isHelpful: false,
      stallType: "",
      photoUrl: "",
    };
  }
  handleSubmit = async (e) => {
    e.preventDefault();
    fetch("http://localhost:3000/reviews/create", {
      method: "POST",
      body: JSON.stringify({
        reviews: {
          locationName: this.state.locationName,
          review: this.state.review,
          isFree: this.state.isFree,
          numStall: this.state.numStall,
          isHelpful: this.state.isHelpful,
          stallType: this.state.stallType,
          photoUrl: this.state.photoUrl,
        },
      }),
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: this.props.sessionToken,
      }),
    })
      .then((response) => response.json())
      .then((result) => {
        this.setState({ reviewCreated: result });
        console.log(result);
      });
  };

  stallType = [
    { value: "Men", label: "Men" },
    { value: "Women", label: "Women" },
    { value: "Family", label: "Family" },
    { value: "Unisex", label: "Unisex" },
  ];

  render() {
    return (
      <Modal
        open={this.props.open}
        onClose={!this.props.open}
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
            <IconButton
              aria-label="close"
              sx={{
                position: "absolute",
                right: 8,
                top: 8,
              }}
            ></IconButton>
            <h2>Post a Review</h2>
            <TextField
              sx={{ m: 1, width: "25ch" }}
              onChange={(e) => this.setState({ locationName: e.target.value })}
              variant="filled"
              label="Location Name"
              required
            ></TextField>
            <TextField
              helperText="Stall Type:"
              sx={{ m: 1, width: "25ch" }}
              select
              label="Select"
              onChange={this.handleChange}
              variant="outlined"
            >
              {this.stallType.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              fullWidth
              sx={{ m: 1, width: "25ch" }}
              onChange={(e) => this.setState({ review: e.target.value })}
              variant="filled"
              label="Describe the bathroom condition here:"
              multiline
              rows={10}
              required
            ></TextField>
            <TextField
              sx={{ m: 1, width: "25ch" }}
              onChange={(e) => this.setState({ numStall: e.target.value })}
              label="Number of Stalls"
              variant="filled"
            />
            <FormControlLabel
              control={
                <Checkbox
                  sx={{ m: 1, width: "25ch" }}
                  color="primary"
                  onChange={(e) => this.setState({ isFree: e.target.checked })}
                />
              }
              label="Free to use?"
            />
            <ImageUpload />
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
                onClick={() => this.props.handleClose()}
              >
                Cancel
              </Button>
            </div>
          </Box>
        </Box>
      </Modal>
    );
  }
}
