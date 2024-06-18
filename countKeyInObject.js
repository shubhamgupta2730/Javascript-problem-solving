//count the no. of keys in object: 

let object = {
  name: 'shubham',
  age: 22,
  city: 'kota',
}

function countKeys(object){
  return Object.keys(object).length;
}

console.log(countKeys(object));
