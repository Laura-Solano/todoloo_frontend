import React from "react";
import Container from "@mui/material/Container";
import BannerImage from "../../assets/images/BannerImage.jpg";
import { Typography, Box } from "@mui/material";
import Logo from "../../assets/images/Logo.jpg";
import SignUp from "../../auth/SignUp";
const LandingPage = (props) => {
  return (
    <Container
      sx={{
        bgcolor: "background.paper",
        backgroundImage: `url(${BannerImage})`,
        backgroundSize: "cover",
        minHeight: 900,
      }}
    >
      <Box
        component="img"
        sx={{
          display: "box",

          maxWidth: { xs: 260, sm: 320, md: 400, lg: 500 },
        }}
        alt="TodoLoo Cloud Logo"
        src={`${Logo}`}
      />
      <Typography variant="h4" align="center" color="text.secondary" paragraph>
        Providing some relief for the anxious goer
      </Typography>
      <SignUp />
    </Container>
  );
};
export default LandingPage;
