function removeItem(arr, itemToRemove){
  return arr.filter(item => item !==itemToRemove);
}

let givenArray = [1,2,3, 4,4,4, 5, 6];
itemToRemove = 4;
let updatedArray = removeItem(givenArray, itemToRemove);
console.log(updatedArray);
