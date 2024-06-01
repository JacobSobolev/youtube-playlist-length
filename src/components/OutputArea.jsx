import React from "react";

import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";

import LengthListItem from "./LengthListItem";

function OutputArea(props) {
  function formatTime(timeInSec) {
    const hours = Math.floor(timeInSec / 3600);
    const minutes = Math.floor((timeInSec - hours * 3600) / 60);
    const seconds = Math.floor(timeInSec - hours * 3600 - minutes * 60);

    return `${hours ? hours : ""} ${hours ? "Hours," : ""} ${minutes ? minutes : ""} ${minutes ? "Minutes," : ""} ${seconds} Seconds`;
  }

  const { title, description, img, numOfVids, totalLength } =
    props.playlistData;

  const speedList = [
    {
      primary: "At 1.25x Speed",
      secondary: formatTime(totalLength / 1.25),
    },
    {
      primary: "At 1.5x Speed",
      secondary: formatTime(totalLength / 1.5),
    },
    {
      primary: "At 1.75x Speed",
      secondary: formatTime(totalLength / 1.75),
    },
    {
      primary: "At 2x Speed",
      secondary: formatTime(totalLength / 2),
    },
  ];

  return (
    title && (
      <Container className="container" maxWidth="lg" sx={{ mb: 2 }}>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Card>
            <CardMedia sx={{ height: 225 }} image={img} />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {title}
              </Typography>
              <Typography variant="body" color="text.secondary">
                {description}
              </Typography>

              <Divider sx={{ mt: 2, mb: 1 }} />

              <Grid container spacing={1}>
                <Grid item xs={12}>
                  <Typography sx={{ mt: 1 }} variant="h6" component="div">
                    Total Playlist Length
                  </Typography>
                  <Typography variant="body1" component="div">
                    {formatTime(totalLength)}
                  </Typography>

                  <List>
                    {speedList.map((item, index) => {
                      return (
                        <LengthListItem
                          key={index}
                          primary={item.primary}
                          secondary={item.secondary}
                        />
                      );
                    })}
                  </List>

                  <Divider sx={{ mt: 1, mb: 2 }} />

                  <Typography variant="body1">
                    Number Of Vidoes: {numOfVids}
                    <br />
                    Avrage Video Length: {formatTime(totalLength / numOfVids)}
                  </Typography>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Container>
    )
  );
}

export default OutputArea;
