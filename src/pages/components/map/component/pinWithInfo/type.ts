import type { LatLngExpression } from "leaflet";

export interface Prop {
  positions: IMarker[];
}
export interface IMarker {
  point: LatLngExpression;
  icon: L.DivIcon;
  popUpContent: JSX.Element | JSX.Element[];
}
