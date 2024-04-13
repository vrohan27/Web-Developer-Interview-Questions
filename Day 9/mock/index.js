// 1. ### What is Class in JavaScript?

// Class is a template that can be used to create objects that share the same properties and methods. 
// When an object is created from a class, it is called an instance of that class. Class was introduced
// in ECMAScript(ES6).


// 2. ### What is a constructor in javascript?

// In JavaScript, a constructor is a special method that is used to create and initialize objects that
// are based on a class. It's like a blueprint for creating new objects.The constructor method is called
// automatically when a new object is created from a class, using the new keyword. It's used to set the 
// initial state of the object by assigning values to its properties.


// 3. ### What is the difference between a static method and an instance method in a class?

// An instance method is a method that can be called on an instance of a class, and it can access 
// and modify instance-specific data, like properties of the object. A static method, on the other
// hand, is a method that belongs to the class itself, not to any instance of the class. It can only 
// access class-level data and can be called on the class itself, rather than on an instance of the class.


// 4. ### What is "this" in javascript Classes?

// In JavaScript classes, `this` refers to the current object that is being worked on. It's like
// a placeholder for the object. For example, if you have a class that creates `Person` objects,
// and you want to give each person a `name`, you can use `this.name` to refer to the `name`
// property of the current `Person` object that is being created or accessed. So, `this` is
// just a way to access the current object's properties and methods inside a class.


// 5. ### What are the benefits of using classes in JavaScript?

// There are several benefits of using classes in javascript. Some of them are:

// 1. Encapsulation: Classes allow you to encapsulate related data and behavior into a single object, 
// making it easier to manage and organize your code.

// 2. Inheritance: Classes support inheritance, which allows you to create subclasses that inherit
//  properties and methods from a parent class. This can help you avoid duplicating code and make 
//  your code more modular and reusable.

// 3. Code Reusability: With classes, you can create objects that share common properties and behavior. 
// This can help you avoid writing the same code over and over again, making your code more efficient
//  and easier to maintain.

// 4. Readability: Classes provide a clean and organized way to structure your code, which can make 
// it easier to read and understand.



// 6.  ### Can you explain the concept of method overriding in a class in JavaScript?

// Method overriding is a concept in JavaScript where a subclass can provide its own implementation 
// of a method that is already defined in the parent class. To override a method in a subclass, you 
// simply define a method with the same name as the method in the parent class


// 7.  ### What is composition in classes in JavaScript?

// Composition in class JS is a technique of building complex classes by combining smaller, more focused
// classes that represent specific behaviors or properties.Composition is a flexible and powerful technique
// for creating modular, reusable code in JavaScript.


// 8.  ### What is inheritance in classes in javascript?

// Inheritance in classes in JavaScript is the ability to create a new class based on an existing class.
// The new class inherits all the properties and methods of the existing class, and can also add new 
// properties and methods or override existing ones.


// 09.  ### What is the `extends` keyword in JavaScript, and how is it used for inheritance?

// The `extends` keyword is used in JavaScript to create a new class that inherits from an existing
//        class. It is used in the class declaration syntax, like this:
//       ```
//       class ChildClass extends ParentClass {
//        // ChildClass methods and properties
//       }
//       ```


// 10.  ### what is the purpose of `super()` in javascript classes?

// The `super()` keyword in JavaScript is used to call a method or constructor of a parent class from 
// within a subclass. It allows a subclass to inherit and use functionality from the parent class, while 
// also adding its own functionality.


// 11. ### What is a private class field in JavaScript?

// A private class field in JavaScript refers to a class field that is only accessible within the
// class in which it is defined. It cannot be accessed or modified from outside the class, not even
// by instances of the class.


// 12. ### Can you explain the concept of encapsulation in JavaScript classes?

// Encapsulation is a concept in object-oriented programming that refers to bundling data and methods 
// within a single unit, such as a class, and hiding the internal details of the class from the outside
// world. This makes the code more secure and maintainable.


// 13. ### What is `get` keyword in javascript classes?

// The `get` keyword is used to define a method that retrieves the value of a property. When the property
// is accessed, the `get` method is automatically called, and its return value is used as 
// the property's value.


// 14. ### What is `set` keyword in javascript classes?

// The `set` keyword is used to define a method that sets the value of a property. When the property is
// assigned a value, the `set` method is automatically called, and it can perform any necessary 
// validation or processing before setting the property's value.


// 15. ### Can you explain the concept of instance variables in a class in JavaScript?

// In JavaScript, instance variables are properties of an object that are specific to an instance
// of a class. When we create a new instance of a class using the `new` keyword, each instance has
// its own set of instance variables that are separate from other instances.


// 16. ### What is the difference between a class and a function in JavaScript?

// functions and classes are both important tools in JavaScript for defining reusable code, but they serve
// different purposes. Functions are used to encapsulate logic and perform specific tasks, while classes
// are used to create objects with shared properties and methods. Knowing when to use each one depends 
// on the specific problem being solved and the design of the application.


// 17. ### What is abstract class in javascript?

// In JavaScript, an abstract class is a blueprint for creating other classes that share some common 
// properties and methods. However, unlike regular classes, abstract classes cannot be directly 
// instantiated. Instead, they are meant to be extended or subclassed by other classes.


// 18. ### How would you convert an object to a JSON string in JavaScript, and vice versa?

// In JavaScript, you can convert an object to a JSON string using the `JSON.stringify()` method, and
// you can convert a JSON string back to an object using the `JSON.parse()` method.


// 19. ### What is the difference between a class and an interface in JavaScript?

// Classes and interfaces are both used in JavaScript to define object types, but serve different
// purposes. A class defines a blueprint for creating objects that have properties and methods, 
// while an interface describes the shape of an object and enforces a contract between different
// parts of a program. Classes define what an object is, while interfaces define what an object can do.


// 20. ### Can you explain the concept of polymorphism in classes in JavaScript?

// Polymorphism in JavaScript classes means that different objects can share the same methods,
// even if they belong to different classes. This allows us to reuse code across multiple classes
// and write more flexible, maintainable code.


// 21.  ### What is prototype in javascript?

// In JavaScript, a prototype is an object that contains properties and methods that can be shared 
// by all objects created with the same constructor function. It helps to reduce code duplication 
// and makes your code more efficient.


// 22.  ### What is prototype chain?

// Every object in JavaScript has a built-in property, which is called its prototype. The 
// prototype is itself an object, so the prototype will have its own prototype, making what's
// called a prototype chain. The chain ends when we reach a prototype that has null for its own prototype.


// 23.  ### How does prototypal inheritance work in JavaScript?

// Prototypal inheritance allows objects to inherit properties and methods from their parent objects. 
// When an object is created with a constructor function, its prototype is automatically set to the 
// prototype object associated with that constructor function. Any properties or methods defined in 
// the prototype object are shared by all objects created with that constructor function. When an 
// object tries to access a property or method, JavaScript first looks for it in the object itself. 
// If it's not found, it looks up the prototype chain until it finds the property or method.


// 24.  ### What is the difference between prototypal inheritance and classical inheritance?

// The main difference between prototypal and classical inheritance is that prototypal inheritance 
// allows objects to inherit properties and methods directly from other objects, without the need
// for classes or constructors. This makes the code more flexible and easier to maintain. Classical
// inheritance relies on classes and constructors to define the inheritance hierarchy, which can 
// provide better organization and structure but is more rigid and requires more upfront planning.



// 25.  ### What is the difference between an object's prototype and its constructor function?


//       | Prototype                                                                         | Constructor Function                                                   |
//       | --------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
//       | An object that is shared by all instances created by the constructor function     | A function that is used to create new objects                          |
//       | Used to define properties and methods that are shared by all instances            | Used to define properties and methods that are unique to each instance |
//       | Accessed using the `prototype` property of the constructor function               | Accessed using the `new` keyword followed by the constructor function  |
//       | Modifying the prototype affects all instances created by the constructor function | Modifying the constructor function does not affect existing instances  |