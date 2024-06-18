//converting a number from decimal to binary format: 

function decimalToBinary(num){
  if(num == 0){
    return "0";
  }
  let binaryNum = "";
  let decimalNum = num;
  while(decimalNum>0){
    binaryNum = (decimalNum %2)+binaryNum;
    decimalNum = Math.floor(decimalNum/2);
  }
  return binaryNum;
}

const num = 17;
console.log(decimalToBinary(num));