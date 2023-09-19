import { Box, TextField, Typography } from "@mui/material";
import { ChangeEvent } from "react";

interface StartpointProps {
  handleSearch: () => void;
  inputValue: string;
  setInputValue: (value: string) => void;
  setError: (error: boolean) => void;
  error: boolean;
}

export default function Startpoint({
  handleSearch,
  inputValue,
  setInputValue,
  setError,
  error,
}: StartpointProps) {
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
    handleSearch();
    setError(false);
  };

  return (
    <>
      <Box
        sx={{
          width: "70%",
          display: "flex",
          gap: "20px",
          alignItems: "center",
          padding: 2,
          marginLeft: 4,
          borderRadius: 4,
          position: "relative",
        }}
      >
        <Typography variant="h6">Откуда:</Typography>
        <TextField
          fullWidth
          size="small"
          id="outlined-basic"
          variant="outlined"
          value={inputValue}
          onChange={handleInputChange}
        />
        {error && (
          <Typography
            variant="body2"
            sx={{
              color: "red",
              position: "absolute",
              top: "66px",
              left: "110px",
            }}
          >
            Адрес не найден
          </Typography>
        )}
      </Box>
    </>
  );
}
