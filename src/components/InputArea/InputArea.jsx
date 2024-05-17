import React, { useState } from "react";

import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import "./InputArea.css";

function InputArea(props) {
  const [inputUrl, setInputUrl] = useState("");

  function handelInputChange(event) {
    setInputUrl(event.target.value);
  }

  function handleBtnClick(){
    props.calcList(inputUrl);
  }

  return (
    <Container className="container" maxWidth="lg">
      <Grid container spacing={2} alignItems="flex-end">
        <Grid item xs={9}>
          <TextField
            fullWidth
            label="YouTube Playlist URL"
            value={inputUrl}
            onChange={handelInputChange}
          />
        </Grid>
        <Grid item xs>
          <Button variant="contained" fullWidth={true} onClick={handleBtnClick}>
            Calculate
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}

export default InputArea;
