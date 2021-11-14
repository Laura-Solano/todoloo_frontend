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
import { Container } from "@mui/material";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import APIURL from "../../helpers/environment";

export default class ReviewEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      locationName: this.props.reviewToUpdate.locationName,
      review: this.props.reviewToUpdate.review,
      isFree: this.props.reviewToUpdate.isFree,
      numStall: this.props.reviewToUpdate.numStall,
      isHelpful: this.props.reviewToUpdate.isHelpful,
      stallType: this.props.reviewToUpdate.stallType,
      photoUrl: this.props.reviewToUpdate.photoUrl,
      open: true,
    };
  }

  handleClose = () => {
    this.setState({ open: !this.state.open });
  };
  uploadImage = async (e) => {
    let files = e.target.files;
    let data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "images");
    let res = await fetch(
      "https://api.cloudinary.com/v1_1/todoloo/image/upload",
      {
        method: "POST",
        body: data,
      }
    );
    let File = await res.json();
    console.log(File);
    this.setState({ photoUrl: File.secure_url });
  };

  handleUpdateReview = async (e) => {
    e.preventDefault();
    fetch(`${APIURL}reviews/Edit/${this.props.reviewToUpdate.id}`, {
      method: "PUT",
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
      .then((data) => {
        this.setState({ data: data });
        console.log(data);
        this.handleClose();
      })
      .catch((error) => console.log(error));
  };
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
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
      <Container>
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
              onSubmit={this.handleUpdateReview}
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
                onChange={this.handleChange}
                name="locationName"
                variant="filled"
                label="Location Name"
                required
                value={this.state.locationName}
              ></TextField>
              <TextField
                helperText="Stall Type:"
                sx={{ m: 1, width: "25ch" }}
                select
                label="Select"
                onChange={this.handleChange}
                variant="outlined"
                value={this.state.stallType}
                name="stallType"
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
                onChange={this.handleChange}
                variant="filled"
                label="Describe the bathroom condition here:"
                multiline
                rows={10}
                required
                value={this.state.review}
                name="review"
              ></TextField>
              <TextField
                sx={{ m: 1, width: "25ch" }}
                onChange={this.handleChange}
                label="Number of Stalls"
                variant="filled"
                required
                value={this.state.numStall}
                name="numStall"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    sx={{ m: 1, width: "25ch" }}
                    color="primary"
                    onChange={this.handleChange}
                    value={this.state.isFree}
                    name="isFree"
                  />
                }
                label="Free to use?"
              />
              <TextField
                accept="image/*"
                autoFocus
                margin="dense"
                onChange={this.handleChange}
                id="upload button"
                name="photo_url"
                label="Upload"
                type="file"
                fullWidth
                variant="outlined"
                value={this.state.photoUrl}
              >
                <IconButton
                  color="primary"
                  aria-label="upload picture"
                  component="span"
                >
                  <PhotoCamera />
                </IconButton>
              </TextField>

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
                  onClick={this.props.handleClose}
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
