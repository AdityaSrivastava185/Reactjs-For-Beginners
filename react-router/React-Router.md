# React Router Documentation

## Introduction

React router is used to make mult-page application in react . React router is a third-party library for enabling the routing in the react applications

### Benefits of react router -

1. **Single-Page Applications (SPAs)**:
   - React Router enables the creation of dynamic, single-page applications (SPAs).
   - SPAs load a single HTML page and dynamically update content without full page reloads.
   - Smooth transitions between different views are achieved using React Router.

2. **Enhanced User Experience**:
   - Seamless Navigation: React Router allows users to move between different sections of your app without page refreshes.
   - URLs Update: The URL changes as users navigate, providing a better user experience and allowing users to bookmark or share specific pages.

3. **Efficient State Management**:
   - React Router manages the URL and state of your application.
   - You define potential URL patterns and associate UI components with each route.
   - This decreases the amount of code needed to maintain state and simplifies adding new features.

4. **Modular and Maintainable Code**:
   - React Router encourages a modular approach to routing.
   - Routes are defined separately, making it easier to organize and structure your application.
   - Nested routes allow you to create a hierarchy of components, improving code maintainability.

5. **Dynamic Routing and Parameters**:
   - Dynamic Routing: React Router supports dynamic routing, where parameters can be passed within the URL.
   - For example, you can create user profiles with URLs like `/users/:username`.
   - This flexibility is invaluable for building data-driven web applications.

6. **Essential Components**:
   - **BrowserRouter**: Sets up the application's navigation context.
   - **Route**: Defines individual routes and associates them with specific components.
   - **Switch**: Ensures that only one route is rendered at a time.

### Setting up the project

1. **Create a react project using vite bundler** - 
    - Create the project using the command ` npm create vite@latest `
    - Enter in the project directory by using the command ` cd <project-name> `
    - install the node module package using the command ` npm install `
    - To start the localhost server use the command ` npm run dev `

2. ** Follow the steps to remove conetent ** -
    - Remove the pre-written code from the ` App.jsx ` file
    - Your `App.js` should look like this

 ```jsx
import React from "react";
import "./index.css"

export default function App() {
  return (
    <div>
        <h1>React Router</h1>
    </div>
  )
```

3. ** Install React-router ** - 
    - open the terminal 
    - Install the react-router library in your current project 
    - Uisng the command ` npm install react-router-dom `

4. ** Add the code to `App.jsx` file ** - 
    - Update the existing code to the following code in ` App.jsx ` file inside the ` src ` folder
```jsx
import React from "react";
import "./index.css"

export default function App() {
  return (
    <main>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
        </nav>
     </main>
  );
}
// Home Page
const Home = () => (
  <Fragment>
    <h1>Home</h1>
    <FakeText />
  </Fragment>
  );
// About Page
const About = () => (
  <Fragment>
    <h1>About</h1>
    <FakeText />
  </Fragment>
  );
// Contact Page
const Contact = () => (
  <Fragment>
    <h1>Contact</h1>
    <FakeText />
  </Fragment>
  );

const FakeText = () => (
  <p>
  This is react-router dom example
  </p>
  )
```
4. ** Setting up the router ** - 
    - Import `BrowserRouter` using the command `import { BrowserRouter as Router } from "react-router-dom";`
