// const input = document.querySelector("#name");
// const btn = document.getElementsByTagName("button");

// console.log(input)
// console.log(btn)

// n = 3434;
// nCopy = 3434;

// p = 0;

// while (n > 0) {
//   const r = n % 10;
//   p = p * 10 + r;
//   n = Math.floor(n / 10);
// }

// function print() {
//   return p === nCopy;
// }
// print()

// if (p === nCopy) {
//   return true;
// } else {
//   return false;
// }

function isPalindrome(num) {
  let original = num;
  let reversed = 0;

  while (num > 0) {
    let r = num % 10;
    reversed = reversed * 10 + r;
    num = Math.floor(num / 10);
  }

  return reversed === original;
}

console.log(isPalindrome(3434)); // false
console.log(isPalindrome(1221)); // true
