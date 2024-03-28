# React Components Explained

In React, components serve as the **building blocks** of any application. They allow you to create reusable and modular pieces of UI. Let's dive into the world of React components:


## What Are Components?

- **Components** are independent and reusable bits of code.
- They represent different parts of a web page and contain both structure and behavior.
- Think of components as Lego blocks that you can assemble to create your entire UI.

## Types of Components

1. **Functional Components**:
   - These are like JavaScript functions that accept **props** (properties) and return a React element.
   - Simple, concise, and easy to write.
   - Example:
     ```jsx
     function Welcome(props) {
       return <h1>Hello, {props.name}!</h1>;
     }
     ```

2. **Class Components**:
   - More complex than functional components.
   - Can show inheritance and access data of other components.
   - Must include `extends React.Component`.
   - Example:
     ```jsx
     class Welcome extends React.Component {
       render() {
         return <h1>Hello, {this.props.name}!</h1>;
       }
     }
     ```

`Note` - Function based components are commonly used and we are going to focus mostly on development using fucntion based components

## Nesting Components

- You can nest components inside one another.
- This helps create more complex UIs and eliminates redundancy.
- Components nested inside parent components are called **child components**.

Example:
```jsx
function App() {
  return (
    <div>
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}
```

## Why Components Matter

- **Efficiency**: Compose, combine, and customize components as needed.
- **Reusability**: Use the same component in multiple places.
- **Maintainability**: Isolate logic and UI concerns.

Remember, components are the heart of React development. Happy coding! 🚀
To explore , you can check below sources to understand `components`

For more detailed explanations and examples, check out these resources:
- [React Components - GeeksforGeeks](https://www.geeksforgeeks.org/reactjs-components/) ¹
- [Understanding React Components - Medium](https://medium.com/the-andela-way/understanding-react-components-37f841c1f3bb) ²
- [React Components - W3Schools](https://www.w3schools.com/react/react_components.asp) ³
- [React Fundamentals – JSX, Components, and Props Explained](https://www.freecodecamp.org/news/react-fundamentals/) ⁴


(1) React Components - GeeksforGeeks. https://www.geeksforgeeks.org/reactjs-components/.
(2) Understanding React Components - Medium. https://medium.com/the-andela-way/understanding-react-components-37f841c1f3bb.
(3) React Components - W3Schools. https://www.w3schools.com/react/react_components.asp.
(4) React Fundamentals – JSX, Components, and Props Explained. https://www.freecodecamp.org/news/react-fundamentals/.