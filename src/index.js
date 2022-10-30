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

function updateIndividualCity (cityElement, timeZone) {
    if (cityElement) {
        if (!timeZone) {
            let cityTimeZoneElement = cityElement.querySelector("#selected-city-timezone");
            timeZone = cityTimeZoneElement.value;
        }
        let cityDateElement = cityElement.querySelector(".date");
        let cityTimeElement = cityElement.querySelector(".time");
 //       let cityFlagElement = cityElement.querySelector("#flag");
 //       cityFlagElement.innerHTML = countryFlag("UN");
        let cityTime = moment.tz(timeZone);
        cityDateElement.innerHTML = cityTime.format("MMMM Do, YYYY");
        cityTimeElement.innerHTML = cityTime.format("h:mm:ss [<small>]A[</small>]");
    }
}

function updateTime() {

    let losAngelesElement = document.querySelector("#los-angeles");
    updateIndividualCity (losAngelesElement, "America/Los_Angeles");

    let canberraElement = document.querySelector("#canberra");
    updateIndividualCity (canberraElement, "Australia/Canberra");

    let tokyoElement = document.querySelector("#tokyo");
    updateIndividualCity (tokyoElement, "Asia/Tokyo");

    let selectedCityElement = document.querySelector("#selected-city");
    updateIndividualCity( selectedCityElement, "");
}
function updateSelectedCity(event) {
    let cityTimeZone = event.target.value;
    if (cityTimeZone.length > 0) {
        if (cityTimeZone === "local") {
            cityTimeZone = moment.tz.guess();
        }
        let cityName = cityTimeZone.replace('_', ' ').split("/")[1];
        let cityTime = moment.tz(cityTimeZone);
        let citiesElement = document.querySelector("#cities");
        citiesElement.innerHTML = `
    <div id="cities">
          
        <div class="city" id="selected-city">
        <input type="hidden" id="selected-city-name" value="${cityName}">
        <input type="hidden" id="selected-city-timezone" value="${cityTimeZone}"> 
            <div>
                <h2>${cityName} <span id="flag"></span></h2>
                <div class="date">${cityTime.format("MMMM Do, YYYY")}</div>
            </div>
            <div class="time">${cityTime.format("h:mm:ss")}
                <small>${cityTime.format("A")}</small></div>
            </div>
        </div>
    </div>
  <div class="back-link">
  <a href="/">All cities</a>
  </div>
  `;
    }
}
updateTime();
setInterval(updateTime, 1000);

let citySelectElement = document.querySelector("#city-select");
citySelectElement.addEventListener("change", updateSelectedCity);

