// 153: 1*1*1 + 5*5*5 + 3*3*3

function checkArmstrong(num){
  let rem = 0 ;
  let result = 0;
  let checkNum= num;
  while(num!=0){
    rem = num %10;
    result +=rem*rem*rem;
    num = Math.floor(num/10);
  }
  console.log(result);
  if(result == checkNum){
    console.log(`${checkNum} is a armstrong number`);
  }else{
    console.log(`${checkNum} is not a armstrong number`);
  }
}

let num = 155;
checkArmstrong(num);