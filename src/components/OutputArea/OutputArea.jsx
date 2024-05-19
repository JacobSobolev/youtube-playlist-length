import React from "react";

import moment from "moment";

import Container from "@mui/material/Container";

import "./OutputArea.css";

function OutputArea(props) {
  function formatTime(timeInSec) {
    return moment.utc(timeInSec * 1000).format("HH:mm:ss");
  }

  const { title, description, img, numOfVids, totalLength } =
    props.playlistData;

  return (
    <Container className="container" maxWidth="lg">
      <h2>{title}</h2>
      <img src={img}></img>
      <p>{description}</p>
      <p>Number of vidoes: {numOfVids}</p>
      <p>
        Avrage video length: 
        {formatTime(totalLength / numOfVids)}
      </p>
      <p>Total Length: {formatTime(totalLength)}</p>
      <p>1.25x {formatTime(totalLength / 1.25)}</p>
      <p>1.5x {formatTime(totalLength / 1.5)}</p>
      <p>1.75x {formatTime(totalLength / 1.75)}</p>
      <p>2x {formatTime(totalLength / 2)}</p>
    </Container>
  );
}

export default OutputArea;
