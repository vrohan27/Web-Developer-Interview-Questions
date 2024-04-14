// 1. ### How do you add properties and methods to an object's prototype in JavaScript?

// We can add properties and methods to an object's prototype by using the constructor function's
// prototype property. To add a property, simply assign a value to a property on the prototype object.
// To add a method, define a function and assign it to a property on the prototype object.

//      ```
//      MyConstructor.prototype.myProperty = "some value";
//      ```


// 2. ### What is the difference between `Object.prototype` and `Object.__proto__` in JavaScript?

// In other words, `Object.prototype` is the object that provides default properties and methods that
// all objects in JavaScript inherit from. On the other hand, `Object.__proto__` is the object that
// the `Object` constructor itself inherits from, and it provides the properties and methods that
// are specific to the `Object` constructor.


// 3. ### How do you check if an object inherits from a specific prototype in JavaScript?

// We can check if an object inherits from a specific prototype by using the `isPrototypeOf()` method.
// This method can be called on a prototype object to check if it appears anywhere in the prototype chain 
// of another object. If the prototype object does appear in the prototype chain of the other object, 
// `isPrototypeOf()` will return `true`. Otherwise, it will return `false`.

//      ```
//      // Check if person inherits from the Object.prototype
//      console.log(Object.prototype.isPrototypeOf(person)); // Outputs true if it inherits or else false
//      ```



// 4. ### How do you override a method in an object's prototype in JavaScript?

// We can override a method in an object's prototype by redefining the method on the prototype. 
// To do this, you simply assign a new function to the existing property on the prototype. When
// you do this, any objects that were created using the constructor function whose prototype 
// you are modifying will now have the new version of the method available to them.



// 5. ### What is the difference between Object.create() and new Object() in JavaScript?

// The main difference between `new Object()` and `Object.create()` is that `new Object()` creates 
// a new object from scratch, while `Object.create()` creates a new object that inherits from 
// an existing object.


// 6. ### What is a regular expression(regex)?

// A regular expression, or regex for short, is a set of characters that form a pattern. This pattern
// is used to search for and match specific sequences of text.


// 7. ### What is the difference between a regular expression and a string?

// A regular expression is a pattern used to match against a string. A string is simply a sequence
// of characters.


// 8. ### What is the syntax for creating a regular expression pattern?

//      The syntax for creating a regular expression pattern consists of a combination of characters,
//  special characters, and operators that define the pattern to match.

//      ```
//      // Define the regex pattern
//      const pattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/;
//      ```


// 9. ### What is a character class in regular expressions?

//      A character class in regular expressions is a set of characters that can be matched
//  in a single position in the text. It is denoted by enclosing the characters in square brackets [].

//      ```
//      // Define the regex pattern using a character class
//      const pattern = /[aeiou]/;



// 10. ### What is the difference between the asterisk () and the plus sign (+) in regular expressions?

// In regular expressions, the asterisk (\*) matches zero or more occurrences of the preceding character,
// while the plus sign (+) matches one or more occurrences of the preceding character.

// For example, if we want to match the letter "a" followed by zero or more "b" characters, we would use 
// the asterisk in our regular expression like this: /ab\*/. This would match strings like "a", "ab", "abb",
//  "abbb", and so on.

// On the other hand, if we want to match the letter "a" followed by one or more "b" characters, 
// we would use the plus sign in our regular expression like this: /ab+/



// 11. ### How do you use the question mark (?) in regular expressions?

// The question mark (?) is a metacharacter used in regular expressions to indicate that the preceding 
// character or group of characters is optional. It means that the preceding character or group of 
// characters may appear zero or one time. For example, the regular expression "colou?r" will match both 
// "color" and "colour".


// 12. ### What is the purpose of backslashes () in regular expressions?

// Backslashes () are used in regular expressions to indicate that the following character has a special
// meaning. For example, the regular expression "\d" matches any digit character, while the regular
// expression "\s" matches any whitespace character. If you want to match a literal backslash character, 
// you need to escape it by using two backslashes (\).


// 13. ### How do you specify a range of characters in a character class?

// In a character class, you can specify a range of characters by using a hyphen (-) between two 
// characters. For example, the regular expression "[a-z]" matches any lowercase letter from "a" 
// to "z". Similarly, the regular expression "[0-9]" matches any digit character from "0" to "9".
// Note that the range is inclusive, so the characters at both ends are included in the match.



// 14. ### What is the difference between a greedy and a non-greedy match in regular expressions?

// In regular expressions, a greedy match will match as much as possible while still allowing the 
// overall pattern to match. A non-greedy match, on the other hand, will match as little as possible
//  while still allowing the overall pattern to match. Greedy matching is the default behavior in most 
//  regex engines. To make a match non-greedy, you can use the question mark (?) after the quantifier. 
//  For example, the regular expression ".\*?" will match as few characters as possible.


// 15. ### How do you use the pipe (|) operator in regular expressions?
// The pipe (|) operator is used in regular expressions to match either one pattern or another.
// For example, the regular expression "cat|dog" will match either "cat" or "dog". You can also use 
// parentheses to group patterns together when using the pipe operator. For example, the regular 
// expression "(red|green|blue) car" will match "red car", "green car", or "blue car".


// 16. ### What is the purpose of the caret (^) and dollar sign ($) characters in regular expressions?

// The caret (^) and dollar sign ($) characters in regular expressions are used to match the beginning
// and end of a string, respectively.


// 17. ### What are some common use cases for regular expressions?

// Common use cases for regular expressions include text parsing, search and replace operations, and input 
// validation.


// 18. ### How do you match a specific number of characters in a regular expression?

// To match a specific number of characters in a regular expression, you can use quantifiers such as {n} 
// to match exactly n occurrences of a pattern, or {n,m} to match between n and m occurrences.


// 19. ### How do you match a specific character that has a special meaning in a regular expression?

// To match a specific character that has a special meaning in a regular expression, you can use an
// escape character () before the special character.


// 20. ### How do you use lookarounds in regular expressions?

// Lookarounds in regular expressions allow you to look ahead or behind the current position in the string
// without including the matched text in the result. Positive lookaheads (?=) and negative lookaheads (?!),
// as well as positive lookbehinds (?<=) and negative lookbehinds (?<!), are the four types of lookarounds
// that can be used.



// 21. ### What is the `window.location` object in JavaScript?

// The `window.location` object is a built-in object in JavaScript that contains information about the 
// current URL of the webpage. It is a property of the global `window` object and provides several 
// properties and methods to work with URLs.


// 22. ### What are the properties of the `window.location` object?

//      Some of the properties of the window.location object are:

//      `href` : returns the entire URL of the current page <br/>
//      `protocol` : returns the protocol of the URL (http:, https:, etc.) <br/>
//      `host` : returns the hostname and port number of the URL <br/>
//      `hostname` : returns the hostname of the URL <br/>
//      `port` : returns the port number of the URL <br/>
//      `pathname` : returns the path and filename of the URL <br/>
//      `search` : returns the query string of the URL <br/>
//      `hash` : returns the anchor part of the URL <br/>


// 23. ### How do you redirect to another page using JavaScript's `window.location` object?

// We can redirect to another page using the `assign()` method of the `window.location` object.

//      ```
//           window.location.assign("https://www.google.com");



// 24. ### How do you reload the current page using JavaScript's `window.location` object?

//      You can reload the current page using the reload() method of the window.location object.

//      ```
//      window.location.reload();
//      ```


// 25. ### How do you get the value of a query parameter from the URL using JavaScript's `window.location` object?

// You can get the value of a query parameter from the URL using the `searchParams` property of the 
// `window.location ` object. For example, to get the value of a query parameter named `id`.
//      ```
//      const id = new URLSearchParams(window.location.search).get("id");
//      ```

