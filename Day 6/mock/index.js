// 1. ### Which CSS property is used to capitalize text or convert text to uppercase or lowercase letters?
// The text-transform property is used to capitalize text or convert text to uppercase or lowercase letters.


// 2. ### What is word-wrap property in CSS3?
// The word-wrap property allows long words to be able to be broken in order to prevent overflow and wrap 
// onto the next line.


// 3. ### Describe ‘rule set’ in CSS?

// It is an instruction that tells browser on how to render a specific element on the HTML page. It consists 
// of a selector with a declaration block that follows.


// 4. ### How can you create a CSS-only dropdown menu?

// A CSS-only dropdown menu can be created by using the "hover" pseudo-class and the "display" property. 
// When the user hovers over a parent element, the "display" property of the child element can be set to 
// "block" or "inline-block" to reveal the dropdown menu.


// 5. ### What are the potential drawbacks of using CSS frameworks such as Bootstrap?
// Using CSS frameworks like Bootstrap can lead to bloated code, difficulties in customizing the design, 
// and unoriginal or generic looks


// 6. ### What is Tailwind CSS?
// TailwindCSS is a utility-first CSS framework that provides pre-defined CSS classes that can be 
// used to rapidly build custom user interfaces.


// 7. ### How do you customize TailwindCSS to match a specific design system or brand guidelines?

// TailwindCSS provides a configuration file that can be customized to match a specific design system or
// brand guidelines. This file includes variables for colors, fonts, spacing, and more, which can be adjusted
// to match the project's needs.


// 8. ### Can you explain the difference between utility classes and component classes in TailwindCSS?

// Utility classes in TailwindCSS are small, single-purpose classes that provide a specific styling utility, 
// such as padding, margin, or text alignment. Component classes, on the other hand, are larger classes that 
// provide a collection of styles for a specific component, such as a button or card.


// 9. ### How do you optimize the file size of TailwindCSS in a production environment?

// TailwindCSS provides a purge option that removes any unused classes from the final CSS file, reducing its size. 
// This option should be enabled in a production environment to minimize the CSS file size.


// 10. ### What are some common performance issues with TailwindCSS, and how do you optimize 
// performance in your projects?

// Common performance issues with TailwindCSS include the size of the CSS file and the number of classes being
// generated. To optimize performance, it is important to enable the purge option in a production environment,
// use a caching mechanism to speed up builds, and avoid generating unnecessary classes.


// 11. ### What is CSS preprocessor?

// A CSS preprocessor is a scripting language that extends the capabilities of CSS which makes it easier 
// and more efficient to write CSS code.


// 12. ### What is the difference between a CSS preprocessor and a post-processor?

// A CSS preprocessor generates CSS code from source code written in a higher-level scripting language,
// whereas a post-processor takes existing CSS code and applies transformations or optimizations to it. 
// In other words, a preprocessor is used during development, while a post-processor is used after development
// to optimize performance.


// 13. ### What is SASS?

// Sass is a CSS preprocessor that adds functionality to CSS, such as variables, nesting, and more. 
// It allows us to write more efficient code and simplifies task like browser compatibility.


// 14. ### what is the difference between sass and scss?

// Sass and SCSS are both CSS pre-processors and are very similar, but they have different syntax. 
// Sass has a more concise and less verbose syntax, with no curly braces and no semicolon whereas SCSS
// has a syntax that is almost identical to standard CSS, with curly braces and semicolons


// 15. ### Can you describe a situation where you would choose not to use Sass?
// A developer might choose not to use Sass if they prefer to stick with standard CSS for simplicity or if 
// they are working on a small project where the added features of Sass may not be necessary.


// 16. ### What is SASS nesting?

// Sass nesting is a feature that allows us to write CSS selectors that are nested within one another which
// makes our code easier to read and understand.


// 17. ### What are variables in Sass?

// Variables in Sass allow you to assign values to a variable name, which can then be used throughout your 
// stylesheet.


// 18. ### What are mixins in Sass?

// A mixin is a feature in Sass that allows you to define a set of CSS styles that can be reused 
// throughout your stylesheet. Example:

//      ```
//      @mixin my-text-style {
//       font-size: 16px;
//       font-weight: bold;
//      }

//      /* we can use the whole style like this now */

//      h1 {
//       @include my-text-style;
//      }
//      ```


// 19. ### What is Sass inheritance?

// Inheritance allows us to define a set of styles in one selector, called a "parent", and then extend 
// those styles to another selector, called a "child". Example:

//      ```
//      @mixin button-style($bg-color, $text-color) {
//          background-color: $bg-color;
//          color: $text-color;
//          display: inline-block;
//          padding: 8px 16px;
//      }


  // Use the mixin to create different button styles

//   .button-primary {
//     @include button-style(#007bff, #fff);
// }

// .button-secondary {
//     @include button-style(#6c757d, #fff);
// }


// 20. ### How do you use 'if' statements in SCSS?

//      In SCSS, you can use the @if directive to add conditional logic to your styles. Example:

//      ```
//      //declaring variable
//      $background-color: #333;

//      body {

//      @if $background-color == #333 {
//      background-color: $background-color;

//      } @else {

//      background-color: #fff;
//          }
//      }
//      ```


// 21. ### What are some common mistakes that developers make when writing CSS, and how do you avoid them?

// Common mistakes in CSS include over-reliance on frameworks, lack of organization, and using non-semantic HTML.



// 22. ### How do you balance the need for visual aesthetics with the need for website or application functionality?

// I balance the need for visual aesthetics with the need for functionality by designing with the user in mind, 
// testing designs with real users, and incorporating feedback and data into the design process.


// 23. ### How do you ensure that your CSS is optimized for search engine optimization (SEO)?

// We can ensure CSS is optimized for SEO by minimizing code bloat to improve load time,
// use relevant class names, avoiding inline styles, etc.


// 24. ### How do you ensure that your CSS is scalable and maintainable for large projects?

//      We can ensure that our CSS is scalable and maintainable for large project by:

//      1. Using proper naming convection for ID and classes.
//      2. Using preprocessor like sass, less, etc.
//      3. Using performance enhancing techniques like lazy-loading, etc.


// 25. ### How do you use CSS variables to create more flexible and dynamic designs, 
// and what are some use cases where variables are particularly useful?

// CSS variables can improve maintainability and reduce repetition. Variables are particularly useful 
// for theming, creating responsive designs, and making changes to global styles.


