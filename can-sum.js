// Write a function canSum(targetSum , numbers) that takes a targetSum and an array of numbers which is used to check if its possible for those numbers to sum and give you the required target Number . We are also using memoization in this too.

const canSum = (targetSum, numbers, memo = {}) => {
  if (targetSum in memo) return memo[targetSum]; // if the target sum is available just use it instead of going in a long process
  if (targetSum === 0) return true;
  if (targetSum < 0) return false;
  // This will check to see if by subtracting using the numbers in the array will give a 0, if it does it means that those numbers can form a sum of the target. But if otherwise then it will be false

  for (let num of numbers) {
    //looping through the arrays and getting the values
    const remainder = targetSum - num; // This is where we minus from the target sum and pick the new valuse of target sum
    if (canSum(remainder, numbers, memo) === true) {
      memo[targetSum] = true;
      return true;
    }
  }

  memo[targetSum] = false;
  return false;
};

console.log(canSum(15, [1, 2, 3, 4, 5]));
console.log(canSum(50, [3, 4]));
console.log(canSum(2, [3, 5, 7, 8]));
