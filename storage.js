class Storage {
  constructor() {
    this.city;
    this.defaultCity = "Mumbai";
  }

  getLocationData() {
    if (localStorage.getItem("City") == null) {
      this.city = this.defaultCity;
    } else {
      this.city = localStorage.getItem("City");
    }

    return { city: this.city };
  }

  setLocationData(city) {
    localStorage.setItem("City", city);
  }
}
