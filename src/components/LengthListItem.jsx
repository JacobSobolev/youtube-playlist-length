import React from "react";

import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import SpeedIcon from "@mui/icons-material/Speed";

function LengthListItem(props) {
  return (
    <ListItem>
      <ListItemIcon>
        <SpeedIcon />
      </ListItemIcon>
      <ListItemText primary={props.primary} />
    </ListItem>
  );
}

export default LengthListItem;
