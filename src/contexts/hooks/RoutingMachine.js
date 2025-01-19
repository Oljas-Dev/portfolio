import { createControlComponent } from "@react-leaflet/core";
import L from "leaflet";
import "leaflet-routing-machine";

const createRoutineMachineLayer = ({ start, end }) => {
  const instance = L.Routing.control({
    waypoints: [L.latLng(start?.lat, start?.lng), L.latLng(end?.lat, end?.lng)],
    lineOptions: {
      styles: [{ color: "blue", weight: 10 }],
    },
    show: false,
    addWaypoints: false,
    routeWhileDragging: true,
    draggableWaypoints: true,
    fitSelectedRoutes: true,
    showAlternatives: false,
  });

  return instance;
};

const RoutingMachine = createControlComponent(createRoutineMachineLayer);

export default RoutingMachine;
