//inserting an item in array: 

function insertItem(arr, item){
  //insert at end
  arr.push(item);
  //insert at start: 
  arr.unshift(item)

  //
  return arr;
}

let array = [1,2,3,4,6];
let item = 5;
console.log(insertItem(array, item));