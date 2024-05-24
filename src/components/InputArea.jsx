import React, { useState } from "react";

import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

function InputArea(props) {
  const [inputUrl, setInputUrl] = useState("");

  function handelInputChange(event) {
    setInputUrl(event.target.value);
  }

  function handleBtnClick(){
    props.calcList(inputUrl);
  }

  return (
    <Container className="container" maxWidth="lg" sx={{mt: 3, mb: 3}}>
      <Grid container spacing={2} alignItems="flex-end">
        <Grid item xs={12} sm={9}>
          <TextField
            fullWidth
            label="YouTube Playlist URL"
            value={inputUrl}
            onChange={handelInputChange}
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <Button variant="contained" fullWidth={true} onClick={handleBtnClick} color="primary">
            Calculate
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}

export default InputArea;
