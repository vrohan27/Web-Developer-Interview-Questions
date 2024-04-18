// You are given an array of integers. Write a JavaScript function to find the maximum and minimum 
// elements in the array.

// Constraints:
// The array may contain both positive and negative integers.
// The array may be empty.

// Example:
// Input: [3, 8, -4, 10, 5]
// Output: Maximum: 10, Minimum: -4

// Input: []
// Output: Maximum: undefined, Minimum: undefined



// solution:
function findMinMax(arr) {
    // Check if the array is empty
    if (arr.length === 0) {
        return { Maximum: undefined, Minimum: undefined }; // Return undefined for both maximum and minimum
    }

    // Initialize maximum and minimum variables with the first element of the array
    let max = arr[0];
    let min = arr[0];

    // Iterate through the array starting from the second element
    for (let i = 1; i < arr.length; i++) {
        // Update maximum if current element is greater than current maximum
        if (arr[i] > max) {
            max = arr[i];
        }
        // Update minimum if current element is smaller than current minimum
        else if (arr[i] < min) {
            min = arr[i];
        }
    }

    // Return an object containing maximum and minimum elements
    return { Maximum: max, Minimum: min };
}

// Test the function
let arr1 = [3, 8, -4, 10, 5];
console.log(findMinMax(arr1)); // Output: { Maximum: 10, Minimum: -4 }

let arr2 = [];
console.log(findMinMax(arr2)); // Output: { Maximum: undefined, Minimum: undefined }
