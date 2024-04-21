// You are given an array of integers representing the grades of students in a class. Write a JavaScript 
// function to calculate the average grade of the class.

// Constraints:

// The array may contain positive integers representing grades ranging from 0 to 100.
// The array will contain at least one element.
// Example:
// Input: [85, 90, 92, 88, 78]
// Output: 86.6


function calculateAverageGrade(grades) {
    // Initialize variable to store the sum of grades
    let sum = 0;

    for (let i = 0; i < grades.length; i++) {
        sum += grades[i]; // Add each grade to the sum
    }
    // Calculate the average grade by dividing the sum by the number of grades
    const average = sum / grades.length;
    return Math.round(average * 10) / 10; 
}

// Testing
let grades = [85, 90, 92, 88, 78];
console.log(calculateAverageGrade(grades)); 
// Output: 86.6
