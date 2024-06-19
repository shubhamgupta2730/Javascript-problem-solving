// split array into smaller chunks: 

//uisng slice method: 

function chunkArray(arr, size){
  const chunkArray = [];
  for(let i= 0; i<arr.length; i+=size){
   chunkArray.push(arr.slice(i, i+size));

  }
  return chunkArray
}

let arr = [1,2,3,4,5,6];
let size = 2;
console.log(chunkArray(arr, size));
