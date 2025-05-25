const urlBase = 'https://api.mapbox.com/isochrone/v1/mapbox/';
const lon = -77.034;
const lat = 38.899;
const profile = 'cycling';
const minutes = 10;
const accessToken = import.meta.env.VITE_MAPBOX_ACCESS_TOKEN;

async function getIso() {
  const query = await fetch(
    `${urlBase}${profile}/${lon},${lat}?contours_minutes=${minutes}&polygons=true&access_token=${accessToken}`,
    { method: 'GET' }
  );
  const data = await query.json();

  return data;
}

export default getIso;
