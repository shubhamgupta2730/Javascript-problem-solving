function squareRoot(num){
 if(num<0){
  console.log(`${num} is negative number.   `)
  return;
 }
 let squareRoot = Math.sqrt(num);
 console.log(`Square root of ${num } is : ${squareRoot}.`)
}

let num = 25;
squareRoot(num);