/**
* @name: Assignment1
* @Course Code: SODV1201
* @class: Software Development Diploma program.
**/
function convertToFahrenheit(temp) {
    return (temp - 32) * 5 / 9;
}

let convertToKelvin = function(temp) {
    return temp + 273.15;
};

function Conversion() {
    let tempInput = document.getElementById("temp");
    let fahrenheit = parseFloat(tempInput.value);
    if (!isNaN(fahrenheit)) {
        let celsius = convertToFahrenheit(fahrenheit);
        let kelvin = convertToKelvin(celsius);
        alert(fahrenheit + '°F = ' + celsius.toFixed(2) + '°C = ' + kelvin.toFixed(2) + 'K');
    } else {
        alert("Please enter a valid temperature value.");
    }
}
document.getElementById("convertor").addEventListener("click", Conversion);

let formattedDate = currentDate.toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' });


document.getElementById('footer').innerHTML += " | Date: " + formattedDate;