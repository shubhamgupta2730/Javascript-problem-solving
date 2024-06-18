function appendObject(arr, obj){
  arr.push(obj);
  return arr;
}

let obj = {
  id: 1,
  name: 'obj1',
  color: 'white',
}

let array  = [1,2,3,3,4];
console.log(appendObject(array, obj));