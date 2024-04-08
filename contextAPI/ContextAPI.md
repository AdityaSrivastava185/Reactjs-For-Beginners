# React Context API Documentation

## Introduction

In this documentation, we'll guide you through setting up the React Context API for state management in a React application. We'll create a simple counter application to demonstrate how to use the Context API to share state between components.

## Step 1: Create a Project Using Vite

1. Open your terminal or command prompt.
2. Run the following command to create a new project using Vite:

```bash
npm create vite@latest
```

3. Enter the desired project name when prompted (e.g., `my-react-context-app`).
4. Choose a package manager (npm or yarn) for the project.
5. Select `react` as the framework for the project.
6. Choose `javascript` as the language for the project.
7. Once the project is created, navigate to the project directory using the following command:

```bash
cd my-react-context-app
```

8. Install the necessary Node.js packages for the project by running the following command:

```bash
npm install
```

9. Start the development server by running the following command:

```bash
npm run dev
```

10. Your React application will be served at the specified localhost address, typically `http://localhost:3000`.


## Step 2: Create a Components Folder

1. Navigate to the root directory of your project which is inside the `src` folder.
2. Create a folder named `components`.

## Step 3: Navigate to  `App.jsx` file Inside the src Folder

1. Inside the `src` folder, Go to the file named `App.jsx`.
2. This file will serve as the main component of your application.
3. We will make the files further in the project which is included in the `App.jsx` file

```jsx
import { useState } from 'react';
import './App.css';
import Counter from './Counter';
import { useContext } from 'react';
import { counterContext } from '../context/ContextCounter';

function App() {
  // Access the counterContext using useContext hook
  const counterState = useContext(counterContext);

  // Log the context value to the console for debugging
  console.log("Context", counterState);

  return (
    <div className='app'>
      <h1>Context API in ReactJS</h1>
      {/* Display the current count */}
      <h4>Count is {counterState.count}</h4>
      {/* Render the Counter component multiple times */}
      <Counter />
      <Counter />
      <Counter />
      <Counter />
    </div>
  );
}

export default App;
```

**Explanation**:
- `useState`: `useState` is a hook in React that allows functional components to manage state. We're not using it here directly, but we're importing it as a standard practice in React applications.
- `Counter`: The `Counter` component is imported and rendered multiple times in the `App` component. This component will display buttons to increment and decrement the count.
- `useContext`: `useContext` is a hook in React used to access the context value. We use it here to access the `counterContext`.
- `counterContext`: `counterContext` is a context object created using `createContext` in the `ContextCounter.jsx` file. It provides a way to share the counter state across different components.

## Step 4: Create `Context` Folder

1. Inside the `src` folder (root directory), create a folder named `context`.
2. This folder will contain files related to the Context API.

## Step 5: Create `ContextCounter.jsx` file Inside the Context Folder

1. Inside the `context` folder, create a file named `ContextCounter.jsx`.
2. This file will define the context and provider for the counter state.

```jsx
import React, { createContext, useState } from 'react';

// Create a context object
export const counterContext = createContext(null);

// Define provider component
export const CounterProvider = (props) => {
  // Define counter state
  const [count, setCount] = useState(0);

  return (
    // Provide counter state value and setter function to the context provider
    <counterContext.Provider value={{ count, setCount }}>
      {props.children}
    </counterContext.Provider>
  );
};
```

**Explanation**:
- `createContext`: `createContext` is a function provided by React to create a new context object. It creates a context object named `counterContext` in this case.
- `CounterProvider`: `CounterProvider` is a provider component responsible for providing the counter state to its children components. It wraps its children with `counterContext.Provider` and makes the counter state available to them.
- `useState`: `useState` is used inside the `CounterProvider` component to define the counter state (`count`) and its setter function (`setCount`). It initializes the count state with a default value of `0`.

## Step 6: Create `Counter.jsx` Inside the Components Folder

1. Inside the `components` folder, create a file named `Counter.jsx`.
2. This file will contain the `Counter` component responsible for displaying and updating the count.

```jsx
import React from 'react';
import { useContext } from 'react';
import { counterContext } from '../context/ContextCounter';

function Counter() {
  // Access the counterContext using useContext hook
  const CounterContext = useContext(counterContext);

  return (
    <div>
      {/* Button to increment count */}
      <button onClick={() => CounterContext.setCount(CounterContext.count + 1)}>Increment</button>
      {/* Button to decrement count */}
      <button onClick={() => CounterContext.setCount(CounterContext.count - 1)}>Decrement</button>
    </div>
  );
}

export default Counter;
```

**Explanation**:
- `CounterContext`: `CounterContext` is the context object obtained using the `useContext` hook. It contains the current count (`count`) and the setter function (`setCount`) to update the count.
- `useContext`: `useContext` is used to access the context value. Here, it is used to access the `counterContext` object defined in `ContextCounter.jsx`.
- `counterContext`: `counterContext` is imported from the `ContextCounter.jsx` file. It provides access to the counter state and setter function across different components.

## Step 7: Update `main.jsx` (or `index.js`)

1. In the root directory of your project, locate the entry point file (`main.jsx` or `index.js`).
2. Update the entry point file to initialize the React application with the context provider.

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './index.css';
import { CounterProvider } from './context/ContextCounter';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Wrap the App component with CounterProvider */}
    <CounterProvider>
      <App />
    </CounterProvider>
  </React.StrictMode>,
);
```

**Explanation**:
- `CounterProvider`: `CounterProvider` wraps the `App` component with the `CounterProvider` component. This ensures that the counter state is available to all components within the `CounterProvider` component.
- `ReactDOM.createRoot`: `createRoot` is a method provided by `ReactDOM` for creating a root-level element for rendering React components. Here, it renders the `App` component wrapped with `CounterProvider` inside the root element with the id `root`.

