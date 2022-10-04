// we are writing a function countBs that takes a string as its
// only argument and returns a number that indicates how many uppercase "B"
// characters there are in the string.
// Then write a function countChar that behaves like countBs, but it takes
// a second argument that indicates the character that is to be counted

const countBs = (string) => {
  bCount = 0;
  for (i = 0; i < string.length -1; i++) {
    if (string[i] === "B") {
      bCount++;
    }
  };
  return console.log(bCount);
};

countBs("The Baby ran past the big barn"); // this should return only 1

const countChar = (letter, string) => {
  letterCount = 0;
  for (i = 0; i < string.length - 1; i++) {
    if (string[i] === letter) {
      letterCount++;
    }
  };
  return console.log(letterCount);
};

countChar("t", "This is a test string to count t's but not T"); // this should return 8
