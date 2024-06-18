//merge two arrays and remove duplicate values: 

let array1 = [1,2,3,4];
let array2 = [2,3,4,5,6];
function mergeArray(arr1, arr2){
  return arr1.concat(arr2);
}

function removeDuplicates(arr){
  let uniqueArray = [...new Set(arr)];
  return uniqueArray;
}
let mergedArray = mergeArray(array1, array2)
console.log(mergedArray);
let finalArray = removeDuplicates(mergedArray);
console.log(finalArray);

