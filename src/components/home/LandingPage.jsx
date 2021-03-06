import React from "react";
import BannerImage from "../../assets/images/BannerImage.jpg";
import { Box, Grid, Typography } from "@mui/material";
import Logo from "../../assets/images/Logo.jpg";

const LandingPage = (props) => {
  return (
    <Box
      component="main"
      sx={{
        backgroundImage: `url(${BannerImage})`,
        backgroundSize: "cover",
        minHeight: 900,
        backgroundPosition: "60% 50%",
      }}
    >
      <Grid container justifyContent="center" alignItems="center" spacing={2}>
        <Grid item xs={8}>
          <Typography color="primary" variant="h2">
            Providing Some Relief For the Anxious Goer
          </Typography>
        </Grid>
        <Grid item xs={8}>
          <Box
            component="img"
            sx={{
              maxWidth: { xs: 400, sm: 500, md: 600, lg: 500 },
            }}
            alt="TodoLoo Cloud Logo"
            src={`${Logo}`}
          />
        </Grid>
      </Grid>
    </Box>
  );
};
export default LandingPage;
