//reverse a string: 

function reverseString(str){
  return str.split('').reverse().join('');
}

const str = 'hello everyone'
console.log(reverseString(str));