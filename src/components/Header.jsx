import React from "react";

import Typography from "@mui/material/Typography";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import Box from "@mui/material/Box";
import { grey } from "@mui/material/colors";

function Header() {
  return (
    <Box component="header" sx={{ p: 2, bgcolor: grey[200] }}>
      <Typography variant="h5" component="h1">
        <SubscriptionsIcon fontSize="large" color="secondary" /> YouTube
        Playlist Length
      </Typography>
    </Box>
  );
}

export default Header;
