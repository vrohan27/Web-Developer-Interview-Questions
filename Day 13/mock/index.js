// 1. ### What is nullish coalescing operator (??)?

// It is a logical operator that returns its right-hand side operand when its left-hand side operand is null
// or undefined, and otherwise returns its left-hand side operand. This can be contrasted with the logical
// OR (||) operator, which returns the right-hand side operand if the left operand is any falsy value, not 
// only null or undefined.
//      ```
//      console.log(null ?? true); // true
//      ```


// 2. ### How do you get the status of a checkbox with javascript?

// You can apply the checked property on the selected checkbox in the DOM. If the value is true it means the 
// checkbox is checked, otherwise it is unchecked. For example, the below HTML checkbox element can be access 
// using javascript as below:

//      ```
//      console.log(document.getElementById(‘checkbox_name’).checked); // true or false
//      ```


// 3. ### What is the purpose of double tilde operator?

// The double tilde operator(~~) is known as double NOT bitwise operator. This operator is a slightly 
// quicker substitute for Math.floor().


// 4. ### What are the different ways to debug JavaScript code?

// To debug JavaScript code, you can use console.log() statements to print values and messages to the 
// console, browser developer tools for breakpoints, stepping through code, and variable inspection, 
// the debugger statement to trigger breakpoints, exception handling to catch and log errors, linters
// and code analyzers to detect potential issues, and remote debugging for debugging code running in 
// a different environment.



// 5. ### What are the different ways to optimize JavaScript code?

// To optimize JavaScript code, you can combine and minify files, minimize global variables, optimize 
// loops and conditionals, use efficient data structures and algorithms, cache data, leverage 
// asynchronous programming, and optimize DOM manipulation.


// 6. ### What is the difference between undeclared & undefined?

// Undeclared variables are those that do not exist in a program and are not declared. 
// If the program tries to read the value of an undeclared variable, then a runtime error is encountered. 
// Undefined variables are those that are declared in the program but have not been given any value. 
// If the program tries to read the value of an undefined variable, an undefined value is returned.


// 7. ### What would be the result of 2+5+”3″?

//Since 2 and 5 are integers, they will be added numerically. And since 3 is a string, its concatenation
// will be done. So the result would be 73. The ” ” makes all the difference here and represents 3 as a 
// string and not a number.


//8. ### What is statically typed and dynamically typed language and is javascript a statically 
// typed or a dynamically typed language?

//Dynamically-typed languages perform type checking at runtime, while statically typed languages 
// perform type checking at compile time.Javascript is a dynamically typed language.


// 9. ### What is function currying?

//Function currying is a process in which we convert a function with multiple parameters to a chain 
// of functions with a single parameter.

//      ```
//           // Normal function
//      function sum(a, b) {
//      	return a + b;
//      }

//      // Curried function
//      function currySum(a) {
//      	return function (b) {
//      		return a + b;
//        }
//      }
//      ```

// 310. ### What does delete do in JavaScript?
//      The `delete` operator is used for deleting an object’s property or key.


//11. ### What is control flow function?

//A control flow function in JavaScript refers to a function that controls the flow of execution 
// within a program, particularly when dealing with asynchronous operations.


//12. ### How does control flow function in js play a role in asynchronous operation in javascript?

//Control flow functions provide mechanisms to coordinate and handle asynchronous operations, 
// ensuring that certain actions occur before or after others. They help to maintain the desired 
// order and synchronization in asynchronous code.


//13. ### Can you access DOM in nodejs?

//No, you cannot directly access the DOM in Node.js. Node.js is a runtime environment for running 
// JavaScript outside of web browsers, and it does not have a built-in DOM implementation.


// 14. ### How can you share code between files?

//In the client-side/browser environment, if variables and functions are declared in the global
// scope (window), they can be accessed and shared by all scripts on the page. This is often referred
// to as the global scope or global namespace.


//15. ### What does the `instanceof` operator do?

//      The `instanceof` operator checks whether the prototype property of a constructor appears anywhere in the prototype chain of an object. In other words, the `instanceof` operator checks if the object is an instance of a class or not at run time.

//      ```
//      class Person {
//        constructor(name) {
//          this.name = name;
//        }
//      }

//      const john = new Person("John");

//      console.log(john instanceof Person); // Output: true
//      console.log(john instanceof Object); // Output: true (all objects inherit from Object)

//      const str = "Hello";
//      console.log(str instanceof String); // Output: false (str is a primitive string,
//      not an instance of the String constructor)
//      ```


// 16. ### What are the drawbacks of prototypal inheritance?

//Prototypal inheritance also has some drawbacks. First, it can be more difficult to understand 
// than class-based inheritance. Second, it can be more difficult to debug. Third, it can be more 
// difficult to test.


// 17. ### What are some common problems that you encounter when using regular expressions?

//When using regular expressions, common problems include incorrect pattern matching, performance 
// issues with large data or complex patterns, difficulty in readability and maintenance, and the risk 
// of overfitting the problem at hand.


//18. ### What are the limitations of using the "var" keyword in JavaScript?

//The "var" keyword in JavaScript has limitations. Variables declared with "var" are function-scoped, 
// accessible throughout the entire function. It lacks block-level scoping, leading to confusion and 
// unintended side effects. Additionally, "var" doesn't prevent variable redeclaration within the same 
// scope, risking inadvertent overwriting.



// 319. ### What are the limitations of using the "this" keyword in JavaScript?

//The "this" keyword in JavaScript has limitations. Its value depends on the function invocation,
//  leading to confusion and unexpected behavior. In arrow functions, "this" behaves differently, being 
//  lexically scoped. When using "this" in a constructor function without the "new" keyword, it refers to 
//  the global object instead of creating a new instance.



// 320. ### What are the drawbacks of using the "delete" operator in JavaScript?

//The "delete" operator in JavaScript has drawbacks. It can be slow and impact performance when 
// deleting object properties. It does not affect the prototype chain, leading to unexpected behavior. 
// It also cannot delete variables or functions declared with "var" or "function" keywords.


// 21. ### What are the advantages of using closures in JavaScript?

// Closures in JavaScript allow for encapsulation, data privacy, and the creation of private variables 
// and functions that are inaccessible from the outside scope.


// 22. ### How does the concept of prototypal inheritance benefit JavaScript developers?

// Prototypal inheritance in JavaScript allows objects to inherit properties and methods from other objects,
// promoting code reuse and reducing memory consumption.


// 23. ### How does using template literals in JavaScript improve string manipulation and concatenation 
// compared to traditional methods?

// Template literals in JavaScript allow for easier string interpolation, multiline strings, and dynamic
// content embedding, enhancing readability and reducing string manipulation complexities.


// 24. ### What are the advantages of using the fetch API over traditional XMLHttpRequest for making 
// HTTP requests in JavaScript?

// The fetch API offers a simpler and more modern way to make asynchronous HTTP requests, providing better 
// error handling, support for promises, and the ability to handle various data formats.



// 25. ### Can you explain the benefits of using the "this" keyword and how it differs in different 
// contexts in JavaScript?
// The "this" keyword in JavaScript allows objects to refer to their own properties and methods 
// dynamically, adapting to different execution contexts and enabling code reusability.


