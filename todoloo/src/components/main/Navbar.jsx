// import React, { Component } from "react";
// import AppBar from "@mui/material/AppBar";
// import { Button, Toolbar, Container } from "@material-ui/core";
// import ReviewCreate from "./reviews/ReviewCreate";
// class Navbar extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       handleOpen: false,
//       handleClose: false,
//     };
//     this.handleClose = this.handleClose.bind(this);
//     this.handleOpen = this.handleOpen.bind(this);
//   }
//   handleClose() {
//     this.setState({ handleClose: !this.state.handleClose });
//   }
//   handleOpen() {
//     this.setState({ handleOpen: !this.state.handleOpen });
//   }

//   render() {
//     return (
//       <React.Fragment>
//         <AppBar
//           position="fixed"
//           sx={{ top: "auto", bottom: 0, backgroundColor: "#3bc3c3" }}
//         >
//           <Toolbar>
//             <Container>
//               <Button onClick={this.handleOpen} color="inherit">
//                 {console.log("Button Firing?")}
//                 Add a Review+
//               </Button>
//               <ReviewCreate open={this.handleOpen} />
//             </Container>
//           </Toolbar>
//         </AppBar>
//       </React.Fragment>
//     );
//   }
// }

// export default Navbar;
