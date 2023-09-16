import React from "react";
import Map from "./Map";
import Taxis from "./Taxis";
import { Box, Button, Container } from "@mui/material";

const Order = () => {
  return (
    <Container maxWidth="lg">
      <Box
        marginY={4}
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        sx={{
          backgroundColor: "#e7e7e7 ",
          padding: 1,
          borderRadius: 4,
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Map />
        <Taxis />
      </Box>
      <Box display="flex" justifyContent="center" marginBottom={4}>
        <Button
          sx={{ width: "40%" }}
          size="large"
          variant="contained"
          color="inherit"
        >
          Заказать
        </Button>
      </Box>
    </Container>
  );
};

export default Order;
