function updateTime() {
    let losAngelesElement = document.querySelector("#los-angeles");
    let losAngelesDateElement = losAngelesElement.querySelector(".date");
    let losAngelesTimeElement = losAngelesElement.querySelector(".time");
    let losAngelesTime = moment.tz("America/Los_Angeles");
    losAngelesDateElement.innerHTML = losAngelesTime.format("MMMM Do, YYYY");
    losAngelesTimeElement.innerHTML = losAngelesTime.format("h:mm:ss [<small>]A[</small>]");

    let canberraElement = document.querySelector("#canberra");
    let canberraDateElement = canberraElement.querySelector(".date");
    let canberraTimeElement = canberraElement.querySelector(".time");
    let canberraTime = moment.tz("Australia/Canberra");
    canberraDateElement.innerHTML = canberraTime.format("MMMM Do, YYYY");
    canberraTimeElement.innerHTML = canberraTime.format("h:mm:ss [<small>]A[</small>]");
}

updateTime();
setInterval(updateTime,1000);