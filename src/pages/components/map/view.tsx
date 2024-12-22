import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { PinWithInfo } from "./component/pinWithInfo/view";
import L from "leaflet";

import { FaLocationDot } from "react-icons/fa6";
import { PinIcon } from "./icons";
const SetView = ({ center, zoom }: any) => {
  const map = useMap();
  map.setView(center, zoom);
  return null;
};
export const Map = () => {
  const position: [number, number] = [48.8566, 2.3522]; // موقعیت تهران

  return (
    <div>
      <MapContainer className="leaflet-container" style={{ height: "100vh" }}>
        <SetView center={position} zoom={13} />
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <PinWithInfo
          positions={[
            { point: position, icon: PinIcon, popUpContent: <>hi</> },
          ]}
        />
      </MapContainer>
    </div>
  );
};
