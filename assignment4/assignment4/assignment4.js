// first //

const peterWeight = (78)
const peterHeight = (1.69)
const lucasWeight = (92)
const lucasHeight = (1.95)
var peterBmi = (peterWeight / (peterHeight * peterHeight));
var lucasBmi = (lucasWeight / (lucasHeight * lucasHeight));
console.log(peterBmi + ' Is Peters BMI');
console.log(lucasBmi + ' is Lucases BMI');
console.log(lucasBmi > peterBmi);

// second //

var temperatureC = '20C';
temperatureC = '52F';
var temperatureF = 'temperatureC'
temperatureC = "20C"

//third//
if  (lucasBmi > peterBmi) {console.log('Lucases BMI is higher that Peters. Lucas is the man!');}
else if ( peterBmi > lucasBmi) {console.log('Peters BMI is Higher than Lucases. Lucas gotta hit the gym!');}

console.log(`Peters BMI  ${peterBmi} is higher than Lucases BMI ${lucasBmi}!`);

//fourth//


function celsiusToFahrenheit(val1, val2, val3) {
    
    let new =((val1+fahr) (val2+fahr) (val3+fahr));
    const fahr = 32;
    return `your temperature in Fahrenheit is` ${new};
 }
 
 console.log(celsiusToFahrenheit (100, 0, 10));