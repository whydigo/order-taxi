import React from "react";
import { Box, List, ListItem, ListItemText } from "@mui/material";

interface Taxi {
  name: string;
  fare: string;
}

const taxiData: Taxi[] = [
  { name: "Taxi A", fare: "$20" },
  { name: "Taxi B", fare: "$25" },
  { name: "Taxi C", fare: "$30" },
  { name: "Taxi D", fare: "$35" },
];

export default function Taxis() {
  return (
    <Box
      sx={{
        width: "28%",
        textAlign: "center",
        padding: 2,
        backgroundColor: "#fdfdfd",
        borderRadius: 4,
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      }}
    >

      <List sx={{ padding: 0 }}>
        {taxiData.map((taxi, index) => (
          <ListItem
            key={index}
            sx={{
              margin: "8px 0",
              borderBottom: "1px solid #ccc",
            }}
          >
            <ListItemText
              primary={taxi.name}
              secondary={`Стоимость поездки: ${taxi.fare}`}
              sx={{ textAlign: "left" }}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
}
