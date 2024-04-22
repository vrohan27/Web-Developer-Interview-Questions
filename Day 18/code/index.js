// You are given an array of integers representing the prices of a stock on different days. Write a JavaScript 
// function to calculate the maximum profit that can be obtained by buying and selling the stock once.

// The buying price must be before the selling price.

// Constraints:

// The array will contain at least two elements.
// Each element represents the price of the stock on a specific day.
// Example:
// Input: [7, 1, 5, 3, 6, 4]
// Output: 5


function maxProfit(prices) {
    // Initialize variables to track the minimum price seen so far and the maximum profit
    let minPrice = Infinity; // Start with a very large value for minPrice
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
console.log(maxProfit(prices)); // Output: 5
