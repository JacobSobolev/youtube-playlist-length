import React from "react";

import Container from "@mui/material/Container";
import GitHubIcon from "@mui/icons-material/GitHub";
import Chip from "@mui/material/Chip";

function Footer() {
  return (
    <Container className="container" maxWidth="lg" sx={{mb:2, textAlign: "center"}}>
      <footer>
        <a href="https://github.com/JacobSobolev/youtube-playlist-length">
          <Chip icon={<GitHubIcon />} label="Made by Jacob Sobolev" color="primary" variant="outlined"/>
        </a>
      </footer>
    </Container>
  );
}

export default Footer;
