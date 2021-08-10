//This returns the possible combination of numbers to form the target sum
const howSum = (targetSum, numbers, memo = {}) => {
  if (targetSum in memo) return memo[targetSum];
  if (targetSum === 0) return [];
  if (targetSum < 0) return null;

  for (let num of numbers) {
    const remainder = targetSum - num;
    const remainderResult = howSum(remainder, numbers, memo); //stores the new render value to it

    if (remainderResult !== null) {
      memo[targetSum] = [...remainderResult, num]; // then this i spread the remainder result and add the new number
      return memo[targetSum];
    }
  }

  memo[targetSum] = null;
  return null;
};

console.log(howSum(50, [3, 6, 7, 9, 2, 4]));
console.log(howSum(7, [5, 2, 4]));
console.log(howSum(19, [3, 6, 9]));
console.log(howSum(100, [3, 6, 7, 9, 2, 4]));
