// 1. ### What is the Date object in JavaScript?

// The Date object in JavaScript represents a date and time value, which can be used to perform various 
// operations on dates and times.


// 2. ### How do you format a date in JavaScript?

// You can format a date in JavaScript using the toLocaleDateString() method of the Date object,
// which returns a string representation of the date in the specified locale.

//      ```
// let date = new Date();
// let formattedDate = date.toLocaleDateString('en-US', { month: '2-digit', day: '2-digit', year: 'numeric' });
// console.log(formattedDate); // Output: "05/14/2023"
//      ```


// 3. ### How do you compare two dates in JavaScript?

// You can compare two dates in JavaScript using the <, >, <=, >=, ==, and != operators, which
// compare the numeric values of the Date objects (i.e., their timestamps).

//      ```
//      let date1 = new Date('2023-05-14');
//      let date2 = new Date('2023-05-15');

//      if (date1 < date2) {
//        console.log('date1 is earlier than date2');
//      } else {
//        console.log('date1 and date2 are equal');
//      }
//      ```


// 4. ### How do you get the current timestamp in JavaScript?

// You can get the current timestamp in JavaScript using the `getTime()` method of the Date object, 
// which returns the number of milliseconds since January 1, 1970, 00:00:00 UTC.


// 5. ### How do you add or subtract days to a date in JavaScript?

// You can add or subtract days to a date in JavaScript using the `setDate()` method of the Date object, 
// which allows you to set the day of the month for a given date.
//      ```
//      let date = new Date();
//      date.setDate(date.getDate() + 3);
//      console.log(date); // Output: the date 3 days from now
//      ```


// 6. ### what is iterator in javascript?

// In JavaScript, an iterator is an object that provides a way to access elements of a collection or a 
// custom data structure in a sequential manner. It allows you to loop over the elements one at a time, 
// retrieving them on demand.

// The most important method is next(), which is responsible for returning the next element in the sequence. 
// When you call next() on an iterator, it returns an object with two properties: value, representing the 
// current element, and done, indicating whether there are more elements or if the iteration is complete.



// 7. ### What is decorator in javascript?

// In JavaScript, a decorator is a design pattern that allows you to modify the behavior of an object 
// or a function by wrapping it with another function. It provides a way to add new functionality or 
// modify existing functionality dynamically, without changing the original code.



// 8. ### What is babel?

// Babel is a tool that helps you write modern JavaScript code while ensuring compatibility with older 
// environments by transforming or transpiling that code into an older JavaScript version. It allows 
// developers to take advantage of new language features without worrying about browser compatibility issues.



// 9. ### What is optional chaining?

// Optional chaining is a js feature by which using the `?.` operator, you can directly access nested
// properties or call nested functions, and if any part of the chain is null or undefined, the 
// expression short-circuits and returns undefined instead of throwing an error.



// 10. ### What is throttling?

// Throttling is a technique used in JavaScript to control the rate at which a particular function or 
// code block is executed. It ensures that the function is called at a maximum frequency or a specified 
// interval, preventing it from being invoked too frequently.


// 11. ### What is debouncing?

// Debouncing in JavaScript is a way to control how often a function gets called when there are 
// frequent events happening, like typing or scrolling. This can be useful for optimizing performance 
// and avoiding unnecessary function calls.


// 12. ### What is global execution context?

// The global execution context is the default or first execution context that is created by the
// JavaScript engine before any code is executed(i.e, when the file first loads in the browser). All the
// global code that is not inside a function or object will be executed inside this global execution
// context. Since JS engine is single threaded there will be only one global environment and there
// will be only one global execution context.


// 13. ### What is function execution context?

// In JavaScript, the function execution context refers to the environment in which a function is executed 
// or called. Each time a function is invoked, a new execution context is created specifically for that
//  function. It consists of two main components: the variable environment and the scope chain.


// 14. ### What does the variable environment in JavaScript's function execution context contain,
// and what is its purpose?

// The variable environment contains all the variables, function declarations, and function arguments 
// specific to that function. It keeps track of the function's local variables and parameters, allowing 
// the function to access and manipulate them during its execution.


// 15. ### What is a scope chain in JavaScript's function execution context?

// The scope chain is a list of all the variable environments that are accessible to the function. 
// It is used to resolve variable references during the function's execution. When a variable is not
// found in the current variable environment, JavaScript looks up the scope chain to find the variable
// in outer environments until it reaches the global execution context.


// 16. ### What is Minification?

// Minification is the process of removing all unnecessary characters(empty spaces are removed) and 
// variables will be renamed without changing it's functionality.


// 17. ### How do I modify the url without reloading the page?

// The `window.location.href` property will be helpful to modify the url but it reloads the page. 
// HTML5 introduced the `history.pushState()` and `history.replaceState()` methods, which allow you 
// to add and modify history entries, respectively. Example:

//      ```
//      window.history.pushState("page2", "Title", "/page2.html");
//      ```


// 18. ### What are dynamic imports in javascript?

//Dynamic imports in JavaScript allow you to load modules or scripts dynamically at runtime, 
// instead of including them statically in the initial page load.

//      ```
//          import('module.js')
//       .then(module => {
//         // Use the imported module
//         // ...
//       })
//       .catch(error => {
//         // Handle any import errors
//         // ...
//       });
//      ```


// 19. ### What paradigm is Javascript?

// JavaScript is a multi-paradigm language, supporting imperative/procedural programming, Object-Oriented 
// Programming and functional programming. JavaScript supports Object-Oriented Programming with
// prototypical inheritance.


// 20. ### How do you empty an array?

// You can empty an array quickly by setting the array length to zero.
//      ```
//      let cities = ["Singapore", "Delhi", "London"];
//      cities.length = 0; // cities becomes []
//      ```


// 21. ### What is a lambda function?

// A lambda function, also known as an arrow function in JavaScript, is a concise and shorthand way of 
// defining a function. It uses the => arrow syntax to indicate a function, allowing for shorter and 
// more readable code.


// 12. ### What is variable shadowing in javascript?

// If there is a variable in the global scope, and you'd like to create a variable with the same name in a
// function. The variable in the inner scope will temporarily shadow the variable in the outer scope. It is
// called variable shadowing.


// 13. ### How do you assign default values to variables?

// You can use the logical or operator || in an assignment expression to provide a default value.
// The syntax looks like as below,

//      ```
//      let a = b || c;
//      ```


// 24. ### What is a rest operator in javascript?

// The rest operator in JavaScript is a special syntax that allows you to pass an indefinite number of 
// arguments to a function. It is represented by three dots ( ... ).

//      ```
//      function partyGuests(...names) {
//      console.log(names);
//      }

//      partyGuests('Alice', 'Bob', 'Charlie');
//      ```


// 25. ### What is a spread operator?

// The spread operator (`...`) is used to spread elements from an array or object into another array, 
// function call, or object literal. It allows you to unpack or expand the individual items or properties
//  from the source into a destination.
//      ```
//      const fruits = ['apple', 'banana', 'orange'];
//      const fruitSalad = ['kiwi', 'grape', ...fruits, 'melon'];
//      //fruitSalad = ["kiwi", "grape", "apple", "banana", "orange", "melon"]
//      ```


