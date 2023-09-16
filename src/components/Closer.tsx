import React from "react";
import { Box, Typography, Paper } from "@mui/material";

export default function Closer() {
  return (
    <Box
      sx={{
        maxWidth: "36%",
        display: "flex",
        alignItems: "center",
        backgroundColor: "#e7e7e7",
        padding: 2,
        borderRadius: 4,
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        marginTop: 2,
        marginLeft: 4,
      }}
    >
      <Typography variant="h6" sx={{ marginRight: 2 }}>
        Подходящий экипаж:
      </Typography>
      <Paper
        sx={{
          padding: 2,
          backgroundColor: " #fdfdfd",
          color: 'black',
          borderRadius: 4,
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        }}
      >
        Какое-то такси
      </Paper>
    </Box>
  );
}
