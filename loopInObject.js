//object: 
let car = {
  name: 'electric',
  type: 'sedan',
  color: 'blue',
  price: 4000,
};

function loopInObject(obj){
  for(let key in obj){
   console.log(key + " " + obj[key]);
  }
}

loopInObject(car);