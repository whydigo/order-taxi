import { Box, Typography } from "@mui/material";
import { useMemo } from "react";

interface CrewInfo {
  crew_id: number;
  car_mark: string;
  car_model: string;
  car_color: string;
  car_number: string;
  driver_name: string;
  driver_phone: string;
  lat: number;
  lon: number;
  distance: number;
}

interface CrewsResponse {
  code: number;
  descr: string;
  data: {
    crews_info: CrewInfo[];
  };
}

interface CloserProps {
  error: boolean;
  inputValue: string;
  searchCrews: () => CrewsResponse;
}

export default function Closer({
  error,
  inputValue,
  searchCrews,
}: CloserProps) {
  const closestCrew = useMemo(() => {
    const crewsResponse = searchCrews();
    const crews = crewsResponse?.data.crews_info || [];
    return (
      crews.reduce((closest: CrewInfo | null, current: CrewInfo) => {
        if (!closest || current.distance < closest.distance) {
          return current;
        } else {
          return closest;
        }
      }, null) || null
    );
  }, [searchCrews]);

  return (
    <Box
      sx={{
        maxWidth: "36%",
        display: "flex",
        alignItems: "center",
        padding: 2,
        borderRadius: 4,
        marginTop: 2,
        marginLeft: 4,
      }}
    >
      <Typography
        variant="h6"
        sx={{
          marginRight: 2,
          height: "80px",
          display: "flex",
          alignItems: "center",
        }}
      >
        Подходящий экипаж:
      </Typography>
      {!error && inputValue !== "" && closestCrew ? (
        <div>
          <p>{`${closestCrew.car_mark} ${closestCrew.car_model}`}</p>
          <p>{closestCrew.car_color}</p>
          <p>{closestCrew.car_number}</p>
        </div>
      ) : (
        <div>Не найдено</div>
      )}
    </Box>
  );
}
