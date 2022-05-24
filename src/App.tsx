import { Grid, Stack, Typography } from "@mui/material";
import React from "react";
import RootAppBar from "./components/RootAppBar/RootAppBar";
import ThemeConfig from "./theme";

function App() {
  return (
    <ThemeConfig>
      <RootAppBar />
      <Stack marginTop={10} alignItems="center">
        <Typography
          sx={{
            fontFamily: "Patua One",
          }}
          variant="h2"
        >
          {"Hi, I'm Shubham"}
        </Typography>
        <Grid container justifyContent="center">
          <Grid item xs={12} md={8} lg={6}>
            <Typography variant="body1">
              I am a Full Stack Developer with 4+ years of experience and
              expertise in java technologies, frontend javascript frameworks,
              backend web-services, micro-services and cloud. A quick learner
              who can adopt to new technologies and implement them seamlessly
              for enterprise-level scalable product development.
            </Typography>
          </Grid>
        </Grid>
      </Stack>
    </ThemeConfig>
  );
}

export default App;
