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
