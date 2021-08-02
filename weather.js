class Weather {
  constructor(city) {
    this.apiKey = "fdc30d03eae484dc94037bbe9a45a98e";
    this.city = city;
    // this.state = state;
  }

  //   Fetch weather api

  async getWeather() {
    const reponse = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${this.city}&units=metric&appid=${this.apiKey}`
    );
    const responseData = await reponse.json();

    return responseData;
  }

  // Change location
  changeLocation(city) {
    this.city = city;
    // this.state = state;
  }
}
