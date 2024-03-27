### Understanding JSX syntax and its usage in React.js

`JSX (Javascript XML)` is a syntax extension for javascript used by reactjs to describe what UI should look like . JSX looks similar to the HTML but allows you to write  HTML-Like code directly in your javascript files . Here's the breakdown of JSX and it's usage in react 

JSX makes things show up on the screen in reactjs . The `compiler` changes it into javascript functions at runtime , so it can work . If there are any mistakes or problems , JSX helps find them easily

## Why JSX ?

<ol>
    <li>It is more powerful and optimized than the traditional javascript because it performs optimizations in performance while translating to javascript</li>
    <li>It makes it easier to make UI components and render it easily to the display</li>
    <li>JSX is an expression which we can use it inside the loops and if statements</li>
</ol>

In react we are allow to write the traditional javascript function in the form of JSX . To embed any JSX expression in the JSX code in reactjs , we can do by using the curly brackets `{}`

`Code Example`
```JSX
function App() {
  const text = 'Hello World';
  
  return (
    <div className="App">
      <p> {text} </p>
    </div>
  );
}
```
In the above code example the vraible text contains the value `Hello World` and it is declared before `return` statement , Then the vriable is used inside of the curly brackets `{}` to get the value of the variable , This is the simple code to understand the JSX in reactjs

`Output`
```JSX
Hello World
```

## Attribute in JSX

### What Are Attributes in JSX?
In Reactjs, JSX (JavaScript XML) allows us to write HTML-like syntax directly within our JavaScript code.
When we create elements using JSX, we can attach attributes to those elements, just like we do with regular HTML tags.
Attributes provide additional information or configuration to an element.

For example, if we want to set the `class` attribute of an element, we use `className` in JSX (due to JavaScript naming conventions).

`Code Example`
```JSX
function App() {
  const text = 'Hello World';
  
  return (
    <div className="App">
      <p className = "p-text"> {text} </p>
    </div>
  );
}
```