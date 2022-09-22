fahrenheit = prompt("Enter the temperature in Fahrenheit: ");

const convertToCelsius = fahrenheit => (fahrenheit-32) * (5/9)

alert(`${fahrenheit} Fahrenheit is ${Math.round(convertToCelsius(fahrenheit))} Celsius`)