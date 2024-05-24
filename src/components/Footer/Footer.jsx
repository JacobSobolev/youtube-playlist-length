import React from "react";
import "./Footer.css";

import Container from "@mui/material/Container";

function Footer() {
  return (
    <Container className="container" maxWidth="lg">
      <footer>
        <p>Made by Jacob Sobolev</p>
        <p>
          <a href="https://github.com/JacobSobolev/youtube-playlist-length">
            Source Code Here
          </a>
        </p>
      </footer>
    </Container>
  );
}

export default Footer;
