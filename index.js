const celciusEl = document.getElementById("celcius")
const fahrenheitEl = document.getElementById("fahrenheit")
const kelvinEl = document.getElementById("kelvin")



function calculateTemp(event) {
    // console.log(event.target.name);
    const currValue = event.target.value;
    switch (event.target.name) {
        case "celcius":
            kelvinEl.value = currValue + 273;
            fahrenheitEl.value = (currValue * 1.8) + 32;
            break;
        case "fahrenheit":
            kelvinEl.value = (currValue - 32) / 1.8 + 273;
            celciusEl.value = (currValue - 32) / 1.8;
            break;
        case "kelvin":
            celciusEl.value = currValue - 273;
            fahrenheitEl.value = ((currValue - 273) * 1.8 + 32);
            break;

        default:
            break;
    }

}