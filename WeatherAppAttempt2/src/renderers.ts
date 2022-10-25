//date render
import './style.css';

export function dateRenderer(dateData: any): void {
  const dateVaribleDiv = <HTMLDivElement>document.getElementById('date-line');
  let dateString = dateData.init;
  dateString = dateSplitter(dateString);
  dateVaribleDiv.innerHTML = dateString;
  //   if (dateVaribleDiv) {
  //     dateVaribleDiv.innerHTML = JSON.stringify(dateString, null, 4);
  //   }
}

function dateSplitter(theDateString: any): string {
  theDateString = `Forcast for the next three days for the date of ${theDateString.substring(
    6,
    8
  )} ${theDateString.substring(4, 6)} ${theDateString.substring(0, 4)}  `;
  return theDateString;
}

//min and max temperature renderer
//use of time stamps:3 hour intevals, first from 02:00 - 23:00, 0 - 6 in array
// 7 - 13 next day, 14 - 20 last day

// city object to cycle through cities
const cities = { Pretoria: 'pretoria', Durban: 'durban', Capetown: 'capetown' };

// cycle through json object, asign to element three times,
// use two for loops, one that goes to three, the other that
//cyles throgh the json array up to seven - use vaaribles to count or the map function?
//using the map funtion would require me to extract and create new array anyway?

export function temperatureRenderer(
  tempData: any,
  temperatureCity: string
): void {
  let locationValue: keyof typeof cities;
  for (locationValue in cities) {
    let city = cities[locationValue];
    if ((city = temperatureCity)) {
      const temperatureVaribleDiv = <HTMLDivElement>document.getElementById();
    }
  }
  // const temperatureVaribleDiv = <HTMLDivElement>document.getElementById();
}
