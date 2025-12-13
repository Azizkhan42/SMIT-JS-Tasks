function reverseArrayUsingReverse(arr) {
  return arr.reverse();
}

// Example
console.log(reverseArrayUsingReverse([1, 2, 3, 4, 5]));
// Output: [5, 4, 3, 2, 1]


function reverseArrayUsingToReversed(arr) {
  return arr.toReversed();
}

// Example
console.log(reverseArrayUsingToReversed([1, 2, 3, 4, 5]));
// Output: [5, 4, 3, 2, 1]


function reverseArrayUsingLoop(arr) {
  let reversed = [];

  for (let i = arr.length - 1; i >= 0; i--) {
    reversed.push(arr[i]);
  }

  return reversed;
}

// Example
console.log(reverseArrayUsingLoop([1, 2, 3, 4, 5]));
// Output: [5, 4, 3, 2, 1]
