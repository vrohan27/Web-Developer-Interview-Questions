// You are given an array of integers. Write a JavaScript function to find the maximum subarray sum, 
// where a subarray is defined as a contiguous block of elements within the array.

// Example:
// Input: [-2, 1, -3, 4, -1, 2, 1, -5, 4]
// Output: 6

// In this example, the maximum subarray sum is obtained from the subarray [4, -1, 2, 1], with a sum of 6.

function maxSubarraySum(nums) {
    
    let currentSum = 0;
    let maxSum = -Infinity; // Start with a very small value for maxSum

    // Iterate through the array
    for (let num of nums) {
        // Update currentSum by adding the current number
        // If currentSum becomes negative, reset it to 0 (start a new subarray)
        currentSum = Math.max(num, currentSum + num);
        
        // Update maxSum if currentSum is greater than maxSum
        maxSum = Math.max(maxSum, currentSum);
    }

    // Return the maximum sum
    return maxSum;
}


let nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
console.log(maxSubarraySum(nums)); // Output: 6
