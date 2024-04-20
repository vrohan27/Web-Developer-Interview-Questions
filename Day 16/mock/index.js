// 1. ### Why we should not update state directly?

// Updating the state directly in ReactJS is not recommended because it can cause unexpected issues and make 
// it hard to track changes. React provides the setState() method for updating the state, which ensures proper 
// handling of updates, triggers component re-rendering, and maintains state management integrity.


// 2. ### What is StrictMode in React?

// StrictMode in React is a component that helps catch potential problems in your code by performing extra 
// checks during rendering, highlighting issues and encouraging best practices.


// 3. ### What's wrong with using Context in React?

// Context in React is not inherently bad, but it should be used carefully. Using Context extensively can 
// make your code harder to understand and maintain. It may also cause unnecessary re-rendering and may 
// not be the best choice for managing global state in complex applications. So we should consider other 
// state management options like Redux for larger projects.


// 4. ### Does React re-render all components and sub components every time setState is called?

// No, React does not re-render all components and subcomponents every time setState is called. It only 
// re-renders the components that are affected by the state change, optimizing performance by avoiding 
// unnecessary updates.


// 5. ### Explain why and when would you use `useMemo()`?

// You would use `useMemo()` in React when you want to optimize performance by memoizing the result of a 
// function or computation. It is used to avoid unnecessary calculations or expensive operations by caching 
// the computed value until its dependencies change. By using `useMemo()`, you can ensure that the 
// computation is only performed when necessary, reducing the workload on the application and improving 
// efficiency.


// 6. ### When shall we use useReducer hook in ReactJS?

// The useReducer hook in ReactJS is typically used when you have complex state logic that involves multiple 
// related values or when the state transitions are more intricate. It is a good choice when you find that 
// managing state with the useState hook becomes cumbersome and leads to complex and nested code.


// 7. ### How does React renderer work exactly when we call setState?

// When you use setState in React, it triggers a process called reconciliation. React compares the old and 
// new state, figures out what changed, and updates only the necessary parts of the user interface. It does 
// this by creating a virtual copy of the user interface called the virtual DOM and then efficiently applying 
// the required changes to the actual web page. This helps React make updates quickly and keeps your app 
// running smoothly.


// 8. ### what are styled component?

// Styled components are a way to style React components by writing CSS directly in JavaScript. They 
// allow you to create reusable styled elements and easily manage styles within your components. It 
// improves code organization and makes styling more readable and maintainable.


// 9. ### What are the advantages of styled components?

// Styled components in React offer advantages such as component-based styling, improved readability, 
// scoped styles, support for dynamic styles, reusability, theme support, and better performance. They 
// enhance code organization, make styles more maintainable, and provide a seamless integration between 
// styling and component logic.


// 10. ### What are the disadvantages of styled components?

// Styled components in React can be more complex and have a higher learning curve compared to traditional 
// CSS stylesheets. Defining styles within JavaScript may require developers to adapt their workflow and 
// understand CSS-in-JS concepts. Additionally, the generated class names for styled components can be 
// less readable, making debugging more challenging


// 11. ### Why props cannot be updated in ReactJS?

// props cannot be updated in ReactJS as due to React core philosophy focused on making the props as 
// immutable and top-down thus, a parent can send any prop values to a child but child cannot change 
// the received prop.


// 12. ### What is a dispatcher?

// It is one of the components required for building apps according to Flux architecture. In this pattern 
// dispatcher is the main point which manages data exchanging inside the app.


// 13. ### What are Default Props?

// In React, default props are used to define default values for props in a component. Default props ensure 
// that if a parent component doesn't provide a value for a certain prop, the component will still have a 
// default value to work with.


// 14. ### What are inline conditional expressions?

// In JSX, you can include any JavaScript expression within curly braces and use it with conditional (ternary) 
// operators, making inline conditional expressions an interesting topic for react interview questions for 
// freshers.


// 15. ### What are the differences between React and React Native?

// React is a JavaScript library used for building web user interfaces, while React Native is a framework 
// for developing native mobile applications. React renders components to the web browser using virtual DOM, 
// while React Native renders components directly to native UI elements for iOS and Android platforms, 
// resulting in a more native-like experience.


// 16. ### Is React a library or a Framework and why?

// React is a JavaScript library for UI building, not a framework. It focuses on the view layer, offering 
// efficient ways to create UI components and manage state. Unlike frameworks, React doesn't provide a full 
// set of development tools, but it excels at making interactive web applications with its declarative 
// approach and efficient UI updates.


// 17. ### What are nested component in react?

// In React, nested components refer to the idea of rendering components within other components. It allows 
// for building complex user interfaces by composing smaller components together.


// 18. ### Can a nested child component access the state of its sibling component?

// No, a nested child component cannot directly access the state of its sibling component. If sibling 
// components need to communicate or share data, it is recommended to lift the shared state up to their 
// common parent component and pass it down as props to both siblings.


// 19. ### What are error boundaries in react?

// Error boundaries in React are components that prevent the entire application from crashing when an error 
// occurs within their child components. They act as safety nets by catching and handling errors, allowing 
// developers to display fallback UI and maintain a smoother user experience.


// 20. ### What is React Dev Tool?

// React DevTools is a browser extension that helps developers debug and inspect React applications. It 
// allows you to see the component structure, check and modify component data, and analyze performance. 
// It's a useful tool for understanding how React components work and finding and fixing issues in your code.


// 21. ### What is "React Node" in react?

// In React, a "React Node" is a term used to describe any content that can be rendered within a React 
// component. It could be HTML elements, other React components, text, numbers, or fragments.


// 22. ### Why do we need to React Router?

// It maintains consistent structure and behavior and is used to develop single-page web applications. 
// Enables multiple views in a single application by defining multiple routes in the React application.


// 23. ### Explain the role of Reducer.

// Reducers are pure functions which specify how the application’s state changes in response to an ACTION. 
// Reducers work by taking in the previous state and action, and then it returns a new state. It determines 
// what sort of update needs to be done based on the type of the action, and then returns new values. It 
// returns the previous state as it is, if no work needs to be done.


// 24. ### What is the use of React.cloneElement?

// React.cloneElement is a method provided by React that allows you to clone and modify a React element. 
// It is typically used when you want to add or override props of a React element while maintaining its 
// original type and key. This is useful when working with components that accept and modify their 
// children's elements.


// 25. ### Can you explain React's "lifting state up" concept and why it is important?

// "Lifting state up" is a concept in React where you move the shared state of multiple components to 
// their common parent component. By doing this, you establish a single source of truth for the shared 
// state, allowing you to pass down the state and related functions as props to child components. It 
// enables better data flow, state management, and enhances performance by reducing unnecessary re-rendering.


