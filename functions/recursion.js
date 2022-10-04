// Define whether a positive whole number is even or odd
// Zero is even
// One is odd
// For any other number N, its evenness is the same as N - 2
// define an isEven function corresponding to this description
// The function should accept a single parameter (positive whole number)
// and return a Boolean

const isEven = (number) => {
  if (number === 0) {
    return true;
  }
  else if (number === 1) {
    return false;
  }
  else if (number < 0) {
    return isEven(-number);
  }
  else {
    return isEven(number - 2);
  }
};

// a few tests to see what our output is
console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-10));
