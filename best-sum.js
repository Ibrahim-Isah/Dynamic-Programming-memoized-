//Best sum returns an array with the shortest possible combination that gives the target Number

const bestSum = (targetSum, numbers, memo = {}) => {
  if (targetSum in memo) return memo[targetSum];
  if (targetSum === 0) return [];
  if (targetSum < 0) return null;

  let shortestCombination = null;

  for (let num of numbers) {
    const remainder = targetSum - num;
    const remainderCombination = bestSum(remainder, numbers, memo);
    if (remainderCombination !== null) {
      const combination = [...remainderCombination, num];
      if (
        shortestCombination === null ||
        combination.length < shortestCombination
      ) {
        shortestCombination = combination;
      }
    }
  }

  memo[targetSum] = shortestCombination;
  return shortestCombination;
};

console.log(bestSum(50, [2, 5, 10, 4]));
console.log(bestSum(7, [5, 6, 3, 2, 4]));
console.log(bestSum(19, [3, 5, 7, 9]));
console.log(bestSum(100, [5, 6, 7, 9, 10, 4]));
