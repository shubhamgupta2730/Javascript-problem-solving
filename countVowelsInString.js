// Count the Number of Vowels in a String

function countVowelsInString(str) {
  const vowels = 'aeiouAEIOU';
  let count = 0;
  for (let word of str) {
    if (vowels.includes(word)) {
      count++;
    }
  }

  return count;
}

const str = "Hello js everyone";
const vowelCount = countVowelsInString(str);
console.log(vowelCount)
