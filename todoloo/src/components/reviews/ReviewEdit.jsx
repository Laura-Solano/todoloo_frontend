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

export default class ReviewEdit extends Component {
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
      open: false,
    };
  }
  handleClose() {
    this.setState({ open: !this.state.open });
  }
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
  componentWillMount() {
    this.setState({
      locationName: this.props.locationName,
      review: this.props.review,
      isFree: this.props.isFree,
      numStall: this.props.numStall,
      isHelpful: this.props.isHelpful,
      stallType: this.props.stallType,
      photoUrl: this.props.photoUrl,
    });
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    this.props.update(e, this.state);
    this.handleClose();
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
                onChange={this.handleChange}
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
              ></TextField>
              <TextField
                sx={{ m: 1, width: "25ch" }}
                onChange={this.handleChange}
                label="Number of Stalls"
                variant="filled"
                required
                value={this.state.numStall}
              />
              <FormControlLabel
                control={
                  <Checkbox
                    sx={{ m: 1, width: "25ch" }}
                    color="primary"
                    onChange={this.handleChange}
                    value={this.state.isFree}
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
