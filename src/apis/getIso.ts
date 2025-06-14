import { INITIAL_CENTER } from "../components/MapContainer/components/Map/Map.constants";
import type { TransitMode } from "../components/MapContainer/MapContainer.types";

const urlBase = "https://api.mapbox.com/isochrone/v1/mapbox/";
const lon = INITIAL_CENTER[0];
const lat = INITIAL_CENTER[1];
const accessToken = import.meta.env.VITE_MAPBOX_ACCESS_TOKEN;

interface GetIsoParams {
  time: number;
  transitMode: TransitMode;
}

const getProfile = (transitMode: TransitMode) => {
  switch (transitMode) {
    case "walk":
      return "walking";
    case "bike":
      return "cycling";
    case "drive":
      return "driving";
    default:
      return "walking";
  }
};

async function getIso({ time, transitMode }: GetIsoParams) {
  const profile = getProfile(transitMode);
  const minutes = Math.round(time);

  const query = await fetch(
    `${urlBase}${profile}/${lon},${lat}?contours_minutes=${minutes}&polygons=true&access_token=${accessToken}`,
    { method: "GET" },
  );
  const data = await query.json();

  return data;
}

export default getIso;
