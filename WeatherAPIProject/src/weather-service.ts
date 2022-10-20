// const GRAPHIC_URL =
//   'http://www.7timer.info/bin/astro.php?lon=113.17&lat=23.09&ac=0&lang=en&unit=metric&output=internal&tzshift=0';

const BASE_URL = 'https://www.7timer.info/bin/civil.php';

export function getWeatherReport(latitude: number, longitude: number) {
  return fetch(
    `${BASE_URL}?lon=${longitude}&lat=${latitude}&ac=0&unit=metric&output=json&tzshift=0`
  );
}
