//object: 
let car = {
  name: 'electric',
  color: 'white',
  type: 'sedan',

};

function checkKey(obj, key){
  return key in obj;
}

console.log(checkKey(car, 'name'));
console.log(checkKey(car, 'price'))