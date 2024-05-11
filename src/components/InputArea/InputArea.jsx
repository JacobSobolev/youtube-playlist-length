import "./InputArea.css";
import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

function InputArea() {
  return (
    <Container className="container" maxWidth="lg">
      <Grid container spacing={2} alignItems="flex-end">
        <Grid item xs={9}>
          <TextField fullWidth label="YouTube Playlist URL" />
        </Grid>
        <Grid item xs>
          <Button variant="contained" fullWidth={true}>
            Calculate
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}

export default InputArea;
