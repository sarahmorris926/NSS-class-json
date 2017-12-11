
const myWeatherReq = new XMLHttpRequest();

const callIfFailed = () => {
  console.log('oops. We should handle this better than with a console.log');

}

const parseWeatherData= () => {
  const data = JSON.parse(event.target.responseText);
  console.log("data", data);
  outputWeather(data.current_observation);
}

myWeatherReq.open(
  "GET",
  "http://api.wunderground.com/api/0c1a2e2609e192f5/conditions/q/TX/Austin.json"
);

myWeatherReq.addEventListener("load", parseWeatherData);
myWeatherReq.addEventListener("error", callIfFailed);



myWeatherReq.send();

const outputWeather = (data) => {
  const weatherStuff = document.getElementById("weatherStuff");
  weatherStuff.innerHTML = `<h3>Conditions for ${data.display_location.full}</h3>
  <p>Current temp: ${data.temp_f}</p>
  <p>The wind is currently ${data.wind_string}</p>`
}