//conversion of object to string: 

let object = {
  name: 'object1',
  age: 24,
  color: 'white',
  price: 3300,
}

function convertObjectToString(obj){
  return JSON.stringify(obj);
}

console.log(convertObjectToString(object));