// first //

const peterWeight = (78)
const peterHeight = (1.69)
const lucasWeight = (92)
const lucasHeight = (1.95)
var peterBmi = (peterWeight / (peterHeight * peterHeight));
var lucasBmi = (lucasWeight / (lucasHeight * lucasHeight));
var lucasCompared = (lucasBmi>peterBmi);
console.log( 'Peters BMI is ' + peterBmi + ', Lucases BMI is ' + lucasBmi + ', Peters BMI is higher than Lucases ' + lucasCompared);

// second //

var temperatureC = (20 + 32) * 1/8;
console.log ('20 °C is '+(temperatureC)+'°F');
var temperatureF = (79 - 32) / 1.8;
console.log ('79 °F is '+(temperatureF)+'°C');

//third//
if  (lucasBmi > peterBmi) {console.log('Lucases BMI is higher that Peters. Lucas is the man!');}
else if ( peterBmi > lucasBmi) {console.log('Peters BMI is Higher than Lucases. Lucas gotta hit the gym!');}

console.log(`Peters BMI  ${peterBmi} is higher than Lucases BMI ${lucasBmi}!`);

//fourth//


let tempConvertingC = (val1) =>  (val1 * 1.8) +32;

console.log('100 °C is ' + tempConvertingC(100) + ' °F');
console.log('0 °C is ' + tempConvertingC(0) + ' °F')
console.log('10 °C is ' + tempConvertingC(10) + '°F')

let tempConvertingF = (val2) => (val2 / 1.8) / 32;

console.log('32 °F is ' + tempConvertingF(32) + ' °C')
console.log('12 °F is ' + tempConvertingF(12) + ' °C')
console.log('102 °F is ' + tempConvertingF(102) + ' °C')
