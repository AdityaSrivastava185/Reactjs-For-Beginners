# React Hooks Documentation

## Introduction

React Hooks provide a modern approach to managing state and side effects in functional components. They offer a cleaner and more concise way to work with React features without the need for class components.

## Benefits of Using React Hooks

- **Simplified State Management**: Hooks simplify state management by allowing components to use state variables directly within functional components using the `useState` hook.
  
- **Improved Code Reusability**: Hooks promote code reuse by enabling the extraction of stateful logic into custom hooks that can be shared across multiple components.
  
- **Efficient Side Effect Handling**: Hooks such as `useEffect` provide a convenient way to handle side effects, such as data fetching or subscriptions, within functional components.

## Basic Hooks

### useState

The `useState` hook allows components to use state variables. It returns a stateful value and a function to update it.

`Syntax to write the useEffect hook in reactjs -`
```jsx
import React, { useState } from 'react';

function MyComponent() {
  // Declare a state variable named "count" and initialize it to 0
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      {/* Button to increment the count */}
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

export default MyComponent;

```
<ol>
  <li>We import the useState hook from react</li>
  <li>Initialise the count varibale to decalre a value and a setCount variable which is a function to update the state of the count variable</li>
  <li>To declare the value of the count variable initially , Give the initial value to isnide of the useState() function , which is 0 in this code</li>
  <li>Inside the return function , To update the value when the button is clicked , we make a function and inside of the function update the value of the count 
  by using setCount function
  </li>
  <li>Now , whenever the button will be clicked then the count will be increased by 1 </li>
</ol>

### useEffect

The `useEffect` hook enables components to perform side effects. It runs after every render by default and can optionally clean up after itself.

`Syntax to write the useEffect hook in reactjs - `

```jsx
import React, { useState, useEffect } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  // Fetch a random fact only once on initial render
  useEffect(() => {
    const fetchRandomFact = async () => {
      const response = await fetch('https://uselessfacts.jspro.com/api/v1/random');
      const data = await response.json();
      console.log('Random fact:', data.text); // Replace with UI update for the fact
    };

    fetchRandomFact();
  }, []); // Empty dependency array: fetch fact only once
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
export default Counter;
```
<ol>
<li>Import the useState and useEffect hook from react</li>
<li>The useEffect hook is fetching the random jokes from the api</li>
<li>The empty array [] that effect runs only once after the intial render </li>
<li>We return the jsx element to increment the count by clicking on the count button</li>
</ol>

### useContext

The `useContext` hook provides a way to access context in functional components. It accepts a context object and returns the current context value.

## Additional Hooks

### useRef

The `useRef` hook returns a mutable ref object whose `current` property is initialized to the passed argument. The returned object persists for the full lifetime of the component.

### useMemo

The `useMemo` hook memoizes the result of a function and only recomputes the result when one of the dependencies has changed.

### useCallback

The `useCallback` hook returns a memoized callback function that only changes if one of the dependencies has changed.

## Conclusion

React Hooks offer a modern and efficient way to manage state and side effects in functional components. By leveraging hooks, you can write cleaner, more concise code while improving code reusability and maintainability.
