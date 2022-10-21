import { fetchUnwrapData } from './weatherVariables';
import { bannerEditorAndExporter } from './weather-UI';
import './style.css';
//lon=28.2293&lat25.7479 pretoria cordinates
// returnJson(28.2293, 25.7479);
bannerEditorAndExporter();
fetchUnwrapData(28.2293, 25.7479);
