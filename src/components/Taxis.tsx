import React from "react";
import { Box, List, ListItem, ListItemText } from "@mui/material";

interface Taxi {
  car_mark: string;
  car_model: string;
  car_color: string;
  distance: number;
}

interface TaxisProps {
  searchCrews: () => {
    data: {
      crews_info: Taxi[];
    };
  };
}

export default function Taxis({ searchCrews }: TaxisProps) {
  const crews = searchCrews();

  return (
    <Box
      sx={{
        width: "28%",
        textAlign: "center",
        padding: 2,
        borderRadius: 4,
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
      }}
    >
      <List sx={{ padding: 0 }}>
        {crews.data.crews_info.map((taxi: Taxi, index: number) => (
          <ListItem
            key={index}
            sx={{
              margin: "8px 0",
              borderBottom: "1px solid #ccc",
            }}
          >
            <ListItemText
              primary={`${taxi.car_mark} ${taxi.car_model}`}
              secondary={`${taxi.car_color}`}
              sx={{ textAlign: "left" }}
            />
            <ListItemText
              secondary={`${taxi.distance}м`}
              sx={{ textAlign: "left" }}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
}
