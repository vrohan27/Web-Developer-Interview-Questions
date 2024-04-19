// You are given an array of integers and a target sum. Write a JavaScript function to find two numbers in
// the array that add up to the target sum. Return the indices of the two numbers in the array.

// If no such pair exists, return null.

// Constraints:

// Each input array will have at least two elements.
// Each input array will have exactly one pair of numbers that add up to the target sum.
// The same element cannot be used twice to form a pair.

// arr = [2, 7, 11, 15];
// targetSum = 9;

// Output: [0, 1] // Because arr[0] + arr[1] = 2 + 7 = 9



function findTwoSum(arr, targetSum) {
    // Create an empty object to store the elements of the array as keys and their indices as values
    const numIndices = {};

    // Iterate through the array
    for (let i = 0; i < arr.length; i++) {
        // Calculate the difference between the target sum and the current element
        const difference = targetSum - arr[i];
        
        // If the difference exists in the numIndices object, it means we found a pair
        if (numIndices[difference] !== undefined) {
            // Return the indices of the current element and the difference
            return [numIndices[difference], i];
        }

        // Otherwise, store the current element and its index in the numIndices object
        numIndices[arr[i]] = i;
    }

    // If no pair is found, return null
    return null;
}

// Test the function
let arr1 = [2, 7, 11, 15];
let targetSum1 = 9;
console.log(findTwoSum(arr1, targetSum1)); // Output: [0, 1]



