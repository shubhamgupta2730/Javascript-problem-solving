// 2d array: 

function crete2dArray(row, col){
  let array = [];
  for(let i = 0; i<row; i++){
    array[i] = [];
    for(let j = 0; j<col; j++){
      array[i][j]=0;
    }
  }
  return array;

}

let row = 3;
let col = 3;
let array  = crete2dArray(row, col);
console.log(array);