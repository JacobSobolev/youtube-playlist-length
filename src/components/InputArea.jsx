import React, { useState } from "react";

import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

function InputArea(props) {
  const [inputUrl, setInputUrl] = useState("");
  const [error, setError] = useState(false);

  function handelInputChange(event) {
    setInputUrl(event.target.value);
    if (
      !event.target.value.includes("youtube.com") ||
      !event.target.value.includes("list=")
    ) {
      setError(true);
    } else {
      if (!event.target.value.startsWith("https://www")) {
        setInputUrl(`https://www.${event.target.value}`);
      }
      setError(false);
    }
  }

  function handleBtnClick() {
    if (!error) {
      props.calcList(inputUrl);
    }
  }

  return (
    <Container className="container" maxWidth="lg" sx={{ mt: 3, mb: 3 }}>
      <Grid container spacing={2} alignItems="flex-end">
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="YouTube Playlist URL"
            value={inputUrl}
            onChange={handelInputChange}
            error={error}
            helperText={error && "Must be a list from youtube.com"}
            InputProps={{
              endAdornment: (
                <Button
                  variant="contained"
                  onClick={handleBtnClick}
                  value={inputUrl}
                  color="primary"
                >
                  Calculate
                </Button>
              ),
            }}
          />
        </Grid>
      </Grid>
    </Container>
  );
}

export default InputArea;
