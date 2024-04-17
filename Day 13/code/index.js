// Problem : Palindrome Check
// You have been given a string. You have to check whether this string is 
// palindrome or not. Palindrome is a string which is the same as in reverse.


function isPalindrome(str) {
    // convert string to lowercase
    str = str.toLowerCase();
    // convert string to reverse
    var reversedStr = str.split('').reverse().join('');
    // check reverse string from orginal 
    return str === reversedStr;
}

// Testing
var testString = "madam";
console.log(isPalindrome(testString)); // Output: true
