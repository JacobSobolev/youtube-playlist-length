import React from "react";
import "./Footer.css";

import Container from "@mui/material/Container";
import Link from "@mui/material/Link";

function Footer() {
  return (
    <Container className="container" maxWidth="lg">
      <footer>
        <p>Made by Jacob Sobolev</p>
        <p>
          <Link href="https://github.com/JacobSobolev/youtube-playlist-length" underline="hover">
            Source Code Here
          </Link>
        </p>
      </footer>
    </Container>
  );
}

export default Footer;
