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

export function temperatureRenderer(tempData: any): void {
  const temperatureVaribleDiv = <HTMLDivElement>document.getElementById();
}
