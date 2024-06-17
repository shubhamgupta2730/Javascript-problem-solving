function kilometersToMiles(kilometers) {
  const conversionRate = 0.621371;
  let miles = kilometers * conversionRate;
  return miles;
}

let kilometers = 10;
let miles = kilometersToMiles(kilometers);
console.log(`${kilometers} kilometers is equal to ${miles} miles.`);
