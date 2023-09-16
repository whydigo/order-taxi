import React from "react";
import { Box, TextField, Typography } from "@mui/material";
import { useState, ChangeEvent } from "react";

export default function Startpoint() {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <Box
      sx={{
        width: "70%",
        display: "flex",
        gap: "20px",
        alignItems: "center",
        padding: 2,
        marginLeft: 4,
        backgroundColor: "#e7e7e7 ",
        borderRadius: 4,
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Typography variant="h6">Откуда:</Typography>
      <TextField
        fullWidth
        sx={{
          bgcolor: " #fdfdfd",
          borderRadius: "4px",
        }}
        size="small"
        id="outlined-basic"
        variant="outlined"
        value={inputValue}
        onChange={handleInputChange}
      />
    </Box>
  );
}
