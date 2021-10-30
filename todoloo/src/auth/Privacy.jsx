import * as React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import AppFooter from "./modules/views/AppFooter";

function Privacy() {
  return (
    <React.Fragment>
      <Container>
        <Box sx={{ mt: 7, mb: 12 }}>
          Privacy
          <div>{Privacy}</div>
        </Box>
      </Container>
      <AppFooter />
    </React.Fragment>
  );
}

export default Privacy;
