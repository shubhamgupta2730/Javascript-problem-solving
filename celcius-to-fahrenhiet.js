//temp in fahrenheit: 
function celToFar(temp){
  return (temp * 9/5)+32;

}

//temp in celsius: 
function farToCel(temp){
  return (temp - 32) * 5/9;
}

let temp = 25;
let tempInFar = celToFar(temp);
console.log(`${temp} Celsius is equal to ${tempInFar} Fahrenheit`);

let tempInCel = farToCel(temp);
console.log(`${temp} Fahrenheit is equal to ${tempInCel} Celsius`);
