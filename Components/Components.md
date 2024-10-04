# React Components Explained

## Table of Contents
- [React Components](#what-are-components)
- [Component Reconciliation](#component-reconciliation)
- [JSX - Syntactic Sugar](#jsx---syntactic-sugar)
- [Hooks: Bringing State and Lifecycle to Functional Components](#hooks-bringing-state-and-lifecycle-to-functional-components)
- [Component Lifecycle](#component-lifecycle)
- [Render Props and Higher-Order Components (HOCs)](#render-props-and-higher-order-components-hocs)
- [Context API for Prop Drilling](#context-api-for-prop-drilling)
- [Concurrent Rendering and Suspense](#concurrent-rendering-and-suspense)
- [Memoization with `React.memo` and `useMemo`](#memoization-with-reactmemo-and-usememo)
- [Fragments](#fragments)
- [Portals](#portals)

---

## What Are Components?

- **Components** are independent, reusable pieces of code that represent parts of a UI.
- They can manage their own state and behavior or receive data from their parent components.
- Components help build modular, maintainable, and scalable applications.
- With React 18, components now benefit from **automatic batching**, where state updates inside promises or event handlers are batched to avoid unnecessary re-renders.

---

## Types of Components

### 1. Functional Components
- Modern React development focuses on **functional components**.
- Functional components are JavaScript functions that accept **props** (properties) and return JSX.
- They became more powerful with the introduction of **Hooks**, allowing for state management, lifecycle methods, and more.

**Example:**
```jsx
import React from 'react';

function Welcome({ name }) {
  return <h1>Hello, {name}!</h1>;
}

```

## Class Components (Legacy)

- Class components were the default before Hooks were introduced, but are now less commonly used.
- These components extend `React.Component` and include lifecycle methods like `componentDidMount`, `componentDidUpdate`, and `componentWillUnmount`.

**Example:**
```jsx
import React, { Component } from 'react';
class Welcome extends Component {
  render() {
    return <h1>Hello, {this.props.name}!</h1>;
  }
}
```
 
## Component Reconciliation

React performs **reconciliation** to efficiently update the DOM. When the component's state or props change, React creates a new virtual DOM and compares it to the previous one. Only the parts of the real DOM that have changed are updated. This approach boosts performance and ensures smooth UI updates.

## JSX - Syntactic Sugar
**JSX** is a syntax that looks like HTML but is actually JavaScript. It allows developers to write elements and components in a more readable way. JSX also supports embedding JavaScript expressions within **curly braces**.
### Example:
  ```jsx
  const element = <h1>Hello, {name}!</h1>;

  ```

- With React 17 and 18, JSX no longer requires importing React explicitly, as it automatically resolves JSX calls under the hood.
- JSX supports **conditional rendering** and **looping** using standard JavaScript expressions.
- JSX elements can have attributes and event handlers similar to HTML elements.
## Hooks: Bringing State and Lifecycle to Functional Components
**Hooks** were introduced in React 16.8, allowing you to use state and other React features in functional components without needing to write class components.

**Hooks** are functions that allow functional components to use state, lifecycle methods, and other React features. They provide a way to reuse logic across components without writing class components. Some popular hooks include `useState`, `useEffect`, `useContext`, and `useReducer`.
//numbering

### Commonly Used Hooks:
**1.** **useState**: Allows you to add state to functional components.
```jsx
const [count, setCount] = useState(0);
```
**2.** **useEffect**: Performs side effects like data fetching, subscriptions, or DOM manipulatio in functional components.
```jsx
useEffect(() => {
  document.title = `You clicked ${count} times`;
}, [count]);

```
**3.** **useContext**: Allows you to consume context within a functional component.Accesses values from the React Context without needing to pass props down manually.
```jsx
const value = useContext(MyContext);


```
**4.** **useReducer**: An alternative to `useState` for managing complex state logic.
```jsx
const [state, dispatch] = useReducer(reducer, initialArg, init);
```
**5.** **useRef**: Returns a mutable ref object whose `.current` property is initialized to the passed argument.
```jsx
const inputRef = useRef();
```
**6.** **useMemo**: Memoizes the result of a function to avoid unnecessary re-computation.
```jsx
const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
```
**7.** **useCallback**: Returns a memoized callback function to prevent unnecessary re-renders.
```jsx
const memoizedCallback = useCallback(() => {
  doSomething(a, b);
}, [a, b]);
```
**8.** **useLayoutEffect**: Similar to `useEffect`, but fires synchronously after all DOM mutations.
```jsx
useLayoutEffect(() => {
  document.title = `You clicked ${count} times`;
}, [count]);
```
**9.** **useImperativeHandle**: Customizes the instance value that is exposed to parent components when using `ref`.
```jsx
useImperativeHandle(ref, () => ({
  focus: () => {
    inputRef.current.focus();
  },
}));
```
**10.** **useDebugValue**: Displays a label for custom hooks in React DevTools.
```jsx
useDebugValue(value);
```
## New Hooks in React 18
React 18 introduces new hooks like 
- `useTransition`: Allows you to transition between loading states.
- `useDeferredValue` : Defers updating a value to improve performance. 
- `useOpaqueIdentifier` : Generates an opaque identifier for use in concurrent mode.
- `useCache`: Manages a cache for expensive computations.
- `useEvent`: Listens to events outside the React tree.
- `useEffectOnce`: Runs an effect only once.
- `useSyncExternalStore`: Synchronizes state with an external store.
- `useMutableSource`: Reads from a mutable source.
- `useOpaqueIdentifier`: Generates an opaque identifier for use in concurrent mode.
## Component Lifecycle
- Functional components use the `useEffect` hook to manage side effects and lifecycle events.

- Class components have a lifecycle that includes **mounting**, **updating**, and **unmounting** phases. Class components have lifecycle methods like `componentDidMount`, `componentDidUpdate`, and `componentWillUnmount`.

 **Note :** With React 17 and 18, class components are considered legacy, and functional components with Hooks are the preferred way to build React applications.

 ## Functional Component Lifecycle:
- **Mounting** : Handled by the initial call of useEffect with an empty dependency array ( [ ] ).
- **Updating** : Triggered by useEffect with dependencies.
- **Unmounting** : Handled by the cleanup function returned by useEffect.
### Example:
```jsx
useEffect(() => {
  // Code on mount or update

  return () => {
    // Cleanup on unmount
  };
}, [dependency]);

```
In class components, lifecycle methods like `componentDidMount`, `componentDidUpdate`, and `componentWillUnmount` are used for similar purposes.

## Render Props and Higher-Order Components (HOCs)
**Render Props** and **Higher-Order Components (HOCs)** are patterns used to share code between components in React.In other words, a pattern where a component's child is a function that returns JSX, allowing for code reuse between components.
```jsx
function DataFetcher({ render }) {
  const data = fetchData();
  return render(data);
}

function App() {
  return (
    <DataFetcher render={(data) => <Display data={data} />} />
  );
}
```
**Higher-Order Components (HOCs)** are functions that take a component and return a new component with additional props or functionality.
```jsx  
function withDataFetching(Component) {
  return function WithDataFetching(props) {
    const data = fetchData();
    return <Component {...props} data={data} />;
  };
}
```
## Context API for Prop Drilling
**Context API** is a feature that allows you to pass data through the component tree without having to pass props down manually at every level,a process known as **Prop Drilling**. It provides a way to share values like themes, locales, or user data across components.

### Creating and Using Context:
```jsx
const MyContext = React.createContext();

function App() {
  return (
    <MyContext.Provider value={/* some value */}>
      <Component />
    </MyContext.Provider>
  );
}

function Component() {
  const value = useContext(MyContext);
  return <div>{value}</div>;
}
```
## Concurrent Rendering and Suspense
React 18 introduced **Concurrent Rendering** and **Suspense improvements**. These features improve user experience by splitting rendering into smaller tasks, making UIs more responsive.

- **Concurrent Rendering** allows React to work on multiple tasks simultaneously, prioritizing the most important updates.
- `useTransition`: Allows you to mark updates as non-urgent, enabling concurrent rendering.
```jsx
const [isPending, startTransition] = useTransition();

startTransition(() => {
  setState(newState);
});
```


- **Suspense** enables components to suspend rendering while waiting for data to load, showing fallback content in the meantime.
```jsx
<Suspense fallback={<Loading />}>
  <MyComponent />
</Suspense>
```
## Memoization with `React.memo` and `useMemo`
**Memoization** is a technique used to optimize performance by storing the results of expensive function calls and returning the cached result when the same inputs occur again.

**1.** `React.memo` : Memoizes a functional component to prevent it from re-rendering unless its props change.
```jsx 
const MyComponent = React.memo(({ prop }) => {
  return <div>{prop}</div>;
});
```
**2.** `useMemo` : Memoizes the result of a function to avoid re-computation on every render util dependencies changes.
```jsx
const expensiveCalculation = useMemo(() => {
  return someExpensiveFunction(input);
}, [input]);
```
**3.** `useCallback` : Memoizes a callback function to prevent unnecessary re-renders.
```jsx
const memoizedCallback = useCallback(() => {
  doSomething(a, b);
}, [a, b]);
```
## Fragments
**Fragments** are a way to group multiple children elements without adding extra nodes to the DOM. They allow you to return multiple elements from a component without wrapping them in a parent element.
```jsx
function App() {
  return (
    <>
      <Header />
      <Content />
      <Footer />
    </>
  );
}
```
Fragments can also be written as `<React.Fragment>` or `Fragment` when importing React.
## Portals
**Portals** allow you to render children into a DOM node that exists outside the parent component's DOM hierarchy. This is useful for modals, popovers, and other UI elements that need to break out of the parent's container.
```jsx  
return ReactDOM.createPortal(
  <div>Modal content</div>,
  document.getElementById('modal-root')
);
```
Portals are rendered outside the parent component's DOM hierarchy but still behave like a normal React child in every other way.

## Conclusion
React components are the building blocks of a React application, allowing you to create modular, reusable UI elements. With the introduction of Hooks, functional components have become more powerful, enabling state management, lifecycle methods, and other features. Understanding components, hooks, and other React concepts is essential for building scalable and maintainable applications.
As React continues to evolve, staying up-to-date with its features and practices will help you leverage its full potential in your projects.

Happy coding! 🚀

---
For more detailed explanations and examples, check out these resources:
- [React Components - GeeksforGeeks](https://www.geeksforgeeks.org/reactjs-components/) 
- [Understanding React Components - Medium](https://medium.com/the-andela-way/understanding-react-components-37f841c1f3bb) 
- [React Components - W3Schools](https://www.w3schools.com/react/react_components.asp) 
- [React Fundamentals – JSX, Components, and Props Explained](https://www.freecodecamp.org/news/react-fundamentals/) 

























