//merge property of two objects: 

let car1 = {
  name: 'car1',
  color: 'blue',
}

let car2 = {
  name: 'car2',
  type: 'sedan',
  price: 500000,
}

//using spread operator: 
let mergedCars = {...car1, ...car2};
console.log(mergedCars);