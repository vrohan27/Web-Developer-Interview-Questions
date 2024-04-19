// 1. ### Can web browsers read JSX directly?

// Web browsers cannot read JSX directly. This is because they are built to only read regular JS objects 
// and JSX is not a regular JavaScript object. For a web browser to read a JSX file, the file needs to be 
// transformed into a regular JavaScript object. For this, we use Babel


// 2. ### “In React, everything is a component.” Explain.

// Components are the building blocks of a React application’s UI. These components split up the entire UI 
// into small independent and reusable pieces. Then it renders each of these components independent of each 
// other without affecting the rest of the UI.


// 3. ### What are Pure Components?

// Pure components are the simplest and fastest components which can be written. They can replace any 
// component which only has a render(). These components enhance the simplicity of the code and performance 
// of the application.


// 4. ### Why is it necessary to start component names with a capital letter?

// In React, it is necessary to start component names with a capital letter. If we start the component name 
// with lower case, it will throw an error as an unrecognized tag. It is because, in JSX, lower case tag names 
// are considered as HTML tags.


// 5. ### When do we prefer to use a class component over a function component?

// If a component needs state or lifecycle methods, we should use the class component; otherwise, 
// use the function component. However, after React 16.8, with the addition of Hooks, you could use 
// state, lifecycle methods, and other features that were only available in the class component right 
// in your function component.


// 6. ### How do you handle forms in React?

// In React, you can handle forms by using controlled components. This means that the form inputs' values 
// are controlled by React state. You create state variables to store the values of the form inputs and 
// update the state using the onChange event. You can access and process the form data from the state when 
// the form is submitted.


// 7. ### Explain the Flux architectural pattern.

// The Flux architectural pattern is a design pattern used in React applications for managing data flow. 
// It consists of four key components: the view, actions, dispatcher, and stores. Actions trigger changes, 
// which are dispatched by the dispatcher to the appropriate stores. The stores contain the application state 
// and update the views. This unidirectional data flow ensures predictability and maintainability.


// 8. ### Explain the concept of context in React. How does it work?

// Context in React is a way to share data between components without explicitly passing it through props at 
// each level. It allows you to create a context object that holds the shared data, which can be accessed by 
// any component within its subtree. The context provider sets the value, and the consuming components can 
// access it using the useContext hook.


// 9. ### What are portals in React? When would you use them?

// Portals in React provide a way to render children components into a different DOM node, outside the current 
// component's DOM hierarchy. They allow you to render components at a different location in the DOM, which is 
// useful for scenarios like modals, popovers, or tooltips, where the component needs to be positioned relative 
// to a specific DOM element outside its parent.


// 10. ### Explain the concept of lazy loading in React.

// Lazy loading in React is a technique used to optimize performance by loading components or resources only when 
// they are needed. Instead of loading all components upfront, you can dynamically import them using the React.
// lazy function and render them when required. This helps reduce the initial bundle size and improves the 
// loading speed of your application.


// 11. ### What is useEffect hook?

// The useEffect hook is utilized for handling side effects in React components. It enables you to perform 
// tasks like data fetching, subscriptions, or DOM manipulation.


// 12. ### What is the role of the useReducer hook in React? How does it differ from the useState hook?

// The useReducer hook serves as an alternative to useState for managing complex state logic. It takes 
// a reducer function and an initial state, returning the current state value and a dispatch function. 
// By dispatching actions to the reducer, state updates can be controlled and organized in a more 
// structured manner.


// 13. ### Describe the purpose of the useRef hook.

// The useRef hook is employed to create mutable values that persist across renders in a React component. 
// It is commonly used for accessing DOM elements or storing any mutable value that doesn't need to trigger 
// a re-render. useRef allows components to retain a reference to a specific value or element throughout 
// their lifecycle.


// 14. ### What is the purpose of the useMemo hook? How does it help optimize performance in React?

// The useMemo hook is designed for memoizing expensive calculations or function calls in React. It takes 
// a function and a dependency array, returning a memoized value. By specifying the dependencies, the 
// memoized value is recalculated only when the dependencies change, helping to optimize performance by 
// avoiding unnecessary computations.


// 15. ### When would you use the useCallback hook in React? How does it differ from the useMemo hook?

// The useCallback hook in React is like useMemo, but it memoizes functions instead of values. It's handy 
// when passing callbacks to child components because it avoids unnecessary re-renders. By memoizing the 
// function, it ensures that the same function instance is returned as long as the dependencies (inputs) 
// remain unchanged. This optimization can improve performance in certain situations by preventing unnecessary 
// function recreations.


// 16. ### What happens when you call setState?

// The state property is updated in a React component with the object passed into setState, and this is done 
// asynchronously. It tells React that this component and its children need to be re-rendered, but React may 
// not do this immediately.


// 17. ### What is `children` prop in React?

// The `children` prop in React allows you to pass content or components as a nested element to another 
// component, making it flexible and reusable. It enables you to include and render dynamic content within 
// a component by placing it between the opening and closing tags of that component.


// 18. ### What are stateless components?

// If the behaviour of a component is independent of its state then it can be a stateless component. You 
// can use either a function or a class for creating stateless components. But unless you need to use a 
// lifecycle hook in your components, you should go for function components.



// 19. ### What are stateful components?

// If the behaviour of a component is dependent on the state of the component then it can be termed as 
// stateful component. These stateful components are either function components with hooks or class components.


// 20. ### What is the impact of indexes as keys?

// Using indexes as keys in React can cause problems. When components are rendered using indexes as keys, 
// React may not properly update or reorder them when the order changes. This can result in incorrect rendering, 
// loss of component state, and slower performance. It's better to use unique and stable identifiers as keys to 
// avoid these issues and ensure that components are updated correctly.


// 21. ### What is prop drilling in react?

// Prop drilling in React refers to the process of passing down props (properties) from a parent component to 
// a deeply nested child component, even if the intermediate components do not need or use those props. 
// This can lead to a cluttered and less maintainable codebase, as props need to be passed through multiple 
// layers of components, making it harder to understand and modify the code.


// 22. ## How can we avoid prop drilling?

// Prop drilling can be avoided by using React's Context API or state management libraries like Redux, which
// allow for more efficient and organized sharing of data across components.


// 23. ### How would you prevent a component from rendering in React?

// To prevent a component from rendering in React, you can use conditional rendering. You can wrap the 
// component's JSX code inside an if statement or a ternary operator, where you specify a condition. If 
// the condition evaluates to true, the component will render; otherwise, it won't. This allows you to 
// control when and under what circumstances the component should be displayed. By dynamically adjusting 
// the condition, you can easily show or hide the component based on certain logic or user interactions.


// 24. ### What do these three dots (...) in React do?

// The three dots (...) in React, called the spread operator, can be used to make copies of objects 
// or arrays.


// 25. ### Why React uses className over class attribute?

// React uses `className` instead of `class` in HTML because `class` is a reserved keyword in JavaScript. 
// Using `class` would cause conflicts with JavaScript syntax. So, to avoid issues, React uses `className` 
// for specifying CSS classes on elements. This allows developers to apply CSS classes to React components 
// without running into conflicts or JavaScript errors.


