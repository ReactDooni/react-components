import L from "leaflet";
import { FaLocationDot } from "react-icons/fa6";
import ReactDOMServer from "react-dom/server";
//conver icon to string html
const iconHtml = ReactDOMServer.renderToString(
  <FaLocationDot style={{ fontSize: "24px", color: "red" }} />
);
//---------------------------
export const PinIcon = new L.DivIcon({
  html: `<div style="font-size: 24px; color: red;">${iconHtml}</div>`,
  className: "",
  iconSize: [24, 24],
});
//---------------------------
