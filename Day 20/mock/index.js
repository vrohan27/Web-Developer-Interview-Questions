// 1. ### What is the use of the tsconfig.json file?

// The tsconfig.json file is used in TypeScript to configure the compiler options for a project. 
// allows developers to specify settings such as target version, module system, output directory, and more.


// 2. ### Explain the concept of type assertion in TypeScript. 

// Type assertion in TypeScript is a way to tell the compiler the specific type of a value when it cannot 
// be inferred automatically. It allows you to override the compiler's default assumptions and treat a 
// value as a particular type. Type assertions are useful when you have more knowledge about the type of 
// a value than what the compiler can determine on its own. 


// 3. ### What is the "any" type in TypeScript, and when should it be used?

// The "any" type in TypeScript is a type that represents a value of any type. It essentially 
// disables type checking for that particular value, allowing it to be assigned or used in any context.


// 4. ### How can you enforce strict null checks in TypeScript?

// To enforce strict null checks in TypeScript, you can enable the "strictNullChecks" compiler option in the 
// tsconfig.json file. When enabled, TypeScript will check for null and undefined values more strictly, 
// helping to prevent common errors related to null and undefined.


// 5. ### What is the "readonly" modifier in TypeScript, and how does it affect properties and arrays?

// The "readonly" modifier in TypeScript is used to make properties or array elements read-only, meaning they 
// cannot be modified once initialized. It provides a way to enforce immutability and prevent accidental 
// modifications to certain values. When applied to properties, it prevents reassignment, and when applied 
// to arrays, it disallows adding or removing elements after initialization.


// 6. ### Can TypeScript be used for the backend?

// Yes, TypeScript can be used for backend development. TypeScript is a superset of JavaScript that adds 
// static typing and other features to JavaScript, making it more suitable for larger, complex applications. 
// It can be used with popular backend frameworks and platforms such as Node.js to build 
// server-side applications.


// 7. ### what is optional properties in an interface in TypeScript?
//In TypeScript, you can define optional properties in an interface by appending a question mark (?) 
// to the property name. This indicates that the property is optional and may or may not be present in the 
// object that implements the interface.
//      ```
//      //age & email are marked as optional so it will not cause any error if they're not assigned any value
//      interface Person {
//        name: string;
//        age?: number;
//        email?: string;
//      }
//      ```


// 8. ### Explain generics in Typescript.

//Generics in TypeScript enable you to create reusable code that can work with different data types. 
// They act as placeholders for types and provide flexibility without sacrificing type safety. By using 
// angle brackets (<>), you can create functions, interfaces, classes, or type aliases that can handle 
// multiple types.
//      ```
//      function identity<T>(arg: T): T {
//        return arg;
//      }
//      //this is how generics increase flexibility

//      let result1 = identity<number>(42); // result1 is of type number
//      let result2 = identity<string>("Hello"); // result2 is of type string
//      ```


// 9. ### Explain the concept of type guards in TypeScript.

// Type guards in TypeScript are checks that help determine the type of a variable. They help TypeScript 
// understand the specific type of the variable, making your code safer and more accurate. Type guards are 
// used within conditional blocks to refine the type based on conditions, improving type inference and 
// reducing the risk of errors.


// 10. ### What is the `keyof` operator in TypeScript?

// The `keyof` operator in TypeScript is used to get a union type of all the keys (property names) of an object 
// type. It allows you to access and use the keys of an object type as string literals in type operations and
//  transformations.
//      ```
//      interface Person {
//          name: string;
//          age: number;
//        }
     
//        type PersonKeys = keyof Person;
//        const key1: PersonKeys = 'name'; //Valid key
//        const key3: PersonKeys = 'address'; //Error
//        ```


// 11. ### Explain the difference between "interface" and "class" in TypeScript.

// An interface in TypeScript is used to describe the structure of an object, without providing an 
// implementation. It defines the properties and methods that an object should have. On the other hand, 
// a class is a blueprint for creating objects that encapsulates data and behavior. It allows you to 
// create instances of objects, implement interfaces, and leverage object-oriented programming concepts 
// like inheritance and encapsulation. 


// 12. ###  what is enum in Typescript?

// Enums in TypeScript is a way to define a collection of related constants. Enums assign automatic numeric 
// values to each enumerator by default, but you can also customize them. Enums are useful when you have a 
// fixed set of values that you want to refer to using meaningful names instead of explicit values throughout 
// your code.


// 13. ### Can you erase the values of array elements in TypeScript?

// In TypeScript, we cannot directly erase or remove values from individual array elements. Once a value is 
// assigned to an element in an array, it remains in that position until we replace it with a new value. 
// However, we can assign `null`, `undefined`, or any other special value to indicate an empty or erased 
// state for an array element.


// 14. ### What is Intersection types in Typescript?

// Intersection types allow you to combine multiple types into a single type that has all the properties and 
// methods of each constituent type. It is denoted by the "&" symbol.
//       ```
//      interface A {
//        propA: number;
//      }

//      interface B {
//        propB: string;
//      }

//      type IntersectionType = A & B;

//      const obj: IntersectionType = {
//        propA: 123,
//        propB: "hello",
//      };
//       ```


// 15. ### What is Union types in Typescript?

// Union types allow you to define a type that can hold values of multiple types. It is denoted by the "|" 
// symbol.
//      ```
//      type UnionType = string | number;

//      let val: UnionType;
//      val = "hello"; // Valid
//      val = 123;     // Valid
//      val = true;    // Error, as boolean is not part
//      ```


// 16. ### Which TypeScript types are immutable?

// In TypeScript, all primitive data types, such as strings, numbers, booleans, etc., are immutable, 
// meaning that the value cannot be changed more than once. Additionally, it means that passing them to 
// functions has no negative impacts.


// 17. ### What is namespace in Typescript?

// In TypeScript, a namespace is a way to organize and group related code elements such as classes, 
// interfaces, functions, and variables under a single name. Namespaces provide a mechanism to avoid naming 
// conflicts and create a logical hierarchy within your codebase.


// 18. ### What is modules in Typescript?

// Modules in TypeScript allow you to organize and encapsulate code into separate files. By using the 
// `export` keyword, you can make specific code elements accessible to other modules, while the `import` 
// keyword allows you to use those exported elements in your module. Modules make it easier to manage 
// dependencies, reuse code, and maintain a modular structure in your TypeScript projects.


// 19. ### What is mixins in Typescript?

// In TypeScript, mixins allow you to extend a class by combining the properties and methods from other 
// classes. They provide a way to reuse code across multiple classes without using inheritance. By applying 
// a mixin to a target class, you can add additional functionality to the class in a modular and flexible 
// manner.


// 20. ### What is declaration merging in Typescript?
//Declaration merging in TypeScript lets you combine multiple declarations with the same name into a single 
// declaration. It allows you to add or extend properties, methods, or functionality to existing types, making 
// it easier to build and extend code across multiple sources without duplicating definitions.
//      ```
//      interface Box {
//        height: number;
//        width: number;
//      }
//      interface Box {
//        scale: number;
//      }
//      let box: Box = { height: 5, width: 6, scale: 10 };
//      ```


// 21. ### What are the Disadvantages of TypeScript?

// TypeScript has a few drawbacks. It requires extra time and effort to annotate types, which can slow down 
// development. It also has a learning curve, especially for developers new to static typing. The compilation 
// step can add complexity to the workflow, and integrating TypeScript with existing JavaScript codebases may 
// require extra work and introduce compatibility challenges.


// 22. ### What are decorators in TypeScript?

// Decorators in TypeScript allows us to add metadata or behavior to classes, methods, properties, or 
// parameters at design time. They are declared using the @ symbol followed by the decorator name, placed 
// just before the class, method, property, or parameter declaration.


// 23. ### Does TypeScript Support All Object Oriented Principles?

// Yes, Typescript support all object oriented principles. There are 4 main principles to Object Oriented 
// Programming: Encapsulation, Inheritance, Abstraction, and Polymorphism. TypeScript can implement all four 
// of them with its smaller and cleaner syntax


// 24. ### Does TypeScript supports function overloading?

// Yes, TypeScript supports function overloading, which means you can define multiple versions of a 
// function with different parameter types or arity. This allows you to provide different implementations 
// of the function based on the arguments passed to it.


// 25. ### What are the best practices when using TypeScript?

// To use TypeScript effectively, follow these best practices: use static typing for error prevention and 
// code clarity, enable strict mode and null checks, minimize the use of any type, follow consistent naming 
// conventions, keep TypeScript and compiler options up to date, etc.


