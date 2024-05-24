import React from "react";

import moment from "moment";

import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import List from "@mui/material/List";

import LengthListItem from "../LengthListItem/LengthListItem";

import "./OutputArea.css";

function OutputArea(props) {
  function formatTime(timeInSec) {
    return moment.utc(timeInSec * 1000).format("HH:mm:ss");
  }

  const { title, description, img, numOfVids, totalLength } =
    props.playlistData;

  const speedList = [
    "At 1.25x = " + formatTime(totalLength / 1.25),
    "At 1.5x = " + formatTime(totalLength / 1.5),
    "At 1.75x = " + formatTime(totalLength / 1.75),
    "At 2x = " + formatTime(totalLength / 2),
  ];

  return (
    title && (
      <Container className="container" maxWidth="lg" hidden="true">
        <Card sx={{ maxWidth: 400 }}>
          <CardMedia sx={{ height: 225 }} image={img} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {description}
            </Typography>
            <Typography sx={{ mt: 2 }} paragraph>
              Number Of Vidoes: {numOfVids}
              <br />
              Avrage Video Length: {formatTime(totalLength / numOfVids)}
            </Typography>
            <Grid container spacing={1}>
              <Grid item xs={12}>
                <Typography sx={{ mt: 1 }} variant="h6" component="div">
                  Total Playlist Length: {formatTime(totalLength)}
                </Typography>
                <div>
                  <List>
                    {speedList.map((item, index) => {
                      return <LengthListItem key={index} primary={item} />;
                    })}
                  </List>
                </div>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Container>
    )
  );
}

export default OutputArea;
