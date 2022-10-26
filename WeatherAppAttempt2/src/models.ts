// interface defines keys of a type and types of those keys (proprerties)
// interface is not a primitave/ not a class/
// there interfaces were renamed so as to derive data (how it looks) from that response response
//  from https://www.7timer.info/bin/civil.php?lon=-0.9&lat=47.1&ac=0&unit=metric&output=json&tzshift=+2
// train metaphor - fetch = train, url = station, promise = scdule of train, cart = body of reaponse, State of Train = status, JSON promises to open cart, Train Manuscript - Interface
export interface IWindMeasurment {
  direction: string;
  speed: number;
}

// a data point is a piece of data in a data series
export interface IWeatherDataPoint {
  timepoint: number;
  cloudcover: number;
  lifted_index: number;
  prec_type: string;
  prec_amount: number;
  temp2m: number;
  rh2m: string;
  wind10m: IWindMeasurment;
  weather: string;
}

// genrics should flad diamond brackets
//Array<IWeatherDataPoint> is longhand way to type key of array (generic)
export interface IWeatherAPIResponse {
  product: string;
  init: string;
  dataseries: IWeatherDataPoint[];
}
