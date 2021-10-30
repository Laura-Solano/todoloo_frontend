import Button from "@mui/material/Button";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Logo from "../../assets/images/Logo.jpg";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import BannerImage from "../../assets/images/BannerImage.jpg";

const cards = [1, 2, 3, 4, 5, 6];

function LandingPage() {
  return (
    <Container component="main" maxwidth="xs">
      <CssBaseline />

      <main>
        {/* Hero section */}
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
          <Typography
            variant="h4"
            align="center"
            color="text.secondary"
            paragraph
          >
            Providing some relief for the anxious goer
          </Typography>
          <Container maxWidth="sm">
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            ></Stack>
          </Container>
        </Container>
        <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <CardMedia
                    component="img"
                    sx={{
                      // 16:9
                      pt: "56.25%",
                    }}
                    image="https://source.unsplash.com/random"
                    alt="random"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Heading
                    </Typography>
                    <Typography>
                      This is a media card. You can use this section to describe
                      the content.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">View</Button>
                    <Button size="small">Edit</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    </Container>
  );
}
export default LandingPage;
