//check for specific value in array:

  function checkValue(arr, value){
    return arr.includes(value);
  }

  let array = [1,2,3,4,5,6,7];
  let value = 9;
  console.log(checkValue(array, value));
