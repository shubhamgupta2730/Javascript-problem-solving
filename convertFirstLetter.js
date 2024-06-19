//convert first letter of a string to upperCase: 

function convertLetter(str){
  return str[0].toUpperCase() + str.slice(1);
}

let str = "hello";
console.log(convertLetter(str));