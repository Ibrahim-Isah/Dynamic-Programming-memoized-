// Say that you are a traveler on a 2D grid, you begin in the top left corner and your goal is to reach the bottom right corner. You may only move down or right
// Find the total number of ways you can travel to the bottom right

const gridTraveler = (m, n, memo = {}) => {
  const key = m + ',' + n; // The reason we are not doing the memo for the individual element because (2,3) !== (3,2)
  if (key in memo) return memo[key];
  if (m === 1 || n === 1) return 1; // this is to show that i have reached a stage i dont want to go below
  if (m === 0 || n === 0) return 0; // this is to show that when one of the point is zero it implies that a grid cannot even exists
  memo[key] = gridTraveler(m - 1, n, memo) + gridTraveler(m, n - 1, memo); //This is where the main work happens
  return memo[key];
};

console.log(gridTraveler(5, 4));
console.log(gridTraveler(8, 7));
console.log(gridTraveler(3, 2));
