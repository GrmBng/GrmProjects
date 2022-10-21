import './style.css';
// learn how to us ts to populate dom
export function bannerEditorAndExporter() {
  const bannerElement = document.createElement('div');
  bannerElement.className = 'weather-banner';
  bannerElement.innerText = 'Choose your three day forcast.';
  const body = document.getElementsByTagName('BODY')[0];
  body.append(bannerElement);
}
