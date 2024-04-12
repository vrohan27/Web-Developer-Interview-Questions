// 1. ### Who created Javascript?

// JavaScript was created by Brendan Eich in 1995.


// 2. ### What is the difference between async/await and promises in JavaScript?

// Both async/await and Promises are used to handle asynchronous operations in JavaScript. However,
// async/await is built on top of Promises which makes asynchronous code more readable, easier to 
// write and reason about.


// 3. ### How do you handle errors in javascript?

// In JavaScript, errors can be handled using try-catch blocks. The code that might generate an error 
// is enclosed in a try block, and if an error occurs, the catch block is executed. The catch block can 
// then handle the error, such as by logging it to the console or displaying an error message to the user.


// 4. ### What is NaN in javascript?

// NaN (Not A Number) is a special value in JavaScript that represents a situation where a value is not 
// a valid number. One important thing to note is that NaN is not equal to any value, including itself.
// We can use the `isNaN()` function to check whether a value is NaN or not.


// 5. ### How do you find operating system details in javascript?

// In JavaScript, you can find the operating system details of the user by accessing the `navigator` object, 
// which contains information about the user's browser and environment.


// 6. ### What is the Document Object Model (DOM)?

// The DOM (Document Object Model) is a programming interface that represents the structure and content of an
// HTML document as a tree-like structure of nodes. It allows developers to access and manipulate the content 
// and structure of a web page using programming languages like JavaScript.


// 7. ### What is the difference between the DOM and HTML?

// HTML is a markup language used to define the structure and content of a web page, while the DOM is an 
// interface that represents that structure and content as a tree-like structure. The DOM provides a way 
// to access and manipulate the content and structure of a web page, while HTML is simply a static markup
// language.


// 8. ### What is the difference between the DOMContentLoaded event and the load event?

// The DOMContentLoaded event is fired when the initial HTML document has been completely loaded and parsed,
// while the load event is fired when all resources on the page, including images and scripts, have finished
// loading.


// 9. ### What is the difference between innerHTML and innerText?

// The main difference between `innerText` and `innerHTML` in the DOM is that `innerText` returns only the
// visible text content of an element, excluding any HTML tags, while `innerHTML` returns the complete HTML 
// content of an element, including any nested elements and tags.


// 10. ### What is the role of the Window object in the DOM?

// The Window object in the DOM represents the browser window or tab that displays the web page. 
// It provides methods and properties for controlling and manipulating the browser window.


// 11. ### What is a DOM node in JavaScript?

// A node in the DOM is a fundamental unit that represents an element, attribute, or text content in a
// web page. Every node has a relationship with other nodes, such as a parent, child, or sibling.
// The parent node contains the child nodes, and the child nodes can have siblings that share the same parent


// 12. ### How do you prevent default behavior of an event in the DOM using JavaScript?

// To prevent the default behavior of an event in the DOM using JavaScript, you can use the 
// preventDefault() method. This method is called on the event object that is passed to the 
// event handler function


// 13. ### What is event propagation?

// Event propagation in the DOM refers to how events move or flow through different elements on a webpage.
// When an event happens on an element, like a click, it can travel to its parent elements and eventually
// to the whole document. This is called event bubbling. Alternatively, events can also travel from the 
// document to the element that triggered the event, which is called event capturing.


// 14. ### What is call stack in javascript?

// The call stack in JavaScript is a data structure that stores information about the currently 
// executing functions. When a function is called, a new frame is added to the top of the stack,
// and when the function completes, its frame is removed from the stack. This helps the JavaScript 
// engine keep track of where it is in the execution of a script and manage the order in which functions
// are called.


// 15. ### What is an event loop?

// The event loop in JavaScript handles asynchronous operations by queuing them up and processing 
// them one by one in a non-blocking way. It checks the event queue continuously and processes the
// oldest operation first. When an operation is completed, its callback function is executed.


// 16. ### What is BOM?

// BOM stands for Browser Object Model. It is a set of APIs provided by the browser that allow 
// JavaScript to interact with the browser window.


// 17. ### What is the use of `setTimeOut()` in javascript?

// `setTimeout()` is a built-in function in JavaScript that allows you to schedule a function to 
// be executed after a specified amount of time has elapsed.


// 18. ### What is the use of `setInterval()` in javascript?

// `setInterval()` is a function in JavaScript that allows you to repeatedly execute a given function
// at a specified interval. It works by calling the function repeatedly with a specified time delay 
// between each call, until the interval is cancelled.


// 19. ### What is the purpose of clearTimeout method and clearInterval?

// The clearTimeout method is a built-in function in JavaScript that is used to cancel
// a timer created by the setTimeout function and clearInterval method is a built-in function
// in JavaScript that is used to cancel a recurring timer created by the setInterval function.


// 20. ### How do you redirect new page in javascript?

//      To redirect to a new page using JavaScript, you can use the `window.location` object's `assign`
//       or `replace` methods.
//      Example:

//      ```
//      // Redirect to a new page
//      window.location.assign("https://www.example.com");

//      // Redirect to a new page and replace the current page in the browser history
//      window.location.replace("https://www.example.com");
//      ```


// 21. ### What is a JavaScript object?

// JavaScript object is a non-primitive data-type that allows you to store multiple collections of data. 
// It is a container of key-value pairs in which value may be a variable, function or object itself.


// 22. ### What is the difference between dot notation and bracket notation when accessing 
// properties of an object?

// Dot Notation only allows static keys while Bracket Notation accepts dynamic keys. 
// Static key here means that the key is typed directly, while Dynamic key here means
//  that the key is evaluated from an expression.


// 23. ### What is an object literal in javascript?

// Object literal is a syntax for creating object in javascript in which property and method are inside 
// of curly braces separated by comma. We assign a variable to an object in object literal.


// 24. ### How would you clone an object in JavaScript?

//      There are four ways to clone an object in javascript. They are:

//      1. Use the spread operator.
//      2. Call the Object.assign() function.
//      3. Use JSON parsing.
//      4. Use the structuredClone() function.

//      ```
//      const data = { name: "Alice", age: 26 }
//      // 1
//      const copy1 = { ...data }
//      // 2
//      const copy2 = Object.assign({}, data)
//      // 3
//      const copy3 = JSON.parse(JSON.stringify(data))
//      // 4
//      const copy4 = structuredClone(data)



// 25. ### What is a JSON?
// JavaScript Object Notation (JSON) is a standard text-based format for representing structured data based 
// on JavaScript object syntax. It is commonly used for transmitting data in web applications .






