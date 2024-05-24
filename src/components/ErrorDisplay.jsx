import react from "react";

import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

function ErrorDisplay(props) {
  const { msg } = props;

  return (
    msg && (
      <Container className="container" maxWidth="lg">
        <Box
          component="section"
          sx={{ p: 2, border: "1px dashed red", borderRadius: 1 }}
        >
          <Typography variant="body1">{msg}</Typography>
        </Box>
      </Container>
    )
  );
}

export default ErrorDisplay;
