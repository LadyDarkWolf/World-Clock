function countryFlag(code) {
    if (code.length != 2) {
        return countryFlag("UN");
    }
    code = code.toUpperCase();
    let returnValue = "";
    for (var i = 0; i < code.length; i++) {
        let value = code.charCodeAt(i);
        value += 127397;
        returnValue += "&#x" + value.toString(16) + ";";
    }
    return returnValue;
}

function updateTime() {

    let losAngelesElement = document.querySelector("#los-angeles");
    if (losAngelesElement) {
        let losAngelesDateElement = losAngelesElement.querySelector(".date");
        let losAngelesTimeElement = losAngelesElement.querySelector(".time");
        let losAngelesFlagElement = losAngelesElement.querySelector("#flag");
        losAngelesFlagElement.innerHTML = countryFlag("US");
        let losAngelesTime = moment.tz("America/Los_Angeles");
        losAngelesDateElement.innerHTML = losAngelesTime.format("MMMM Do, YYYY");
        losAngelesTimeElement.innerHTML = losAngelesTime.format("h:mm:ss [<small>]A[</small>]");
    }
    let canberraElement = document.querySelector("#canberra");
    if (canberraElement) {

        let canberraDateElement = canberraElement.querySelector(".date");
        let canberraTimeElement = canberraElement.querySelector(".time");
        let canberraFlagElement = canberraElement.querySelector("#flag");
        canberraFlagElement.innerHTML = countryFlag("AU");
        let canberraTime = moment.tz("Australia/Canberra");
        canberraDateElement.innerHTML = canberraTime.format("MMMM Do, YYYY");
        canberraTimeElement.innerHTML = canberraTime.format("h:mm:ss [<small>]A[</small>]");
    }
}
function updateCity(event) {
    let cityTimeZone = event.target.value;
    if (cityTimeZone.length > 0) {
        let cityName = "Local Time";
        let cityTime = moment();
        if (cityTimeZone !== "local") {
            cityName = cityTimeZone.replace('_', ' ').split("/")[1];
            cityTime = moment.tz(cityTimeZone);
        }
        let citiesElement = document.querySelector("#cities");
        citiesElement.innerHTML = `
  <div id="cities">
  <div class="city">
    <div>
      <h2>${cityName} <span id="flag"></span></h2>
      <div class="date">${cityTime.format("MMMM Do, YYYY")}</div>
    </div>
    <div class="time">${cityTime.format("h:mm:ss")}
        <small>${cityTime.format("A")}</small></div>
  </div>`;
    }
}
updateTime();
setInterval(updateTime, 1000);

let citySelectElement = document.querySelector("#city-select");
citySelectElement.addEventListener("change", updateCity);
