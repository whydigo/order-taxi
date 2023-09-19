// @ts-ignore: Unreachable code error
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

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

interface MapProps {
  inputValue: string;
  error: boolean;
  searchCrews: () => { data: { crews_info: CrewInfo[] } };
  LocationFinderDummy: React.FC;
  address: string;
  location: object;
}

const foundIcon = new L.Icon({
  iconUrl: require("../assets/foundMarker.png"),
  iconRetinaUrl: require("../assets/foundMarker.png"),
  iconSize: new L.Point(50, 50),
});

const iconNotFound = new L.Icon({
  iconUrl: require("../assets/notFoundMarker.png"),
  iconRetinaUrl: require("../assets/notFoundMarker.png"),
  iconSize: new L.Point(58, 55),
});

const iconCrews = new L.Icon({
  iconUrl: require("../assets/crewsMarker.png"),
  iconRetinaUrl: require("../assets/crewsMarker.png"),
  iconSize: new L.Point(50, 50),
});

const Map: React.FC<MapProps> = ({
  inputValue,
  error,
  searchCrews,
  LocationFinderDummy,
  address,
  location,
}) => {
  const crews = searchCrews();

  return (
    <MapContainer
      center={[56.855532, 53.217462]}
      zoom={16}
      scrollWheelZoom={false}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <LocationFinderDummy />
      {"lng" in location && "lat" in location && (
        <Marker
          icon={address !== "Адрес не найден" ? foundIcon : iconNotFound}
          position={[Number(location.lat), Number(location.lng)]}
        >
          <Popup>{address}</Popup>
        </Marker>
      )}
      {!error && inputValue !== ""
        ? crews.data.crews_info.map((crew: CrewInfo) => (
            <Marker
              icon={iconCrews}
              key={crew.crew_id}
              position={[crew.lat, crew.lon]}
            >
              <Popup>
                <div>
                  <h3>{crew.driver_name}</h3>
                  <p>Марка: {crew.car_mark}</p>
                  <p>Модель: {crew.car_model}</p>
                  <p>Номер: {crew.car_number}</p>
                </div>
              </Popup>
            </Marker>
          ))
        : null}
    </MapContainer>
  );
};

export default Map;
