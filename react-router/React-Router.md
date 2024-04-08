# React Router Documentation

## Introduction

React router is used to make mult-page application in react . React router is a third-party library for enabling the routing in the react applications

React Router is a crucial library for enabling routing in React applications. It allows you to manage multiple pages or views within a single-page application (SPA). This documentation aims to provide beginners with a step-by-step guide on how to set up and use React Router effectively.

### Benefits of React Router

1. **Single-Page Applications (SPAs)**:
   - React Router facilitates the development of SPAs, where content dynamically updates without full page reloads.
   - Seamless transitions between different views enhance the user experience.

2. **Enhanced User Experience**:
   - Navigation is smooth, allowing users to move between sections of the application without page refreshes.
   - URLs update dynamically as users navigate, improving bookmarking and sharing capabilities.

3. **Efficient State Management**:
   - React Router manages both URL and application state, reducing complexity in state management.
   - By associating UI components with specific routes, React Router simplifies feature addition and maintenance.

4. **Modular and Maintainable Code**:
   - Routes are defined separately, promoting a modular code structure.
   - Nested routes enable hierarchical organization of components, enhancing code maintainability.

5. **Dynamic Routing and Parameters**:
   - Supports dynamic routing where parameters can be passed within the URL.
   - Dynamic routing facilitates the creation of data-driven web applications.

6. **Essential Components**:
   - **BrowserRouter**: Sets up the navigation context for the application.
   - **Route**: Defines individual routes and associates them with components.
   - **Switch**: Ensures only one route is rendered at a time.

## Setting up the Project

1. **Create a React Project using Vite Bundler**:
    - Use `npm create vite@latest` to create a Vite-based React project.
    - Navigate to the project directory with `cd <project-name>`.
    - Install dependencies with `npm install`.
    - Start the development server with `npm run dev`.

2. **Remove Pre-written Code**:
    - Remove existing code from `App.jsx`.
    - Ensure `App.jsx` contains only the necessary structure.

3. **Install React Router**:
    - Use `npm install react-router-dom` to install React Router.

4. **Update `App.jsx`**:
    - Replace existing code in `App.jsx` with the following-

```jsx
import React from "react";
import { BrowserRouter as Router, Route , Routes } from "react-router-dom";
import Home from "./component/Home/Home";
import About from "./component/About/About";
import Contact from "./component/Contact/Contact";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
    </Router>
  );
}

export default App;

```

5. **Create Components**:
    - Inside the `src` folder, create a `components` folder.
    - Within `components`, create folders named `Home`, `About`, and `Contact`.
    - Inside each folder, create files named `Home.jsx`, `About.jsx`, and `Contact.jsx`, respectively.
    - Add content to each file to represent the respective component's content.

6. **Implement Navigation**:
    - Within each component, use `NavLink` from `react-router-dom` to create navigation links in different components of the folder such as `Home.jsx` , `About.jsx` , `Contact.jsx`

In `Home.jsx`:
```jsx
import React from 'react';
import { NavLink } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h2>Home</h2>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/contact">Contact</NavLink>
    </div>
  );
};
export default Home;
```
In `About.jsx`:
```jsx
import React from 'react';
import { NavLink } from 'react-router-dom';

const About = () => {
  return (
    <div>
      <h2>About</h2>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/contact">Contact</NavLink>
    </div>
  );
};
export default About;
```
In `Contact.jsx`:
```jsx
import React from 'react';
import { NavLink } from 'react-router-dom';

const Contact = () => {
  return (
    <div>
      <h2>Contact</h2>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
    </div>
  );
};
export default Contact;
```

In our `App.jsx` file:

- We use `BrowserRouter as Router` to create the router context.
- Inside `Routes`, we define multiple `Route` components.
- Each `Route` has a `path` that defines the URL pattern it should match.
- We use the `element` prop to specify the component to render when each route matches.
- The `Home`, `About`, and `Contact` components are rendered based on the current URL path.

This setup ensures that the correct component is rendered based on the user's navigation within the application.
This is the way to use roting in the reactjs to create multi-page applications , we will look at advance concepts of reacct routing in the projects