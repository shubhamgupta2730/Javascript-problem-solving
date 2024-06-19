// Remove All Whitespaces From a Text

const text = " This i s the text with whitepsaces  "

function removeWhitespaces(text){
 return text.split(" ").join('');
}

console.log(removeWhitespaces(text));