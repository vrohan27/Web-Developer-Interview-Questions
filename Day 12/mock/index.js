// 1. ### Why would you use something like the load event? Does this event have disadvantages? 
// Do you know any alternatives, and why would you use those?

// The `load` event fires at the end of the document loading process. At this point, all of the objects 
// in the document are in the DOM, and all the images, scripts, links and sub-frames have finished loading.

// The DOM event `DOMContentLoaded` will fire after the DOM for the page has been constructed, but do not
// wait for other resources to finish loading. This is preferred in certain cases when you do not need the 
// full page to be loaded before initializing.


// 2. ### What's the difference between Native objects and Host objects?

// Native objects are objects that are part of the JavaScript language defined by the ECMAScript 
// specification, such as String, Math, RegExp, Object, Function, etc on the other hand, the host objects
// are provided by the runtime environment (browser or Node), such as window, XMLHTTPRequest, etc.


// 3. ### What's a typical use case for anonymous functions?

// Anonymous functions are functions that are not bound to a name. They are often used as inline functions,
// or as arguments to other functions. One typical use case for anonymous functions is as callback functions.


// 4. ### What is negative Infinity?

// Negative Infinity is a number in JavaScript which can be derived by dividing negative number by zero.


// 5. ### What is the data type of variables in JavaScript?

// All variables in JavaScript are object data types.


// 6. ### What is the difference between a prototype and an instance?

// A prototype is a blueprint for creating objects. An instance is an object that is created from a 
// prototype. Instances inherit properties and methods from their prototypes.


// 7. ### What is a function expression?

// A function expression in JavaScript is a way to define a function by assigning it to a variable. 
// Instead of using the traditional function declaration syntax, a function expression involves creating 
// an anonymous function that can be stored in a variable.


// 8. ### What is the difference between a module and a library?

// A module is a self-contained unit of code that can be imported into another program. A library is a 
// collection of modules that can be used to perform a specific task. Modules are typically used to 
// organize code and make it easier to reuse, while libraries are typically used to provide functionality
// that is not available in the core language.


// 9. ### How are JavaScript and ECMA Script related?

// ECMA Script is like rules and guidelines, while Javascript is a scripting language used for web development.


// 10. ### What are the different ways to delete a variable in JavaScript?

//      We can delete a variable and remove it from memory in the following ways:

//      1. Using the `delete` keyword:

//         ```
//         let x = 10;
//         console.log(x); // Output: 10

//         delete x;
//         console.log(x); // Output: 10 (variable still exists but with no value)
//         ```

//      2. Setting the variable to `undefined` or `null`:

//         ```
//         let x = 10;
//         console.log(x); // Output: 10

//         x = undefined;
//         console.log(x); // Output: undefined
//         ```

//      3. Using a block scope with `let` or `const`:

//         ```
//         //Variables declared with let or const within a block scope will automatically be removed
//         // from memory once the block is exited.
//         {
//         let x = 10;
//         console.log(x); // Output: 10
//         }

//         console.log(x); // Output: ReferenceError: x is not defined
//         ```


// 11. ### What are the different types of errors in JavaScript?

// There are three types of errors:

// 1. Load time errors: Errors that come up when loading a web page, like improper syntax errors, 
// are known as Load time errors and generate the errors dynamically.
// 2. Runtime errors: Errors that come due to misuse of the command inside the HTML language.
// 3. Logical errors: These are the errors that occur due to the bad logic performed on a function with
//  a different operation.


// 12. ### What is the use of the blur function?

// In JavaScript, the `blur()` function is used to remove the focus from a specific element on a web page. 
// When an element has focus, it typically means that it is selected or ready to receive user input, such 
// as when a user clicks on an input field or a button.


// 13. ### What is the difference between an alert box and a confirmation box?

// An alert box is a simple message box with an OK button for displaying information, while a confirmation 
// box allows users to confirm or cancel an action with OK and Cancel buttons respectively. The alert box
// is non-interactive and pauses code execution until closed, whereas the confirmation box returns a 
// boolean value indicating the user's choice and doesn't halt code execution.


// 14. ### What is `prompt()` in javascript?

// `prompt()` is a built-in JavaScript function that displays a dialog box to the user with a message,
// an input field, and OK/Cancel buttons. It allows the user to input data, which can then be captured 
// and used in JavaScript code. The `prompt()` function halts the code execution until the user enters 
// a value and clicks OK or cancels the dialog. If the user clicks OK, the entered value is returned as
// a string. If the user cancels or closes the dialog, the function returns null.


// 15. ### When to Use Internal and External JavaScript Code?

// If you have only a few lines of code that is specific to a particular webpage. In that case,
// it is better to keep your JavaScript code internal within your HTML document. On the other hand, 
// if your JavaScript code is used in many web pages, you should consider keeping your code in a separate
// file.If your code is too long, it is better to keep it in a separate file. This helps in easy debugging.


// 16. ### What is npm?

// NPM(Node Package Manager) is a helpful tool for developers that makes working with JavaScript easier. 
// It's like a big library where they can find ready-to-use code and easily add it to their own projects.
//  It is also the name of the command line package manager used to interact with npm.


// 17. ### What is the name of the file which npm uses to identify the project and its dependencies?

// The file that npm uses to identify the project and its dependencies is called "package.json". 
// It serves as a configuration file where developers can specify information about their project,
// such as its name, version, and dependencies on external packages.


// 18. ### What is the difference between dependencies and devDependencies?

// Both are defined in the `package.json`. dependencies lists the packages that the project is 
// dependent on. devDependencies lists the dependencies which are only required during testing
// and development.


// 19. ### What is a non-blocking function?

// A non-blocking function, also known as an asynchronous function, is a type of function that does 
// not block the execution of other code while it is running. Instead of waiting for the function to
// complete before moving on to the next task, non-blocking functions allow the program to continue 
// executing other tasks while it performs its operation in the background.


// 20. ### What is a blocking function?

// A blocking function is a type of function that halts the execution of the program until it completes 
// its task or receives a response.


// 21. ### What is Function Composition?

// Function composition in JavaScript refers to the process of combining two or more functions to create a 
// new function. To compose functions, you typically create a higher-order function that takes two functions 
// as arguments and returns a new function. This new function executes the functions in order, passing the 
// result of one function as the argument to the next function.


// 22. ### What is heap?

// In JavaScript, the "heap" refers to a part of the memory where dynamic memory allocation takes place.
// It is the memory region used for storing objects and variables that are created during the execution
// of a program.
// The heap is an essential component of the JavaScript runtime environment. It is responsible for 
// managing and allocating memory for objects that are created dynamically at runtime, such as objects
// created using the new keyword, arrays, and function closures.


// 23. ### What is typed array in javascript?

// Typed Arrays are specialized array-like objects that allow you to work with binary data in a structured 
// and efficient manner. They come in different types, such as numbers and bytes, and provide optimized 
// operations for reading, writing, and manipulating binary data. They offer better performance and memory 
// efficiency compared to regular arrays.


// 24. ### What is nodejs?

// Node.js is a JavaScript runtime for server-side applications. It lets you run JavaScript outside of
// web browsers, handle network requests, access databases, and build scalable apps efficiently. It's 
// widely used for creating web servers, APIs, real-time apps, and command-line tools.



// 25. ### What is a PWA?

// PWAs (Progressive Web Apps) are web applications that use JavaScript, HTML, and CSS to provide a mobile 
// app-like experience. They work offline, send push notifications, and can be installed on devices. 
// PWAs combine the best of web and app technologies, allowing users to access them directly through web
// browsers without the need for app store downloads.

