import React from "react";

import Container from "@mui/material/Container";
import Alert from "@mui/material/Alert";
import Collapse from "@mui/material/Collapse";
import {Typography } from "@mui/material";

function AppHelper(props) {

  return (
    <Container className="container" maxWidth="lg" sx={{ mb: 2 }}>
      <Collapse in={props.show}>
        <Alert severity="info">
          <Typography variant="body1">
            Calculate the total playback length of any YouTube playlist at normal speed 
            and various speeds.
          </Typography>

          <ol className="HelpSteps">
            <li>
              <Typography variant="body1">
                <strong>On YouTube, navigate to a playlist</strong> you want to
                analyze and
                <strong> copy the URL</strong> from the address bar (e.g.,
                https://www.youtube.com/playlist?list=SOME_PLAYLIST_ID).
              </Typography>
            </li>
            <li>
              <Typography>
                <strong>Paste the URL</strong> into the input box on this page.
              </Typography>
            </li>
            <li>
              <Typography>
                <strong>Click the "Calculate"</strong> button to see the
                results.
              </Typography>
            </li>
          </ol>
          <Typography>
            Thank you for using the YouTube Playlist Length! I hope this tool
            helps you manage your viewing time more efficiently.
          </Typography>
        </Alert>
      </Collapse>
    </Container>
  );
}

export default AppHelper;
