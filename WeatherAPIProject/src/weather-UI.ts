import './style.css';

// learn how to us ts to populate dom

const bannerElement = document.getElementsByClassName('weather-banner');

export function bannerEditorAndExporter() {
  bannerElement[0].innerHTML = 'Choose your three day forcast.';
}
