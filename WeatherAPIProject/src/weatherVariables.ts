//functionss to filter and prapare information from the weather api
import { getWeatherReport } from './weather-service';

//function to return promise that might resolve data of json object

function handleSuccess(response: Response) {
  console.log(response);
  response.json().then(
    (data) => {
      console.log(data);
    },
    (error: Error) => {
      console.log(error);
    }
  );
}
function handleFailure(error: Error) {
  console.log(error);
}

export function returnJson(lat: number, long: number): void {
  const weatherVaribleJsonObject = getWeatherReport(lat, long);
  weatherVaribleJsonObject.then(handleSuccess, handleFailure);
}

export function fetchUnwrapData(lat: number, long: number): void {
  getWeatherReport(lat, long)
    .then((response: Response) => response.json())
    .then((data) => {
      console.log(data.dataseries[1]);
      renderWeatherData(data);
    })
    .catch((error: Error) => console.error(error));
}

function renderWeatherData(dataToRender: any): void {
  const weatherVaribleDiv = document.createElement(`div`);
  weatherVaribleDiv.innerText = JSON.stringify(dataToRender, null, 4);
  weatherVaribleDiv.style.whiteSpace = `pre-wrap`;
  document.body.append(weatherVaribleDiv);
}
