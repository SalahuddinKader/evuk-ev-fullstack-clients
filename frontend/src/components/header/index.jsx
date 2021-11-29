import React from "react";
import { Box, Typography } from "@mui/material";

const Header = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: 80,
        textAlign: "start",
        lineHeight: "2",
        padding: "10px",
        color: "#fff",
        backgroundColor: "primary.main",
        "&:hover": {
          backgroundColor: "primary.light",
          color: "#000",
          opacity: [0.9, 0.8, 0.7],
        },
      }}
    >
      <Typography data-testid="header" variant="h4">
        Clients List App
      </Typography>
    </Box>
  );
};

export default Header;
