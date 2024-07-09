document.getElementById('convertButton').addEventListener('click', function() {
    const input = document.getElementById('temperatureInput').value;
    const unit = document.getElementById('unitInput').value;
    const resultElement = document.getElementById('result');

    if (isNaN(input)) {
        resultElement.textContent = 'Please enter a valid number!';
        return;
    }

    const temperature = parseFloat(input);
    let result = '';

    switch (unit) {
        case 'C':
            result = `${temperature} °C = ${(temperature * 9/5 + 32).toFixed(2)} °F = ${(temperature + 273.15).toFixed(2)} K`;
            break;
        case 'F':
            result = `${temperature} °F = ${((temperature - 32) * 5/9).toFixed(2)} °C = ${((temperature - 32) * 5/9 + 273.15).toFixed(2)} K`;
            break;
        case 'K':
            result = `${temperature} K = ${(temperature - 273.15).toFixed(2)} °C = ${((temperature - 273.15) * 9/5 + 32).toFixed(2)} °F`;
            break;
        default:
            result = 'Please select a valid unit!';
    }

    resultElement.textContent = result;
});
