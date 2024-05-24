import React from "react";
import "./Header.css";

import Typography from "@mui/material/Typography";
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { red } from '@mui/material/colors';

function Header() {
  return (
    <header >
      <Typography variant="h5" component="h1">
        <SubscriptionsIcon fontSize="large" color="secondary" /> YouTube Playlist Length
      </Typography>
    </header>
  );
}

export default Header;
