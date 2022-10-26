import { IWeatherAPIResponse } from './models';
// const GRAPHIC_URL =
//   'http://www.7timer.info/bin/astro.php?lon=113.17&lat=23.09&ac=0&lang=en&unit=metric&output=internal&tzshift=2';
// getWeatherReport is my train, and I have chosen - defined my station
const BASE_URL = 'https://www.7timer.info/bin/civil.php';

// go back to anon inline functions

export function getWeatherReport(latitude: number, longitude: number) {
  return fetch(
    `${BASE_URL}?lon=${longitude}&lat=${latitude}&ac=0&unit=metric&output=json&tzshift=+2`
  ).then((response) => response.json() as Promise<IWeatherAPIResponse>);
}
