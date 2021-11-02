import React from "react";
import Container from "@mui/material/Container";
import BannerImage from "../../assets/images/BannerImage.jpg";
import { Box, Grid, Typography } from "@mui/material";
import Logo from "../../assets/images/Logo.jpg";
import SignUp from "../../auth/SignUp";
const LandingPage = (props) => {
  return (
    <Box
      component="main"
      maxWidth="false"
      sx={{
        backgroundImage: `url(${BannerImage})`,
        backgroundSize: "cover",
        minHeight: 900,
        backgroundPosition: "60% 50%",
      }}
    >
      <Grid
        container
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xs={10}>
          <Typography variant="h4" color="primary.main">
            Providing Some Relief For the Anxious Goer
          </Typography>
        </Grid>
        <Grid item xs={8}>
          <Box
            component="img"
            sx={{
              width: 500,
              maxWidth: { xs: 400, sm: 500, md: 600, lg: 500 },
            }}
            alt="TodoLoo Cloud Logo"
            src={`${Logo}`}
          />
        </Grid>
      </Grid>

      <SignUp />
    </Box>
  );
};
export default LandingPage;
