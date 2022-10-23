//functionss to filter and prapare information from the weather api
import { getWeatherReport } from './weather-service';
import './style.css';
//function to return promise that might resolve data of json object

// function handleSuccess(response: Response) {
//   console.log(response);
//   response.json().then(
//     (data) => {
//       console.log(data);
//     },
//     (error: Error) => {
//       console.log(error);
//     }
//   );
// }
// function handleFailure(error: Error) {
//   console.log(error);
// }

// export function returnJson(lat: number, long: number): void {
//   const weatherVaribleJsonObject = getWeatherReport(lat, long);
//   weatherVaribleJsonObject.then(handleSuccess, handleFailure);
// }

export function fetchUnwrapData(lat: number, long: number): any {
  getWeatherReport(lat, long)
    .then((response: Response) => response.json())
    .then((data) => {
      console.log(data);
      dateRenderer(data);
      minMaxTemperatureRenderer(data);
    })
    .catch((error: Error) => console.error(error));
}

function renderWeatherData(dataToRender: any): void {
  const weatherVaribleDiv = document.createElement(`div`);
  weatherVaribleDiv.innerText = JSON.stringify(dataToRender, null, 4);
  // weatherVaribleDiv.style.whiteSpace = `pre-wrap`;
  // document.body.append(weatherVaribleDiv);
}

//date render
function dateRenderer(dateData: any): void {
  const dateVaribleDiv = document.createElement('div');
  let dateString = dateData.init;
  dateString = dateSplitter(dateString);
  dateVaribleDiv.innerText = JSON.stringify(dateString, null, 4);
  dateVaribleDiv.getElementsByClassName('weather-date');
  dateVaribleDiv.className = 'weather-date';
  document.body.append(dateVaribleDiv);
}

function dateSplitter(theDateString: any): string {
  theDateString = `Forcast for the next three days for the date of ${theDateString.substring(
    6,
    8
  )} ${theDateString.substring(4, 6)} ${theDateString.substring(0, 4)}  `;
  return theDateString;
}
// time stamps I am using
const timeStampArray = [1, 3, 9, 11, 17, 19];
//temperature

function minMaxTemperatureRenderer(tempData: any): void {
  let currentDay = 1;
  const temperatureVaribleDiv = document.createElement('div');
  for (let dayTime in timeStampArray) {
    const subTemperatureVaribleDiv = document.createElement('div');

    let tempString = tempData.dataseries[dayTime].temp2m;
    if (
      timeStampArray[dayTime] === 1 ||
      timeStampArray[dayTime] === 9 ||
      timeStampArray[dayTime] === 17
    ) {
      tempString = tempString + ` *C min temp for day ${currentDay}`;
    } else {
      tempString = tempString + ` *C max temp for day ${currentDay}`;

      currentDay++;
    }
    subTemperatureVaribleDiv.innerText = JSON.stringify(tempString, null, 4);
    subTemperatureVaribleDiv.getElementsByClassName('weather-display');
    subTemperatureVaribleDiv.className = 'weather-display';
    temperatureVaribleDiv.appendChild(subTemperatureVaribleDiv);
  }
  document.body.append(temperatureVaribleDiv);
}
//cloudcover

//rain chance

//on click button functions to set cordinates
const pretoriaButton = document.getElementById('pretoria-button');
const durbanButton = document.getElementById('durban-button');
const capeTownButton = document.getElementById('capetown-button');

let pretoriaButtonState = false;
let durbanButtonState = false;
let capeTownButtonState = false;

function pretoriaButtonPressed(): void {
  pretoriaButtonState = true;
  durbanButtonState = false;
  capeTownButtonState = false;
  console.log(`pretoria${pretoriaButtonState}`);
}

function durbanButtonPressed(): void {
  pretoriaButtonState = false;
  durbanButtonState = true;
  capeTownButtonState = false;
  console.log(`durban${durbanButtonState}`);
}

function capeTownButtonPressed(): void {
  pretoriaButtonState = false;
  durbanButtonState = false;
  capeTownButtonState = true;
  console.log(`capetown${capeTownButtonState}`);
}

pretoriaButton?.addEventListener('click', pretoriaButtonPressed);
durbanButton?.addEventListener('click', durbanButtonPressed);
capeTownButton?.addEventListener('click', capeTownButtonPressed);

pretoriaButton?.addEventListener('click', returnCityCoOrdinate);
durbanButton?.addEventListener('click', returnCityCoOrdinate);
capeTownButton?.addEventListener('click', returnCityCoOrdinate);

function returnCityCoOrdinate(): void {
  let buttonPressed = pretoriaButtonState;
  let returnedCoOrdinate: number[] = [];
  if (buttonPressed === true) {
    returnedCoOrdinate.push(28.2293);
    returnedCoOrdinate.push(25.7479);
  }
  buttonPressed = durbanButtonState;
  if (buttonPressed === true) {
    returnedCoOrdinate.push(31.0218);
    returnedCoOrdinate.push(29.8587);
  }
  buttonPressed = capeTownButtonState;
  if (buttonPressed === true) {
    returnedCoOrdinate.push(18.4241);
    returnedCoOrdinate.push(33.9249);
  }

  let long = 0;
  let lat = 0;
  console.log(returnedCoOrdinate.length);
  if (returnedCoOrdinate.length === 2) {
    long = returnedCoOrdinate[0];
    lat = returnedCoOrdinate[1];
  }
  console.log(long, lat);
  fetchUnwrapData(long, lat);
}
