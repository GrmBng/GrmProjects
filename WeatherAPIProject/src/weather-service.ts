// const GRAPHIC_URL =
//   'http://www.7timer.info/bin/astro.php?lon=113.17&lat=23.09&ac=0&lang=en&unit=metric&output=internal&tzshift=0';

const BASE_URL =
  'http://www.7timer.info/bin/api.pl?lon=113.17&lat=23.09&product=astro&output=xml';

export function getLongitude() {
  return fetch(`${BASE_URL}/lon`);
}

export function getLatitude() {
  return fetch(`${BASE_URL}/lat`);
}

export function getProduct() {
  return fetch(`${BASE_URL}/civil`);
}

export function getOutputStandard() {
  return fetch(`${BASE_URL}/json`);
}
