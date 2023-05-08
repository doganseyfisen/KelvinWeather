const kelvin = 0;
// kelvin equals to 0
let celcius = kelvin - 273;
// celcius is 273 degrees less than kelvin
let fahrenheit = celcius * (9/5) + 32;
// Fahrenheit = Celsius * (9/5) + 32
fahrenheit = Math.floor(fahrenheit);
// When you convert from Celsius to Fahrenheit, you often get a decimal number
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`)
