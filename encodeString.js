// Encode a String to Base64

function encodeToBase64(str) {
 
  return btoa(str);
}

const myString = "Hello World";
const encodedString = encodeToBase64(myString);
console.log(encodedString)
