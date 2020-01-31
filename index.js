console.log("Testing. Testing. What's good, homies??");

// Given an array, find the integer that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.
//this might help with finding the frequency https://stackoverflow.com/questions/5667888/counting-the-occurrences-frequency-of-array-elements
//a bit bummed that freq isn't a built in method. booooo!
function findOdd(A) {
  //happy coding!
  //find frequency of each number in array
  //then use %
  //if the frequency % 2 !==0 then it's odd and return that number
  A.sort();
  console.log(A);

  return 0;
}

findOdd([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5]);
findOdd([1, 1, 2, -2, 5, 2, 4, 4, -1, -2, 5]);
findOdd([10]);
