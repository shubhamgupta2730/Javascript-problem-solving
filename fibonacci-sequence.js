//fibonacci: 0,1,1,2,3,5,8...
function fibonacciSequence(num) {
  if (num <= 0) {
    console.log("Number of terms should be positive");
    return;
  } else if (num == 1) {
    console.log("Fibonacci sequence for one term: ")
    console.log(0);
    return;
  } else if (num == 2) {
    console.log("fibonacci sequence for two terms: ");
    console.log(0, 1);
    return;
  } else {
    console.log(`Fibonacci sequence for ${num} terms: `);
    let a = 0, b = 1;
    console.log(a, b);
    for (let i = 2; i < num; i++) {
      let nextTerm = a + b;
      console.log(nextTerm + ", ");
      a = b;
      b = nextTerm;
    }
  }
}
let num = parseInt(prompt("Enter number of terms: "), 10);
fibonacciSequence(num);
