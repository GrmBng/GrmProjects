import './style.css';
import { getWeatherReport } from './weather-service';
import { dateRenderer, temperatureRenderer } from './renderers';

// const pretoriaTableFiller = document.getElementById('pretoria-button');
// const durbanTableFiller = document.getElementById('durban-button');
// const capeTableFiller = document.getElementById('capetown-button');

//function that gets called to unwrap and implement data
function fetchUnwrapData(lat: number, long: number): any {
  getWeatherReport(lat, long)
    .then((response: Response) => response.json())
    .then((data) => {
      console.log(data);
      dateRenderer(data);
      temperatureRenderer(data);
    })
    .catch((error: Error) => console.error(error));
}

// arrays containing pretoria/durban/capetown coordinates
const arrayOfLongitude = [28.2293, 31.0218, 18.4241];
const arrayOfLatidudes = [25.7479, 29.8587, 33.9249];

function cycleThroughCoordinates(): void {
  for (let i = 0; i < 3; i++) {
    fetchUnwrapData(arrayOfLongitude[i], arrayOfLatidudes[i]);
  }
}

cycleThroughCoordinates();
