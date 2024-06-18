// check if an object is an array:

let obj = {
  name: 'shubham',
  age:20,
  city: 'kota',
};

function checkIfArray(obj){
  return Array.isArray(obj);
}

let array= [1,2,3];
console.log(checkIfArray(array))
console.log(checkIfArray(obj))