//check if number is +ve, -ve or zero
function checkNum(num){
  if(num>0){
    console.log(`${num } is a positive number.`)
  }else if(num<0){
    console.log(`${num} is a negative number.`)
  }else if (num == 0 ){
    console.log(`${num } is 0`)
  }else{
    console.log(`${num } is not a valid number`)
  }
};

let num = 5;
checkNum(num);
