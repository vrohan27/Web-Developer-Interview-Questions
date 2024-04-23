// You are given an array of integers representing the amount of money in your account at the end of each day.
//  Write a JavaScript function to find the maximum amount of money you can have after performing at most 
//  one transaction (buying one item and selling it later), with the constraint that you must sell the 
//  item before buying another one.

// Constraints:

// The array will contain at least two elements.
// Each element represents the amount of money in your account at the end of a day.

// Example:
// Input: [7, 1, 5, 3, 6, 4]
// Output: 5


function maxProfitSingleTransaction(prices) {
    // Initialize variables to track the minimum price seen so far and the maximum profit
    let minPrice = Infinity; 
    let maxProfit = 0;

    // Iterate through the prices array
    for (let i = 0; i < prices.length; i++) {
        // Update minPrice if the current price is lower than the minimum price seen so far
        minPrice = Math.min(minPrice, prices[i]);

        // Calculate the potential profit if the stock is sold on the current day
        // Update maxProfit if selling the stock on the current day results in a higher profit
        maxProfit = Math.max(maxProfit, prices[i] - minPrice);
    }

  
    return maxProfit;
}


let prices = [7, 1, 5, 3, 6, 4];
console.log(maxProfitSingleTransaction(prices)); // Output: 5
