import { useState, useEffect } from "react";
import Taxis from "./Taxis";
import { Box, Button, Container } from "@mui/material";
import { useMapEvents } from "react-leaflet";
import Map from "./Map";
import Startpoint from "./Startpoint";
import Closer from "./Closer";
import axios from "axios";

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

interface AddressInfo {
  address: string;
  lat: number;
  lon: number;
}

interface OrderInfo {
  source_time: string;
  addresses: AddressInfo[];
  crew_id: number;
}

interface OrderResponse {
  code: number;
  descr: string;
  data: {
    order_id: number;
    order_info: OrderInfo;
  };
}

interface CrewsResponse {
  code: number;
  descr: string;
  data: {
    crews_info: CrewInfo[];
  };
}

async function getAddressByCoordinates(
  lat: number,
  lng: number
): Promise<string> {
  try {
    const response = await axios.get(
      `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}`
    );

    if (response.data && response.data.address) {
      const { road, house_number } = response.data.address;

      if (road && house_number) {
        return `${road} ${house_number}`;
      }
    }
  } catch (error) {
    console.error("Error fetching address:", error);
  }

  return "Адрес не найден";
}

const Order = () => {
  const [inputValue, setInputValue] = useState("");
  const [address, setAddress] = useState("");
  const [location, setLocation] = useState({});
  const [error, setError] = useState(false);
  const [fieldFilled, setFieldFilled] = useState(false);

  const searchCrews = (reques: string): CrewsResponse => {
    const crewsInfo = [
      {
        crew_id: 123,
        car_mark: "Chevrolet",
        car_model: "Lacetti",
        car_color: "синий",
        car_number: "Е234КУ",
        driver_name: "Деточкин",
        driver_phone: "7788",
        lat: 56.855532,
        lon: 53.217462,
        distance: 300,
      },
      {
        crew_id: 125,
        car_mark: "Hyundai",
        car_model: "Solaris",
        car_color: "белый",
        car_number: "Ф567АС",
        driver_name: "Петров",
        driver_phone: "8899",
        lat: 56.855915977337766,
        lon: 53.219223,
        distance: 600,
      },
      {
        crew_id: 127,
        car_mark: "Nissan",
        car_model: "GTR",
        car_color: "болотный",
        car_number: "Ф539АР",
        driver_name: "Умер",
        driver_phone: "8521",
        lat: 56.855915977337766,
        lon: 53.22122896856906,
        distance: 600,
      },
      {
        crew_id: 128,
        car_mark: "Bugatti",
        car_model: "Tutatti",
        car_color: "золотой",
        car_number: "Ф124АР",
        driver_name: "Жив",
        driver_phone: "8531",
        lat: 56.85676096633402,
        lon: 53.22122896856906,
        distance: 200,
      },
    ];
    const response: CrewsResponse = {
      code: 0,
      descr: "OK",
      data: {
        crews_info: crewsInfo,
      },
    };

    return response;
  };

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `https://nominatim.openstreetmap.org/search?format=json&q=${inputValue}`
      );

      if (response.data && response.data.length > 0) {
        const firstResult = response.data[0];
        const lat = parseFloat(firstResult.lat);
        const lng = parseFloat(firstResult.lon);
        const foundAddress = firstResult.display_name;
        setLocation({ lat, lng });
        setAddress(foundAddress);
      } else {
        setAddress("Адрес не найден");
        console.log("что-то пошло не так");

        setLocation({});
      }
    } catch (error) {
      console.error("Error searching address:", error);
      setAddress("Ошибка поиска адреса");
      setLocation({});
    }
  };

  const requestOrder = (): OrderResponse => {
    const orderInfo: OrderInfo = {
      source_time: "20130101010101",
      addresses: [
        {
          address: address,
          lat: 56.839439,
          lon: 53.218803,
        },
      ],
      crew_id: 123,
    };
    const response: OrderResponse = {
      code: 0,
      descr: "OK",
      data: {
        order_id: 12345,
        order_info: orderInfo,
      },
    };
    handleSearch();
    alert("Ваше такси уже в пути");
    return response;
  };

  const LocationFinderDummy = () => {
    useMapEvents({
      click(e) {
        const { lat, lng } = e.latlng;
        setLocation(e.latlng);
        getAddressByCoordinates(lat, lng).then((result) => {
          setAddress(result);
          if (result !== "Адрес не найден") {
            setInputValue(result);
          } else {
            setInputValue("");
          }
        });
      },
    });
    return null;
  };

  useEffect(() => {
    setFieldFilled(!!inputValue);
    if (address === "Адрес не найден") {
      setError(true);
    } else {
      setError(false);
    }
  }, [address, inputValue]);

  return (
    <Container maxWidth="lg">
      <Startpoint
        handleSearch={handleSearch}
        inputValue={inputValue}
        setInputValue={setInputValue}
        setError={setError}
        error={error}
      />
      <Closer
        error={error}
        inputValue={inputValue}
        searchCrews={() => searchCrews("someRequest")}
      />

      <Box
        marginY={4}
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        sx={{
          padding: 1,
          borderRadius: 4,
        }}
      >
        <Map
          inputValue={inputValue}
          error={error}
          searchCrews={() => searchCrews("someRequest")}
          location={location}
          LocationFinderDummy={LocationFinderDummy}
          address={address}
        />
        <Taxis searchCrews={() => searchCrews("someRequest")} />
      </Box>
      <Box display="flex" justifyContent="center" marginBottom={4}>
        <Button
          onClick={requestOrder}
          sx={{ width: "40%" }}
          size="large"
          variant="contained"
          color="primary"
          disabled={!fieldFilled || error}
        >
          Заказать
        </Button>
      </Box>
    </Container>
  );
};

export default Order;
