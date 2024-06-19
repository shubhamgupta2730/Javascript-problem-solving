//program to generate a random string in js: 

function generateRandomString(length) {
  const char = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  const charLength = char.length;
  
  for (let i = 0; i < length; i++) {
      result += char.charAt(Math.floor(Math.random() * charLength));
  }
  
  return result;
}

console.log(generateRandomString(10));

