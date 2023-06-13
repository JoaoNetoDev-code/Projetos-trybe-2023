
const API_DATA ='https://api.wheretheiss.at/v1/satellites/25544'

const fetchCoordinates = async () => {
  const response = await fetch(API_DATA);
  
  if (!response.ok) {
    throw new Error('Failed to feth coordinates');
  }

  const coordinates = await response.json();
  const latitude = Number(coordinates.latitude.toFixed(4));
  const longitude = Number(coordinates.longitude.toFixed(4));

  return {latitude, longitude};
}

export default fetchCoordinates;
