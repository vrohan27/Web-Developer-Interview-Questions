// 1. ### What is javascript?

// JavaScript is a programming language used to create interactive and dynamic web pages, as well as to create 
// more complex applications on the client and server side.


// 2. ### What is the difference between null and undefined in JavaScript?

// Null represents a deliberate non-value or absence of any object value, while undefined represents a lack of
// value or an uninitialized variable.


// 3. ### What is the difference between == and === in JavaScript?

// The double equals (==) compares the value of two variables, while the triple equals (===) compares both the
// value and the data type of two variables.


// 4. ### What is the difference between let, const, and var in JavaScript?

// The var keyword is used for variable declaration in older versions of JavaScript, while let and const were 
// introduced in ES6. Var has a function-level scope, while let and const have block-level scope. Additionally, 
// const variables cannot be reassigned after being declared, while let variables can be.


// 5. ### How do you convert a string to a number in JavaScript?
// You can use the `Number()` or `parseFloat()` functions to convert a string to a number in JavaScript.


// 6. ### What is the purpose of the array slice method?

// The `slice()` method returns the selected elements in an array as a new array object. It selects the elements 
// starting at the given start argument, and ends at the given optional end argument without including the last
// element.


// 7. ### What is the purpose of the array splice method?

// The `splice()` is an array method in JavaScript that allows you to modify an array by adding, removing,
// or replacing elements. It takes two required parameters: the index at which to start making changes to 
// the array, and the number of elements to remove. It also has an optional parameter for adding one or 
// more elements to the array.


// 8. ### What is the difference between slice and splice?

//      | slice                                        |                     splice                      |
//      | -------------------------------------------- | :---------------------------------------------: |
//      | Doesn't modify the original array(immutable) |      Modifies the original array(mutable)       |
//      | Returns the subset of original array         |      Returns the deleted elements as array      |
//      | Used to pick the elements from array         | Used to insert or delete elements to/from array |



// 9. ### What are arrow function?

// Arrow functions are a shorthand syntax for writing function expressions in JavaScript. They use the `=>`
// syntax to separate the function parameters from the function body and have a concise syntax that makes 
// them ideal for writing short, one-liner functions.


// 10. ### What are first class function?

// First-class functions means when functions in that language are treated like any other variable. This 
// means that functions can be assigned to variables, passed as arguments to other functions, and returned
// from functions.


// 11. ### What is a pure function?

// A pure function is a function that, given the same input, will always return the same output and does not 
// have any observable side effect.


// 12. ### What is the scope chain in JavaScript?

// The scope chain is how Javascript looks for variables. When looking for variables through the nested 
// scope, the inner scope first looks at its own scope.


// 13. ### What is a higher order function?

// A higher-order function is a function that takes one or more functions as arguments and/or returns a 
// function as its result.


// 14. ### What is hoisting?

// Hoisting is a behavior in JavaScript where variable and function declarations are moved to the top of
// their respective scopes during compilation or interpretation, before the code is actually executed.
// This means that you can use a variable or function before it has been declared, but only if it is 
// declared using the `var` or `function` keywords. However, only the declarations themselves are hoisted, 
// not their values or assignments.


// 15. ### What are modules in javascript?

// Modules are a way of organizing code into separate files or components that can be reused in different 
// parts of an application. Modules allow you to encapsulate data and functionality, making your code more 
// organized and easier to maintain.


// 6. ### What is a closure in JavaScript?

// In JavaScript, a closure is created when a function is defined inside another function and the inner 
// function is returned from the outer function. The inner function has access to the variables in the 
// outer function, even after the outer function has returned.

// ```
//      function outer() {
//        var name = "John";
//        function inner() {
//          console.log("Hello " + name);
//        }
//        return inner;
//      }

//      var greeting = outer();
//      greeting(); // Output: "Hello John"
//      ```


// 17. ### What is callback in JavaScript?

// A callback is a function that is passed as an argument to another function and is intended to be called
// when the first function has completed its task. The primary use of callbacks in JavaScript is to handle
// asynchronous operations, such as making an AJAX request or waiting for a user to click a button.


// 18. ### What is a callback hell in javascript?

// Callback hell is a term used to describe a situation where multiple callbacks are nested within one another,
// making the code difficult to read, debug, and maintain. It often arises when dealing with asynchronous
// operations, such as making HTTP requests or working with databases.



// 19. ### What is memoization?

// Memoization is a technique used in computer science to speed up the execution of functions by caching 
// the results of expensive function calls and returning the cached result when the same inputs occur again.


// 20. ### What is the purpose of the "use strict" statement in JavaScript?
     
// The "use strict" statement is used to enable strict mode in JavaScript, which helps to prevent common 
// errors and make the code more secure. It prevents things like use of undeclared variable, use of 
// keywords as variable name, using duplicate property names in objects, etc.


// 21.  ### What is a cookie in javascript?

// A cookie is a small data file that a website stores on a user's computer or device. Cookies are commonly
// used to remember user preferences and login information, and to track user activity on a website. Cookies 
// can also have an expiration date, after which they are automatically deleted.


// 22.  ### What are the differences between cookie, local storage and session storage?

//       | Feature                           | Cookie                             | Local storage    | Session storage     |
//       | --------------------------------- | ---------------------------------- | ---------------- | ------------------- |
//       | Accessed on client or server side | Both server-side & client-side     | client-side only | client-side only    |
//       | Lifetime                          | As configured using Expires option | until deleted    | until tab is closed |
//       | SSL support                       | Supported                          | Not supported    | Not supported       |
//       | Maximum data size                 | 4KB                                | 5 MB             | 5MB                 |



// 23.  ### What is AJAX?

// AJAX (Asynchronous JavaScript and XML) is a technique to create more dynamic and interactive web pages.
// It allows a web page to update content without requiring the page to reload. With AJAX, data is sent to 
// and from the server in the background, using JavaScript and other data formats like JSON. This makes web
// applications more seamless and responsive, providing users with a faster and more engaging browsing
// experience.


// 24.  ### What is the difference between synchronous and asynchronous code in JavaScript?

// synchronous code executes tasks in sequence and waits for each task to complete before moving on,
//  while asynchronous code can execute multiple tasks simultaneously and doesn't wait for them to 
//  complete before moving on to the next task.


// 25.  ### What are promises in JavaScript?

// Promises in JavaScript are a way of handling async operations. They help us write async code that looks and 
// behaves like sync code, making it easier to read and maintain. Promises have three states: pending, fulfilled,
// and rejected.