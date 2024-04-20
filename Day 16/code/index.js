// You are given an array of integers representing the heights of buildings from west to east. Each 
// integer value represents the height of a building. It is guaranteed that the array has at least one 
// building, and each building's height is a positive integer.


// Write a JavaScript function to calculate how much water can be trapped between the buildings after 
// rain. Assume that the width of each building is 1 unit.

// Constraints:

// The array will contain at least one element.
// The height of each building will be a positive integer.
// Example:
// Input: [0,1,0,2,1,0,1,3,2,1,2,1]
// Output: 6


function calculateTrappedWater(heights) {
    // Initialize variables to store left and right maximum heights
    let leftMax = 0;
    let rightMax = 0;

    // Initialize variables to store total trapped water and current water level
    let totalWater = 0;
    let waterLevel = new Array(heights.length).fill(0);

    // Iterate from left to right to calculate the left maximum height for each building
    for (let i = 0; i < heights.length; i++) {
        leftMax = Math.max(leftMax, heights[i]);
        waterLevel[i] = leftMax; // Store the left maximum height at each index
    }

    // Reset left maximum height for the right-to-left traversal
    leftMax = 0;

    // Iterate from right to left to calculate the right maximum height for each building
    for (let i = heights.length - 1; i >= 0; i--) {
        rightMax = Math.max(rightMax, heights[i]);
        // Calculate the trapped water level for each building
        waterLevel[i] = Math.min(waterLevel[i], rightMax); // Store the minimum of left and right maximum heights
        // Calculate the trapped water for each building and add it to the total
        totalWater += waterLevel[i] - heights[i];
    }

    // Return the total trapped water
    return totalWater;
}


let heights = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
console.log(calculateTrappedWater(heights)); // Output: 6
