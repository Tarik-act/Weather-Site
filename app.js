// Storage...
const storage = new Storage();

const weatherLocation = storage.getLocationData();
// Init weather
const weather = new Weather(weatherLocation.city);
const ui = new UI();

document.getElementById("w-change-btn").addEventListener("click", (e) => {
  const city = document.getElementById("city").value;

  weather.changeLocation(city);
  // set locatio in LS
  storage.setLocationData(city);
  getWeather();

  $("#locModal").modal("hide");
});
document.addEventListener("DOMContentLoaded", getWeather);

function getWeather() {
  weather
    .getWeather()
    .then((reponse) => ui.paint(reponse))
    .catch((err) => console.log(err));
}
