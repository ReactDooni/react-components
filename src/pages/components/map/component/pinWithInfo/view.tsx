import { Marker, Popup } from "react-leaflet";
import type { Prop } from "./type";
import L from "leaflet";
export const PinWithInfo = ({ positions }: Prop) => {

  return (
    <>
      {positions.map((position) => (
        <Marker position={position.point} icon={position.icon}>
          <Popup>{position.popUpContent}</Popup>
        </Marker>
      ))}
    </>
  );
};
