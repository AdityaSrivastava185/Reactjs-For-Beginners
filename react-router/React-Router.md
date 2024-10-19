# React Router Documentation

## Introduction

React router is used to make mult-page application in react . React router is a third-party library for enabling the routing in the react applications

React Router is a crucial library for enabling routing in React applications. It allows you to manage multiple pages or views within a single-page application (SPA). This documentation aims to provide beginners with a step-by-step guide on how to set up and use React Router effectively.

For instance, in a traditional website, when a client sends a request through the browser, the server responds by sending a complete HTML page. If the user clicks on any link, a brand-new request is sent to the server, and the server again responds with a full page.

However, in a React application using the React Router library, the server initially sends the HTML page along with the routing logic.
  - Initially, the HTML page sent to the browser is virtually empty. React then dynamically loads the content.
  - When the user clicks on a link, React Router intercepts the request, preventing it from going to the server. Instead, it uses client-side routing to update the content on the page without a full page reload.
  - This approach reduces the number of server requests and gives users the impression of faster responses, as only the necessary content is loaded dynamically.

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

## Advanced Concepts of React Router

### 1. Nested Routes

Nested routes allow you to define sub-routes within a parent route. This is particularly useful for building hierarchical views, such as a user profile section. This allows you to build complex layouts by nesting components inside other components. This is useful when different parts of the page share a similar layout but have different content.

```jsx
// Profile.jsx
import React from "react";
import { Outlet, NavLink } from "react-router-dom";

const Profile = () => {
  return (
    <div>
      <h2>User Profile</h2>
      <nav>
        <NavLink to="settings">Settings</NavLink>
        <NavLink to="posts">Posts</NavLink>
      </nav>
      <Outlet /> {/* Renders child routes */}
    </div>
  );
};

// App.jsx
import Profile from "./components/Profile";
import Settings from "./components/Settings";
import Posts from "./components/Posts";

<Router>
  <Routes>
    <Route path="profile" element={<Profile />}>
      <Route path="settings" element={<Settings />} />
      <Route path="posts" element={<Posts />} />
    </Route>
  </Routes>
</Router>
```

In this example,
  - `Profile` component serves as a parent route with nested routes for `Settings` and `Posts`.
  - The `NavLink` elements provide navigation within the Profile page. 
  - The `Outlet` component is used to render the nested child components (`Settings` and `Posts`) based on the current    route path (`/profile/settings` or `/profile/posts`).

### 2. Protected Routes (Authentication)

To protect certain routes, such as user profile or dashboard pages, you can implement a "Protected Route" mechanism that checks if the user is authenticated before granting access. If the user is not authenticated, they will be redirected to a login page.

```jsx
// PrivateRoute.jsx
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ element: Component, isAuthenticated }) => {
  return isAuthenticated ? <Component /> : <Navigate to="/login" />;
};

// App.jsx
<Route path="/profile" element={<PrivateRoute element={Profile} isAuthenticated={user.isAuthenticated} />} />
```

In this example, 
  - `PrivateRoute` : This checks if the user is authenticated. If not, the user is redirected to the login page.
  - `Navigate` : This is used to programmatically redirect users to a different route, in this case, `/login`.
  - `Route` : The `PrivateRoute` component wraps the `Profile` route. It ensures that only authenticated users can access the profile page.

### Use Case

This method is commonly used to protect sensitive routes like dashboards, settings, or profile pages, ensuring that only logged-in users can access these sections.

### 3. Dynamic Routing with URL Parameters

React Router allows you to define dynamic routes by passing parameters in the URL. These parameters can be accessed within your components to render content specific to that route.

```jsx
// Post.jsx
import { useParams } from "react-router-dom";

const Post = () => {
  const { id } = useParams(); // Access the dynamic 'id' parameter from the URL
  return <h2>Post ID: {id}</h2>; // Display the post ID
};
```

In this example, the `useParams` hook from React Router is used to access the `id` parameter from the URL, allowing you to dynamically display content based on that value.

```jsx
// App.jsx
<Route path="/post/:id" element={<Post />} />
```

In the `App.jsx`, the route `/post/:id` defines a dynamic route where the `:id` is a placeholder for the actual value that will be passed in the URL. When the user navigates to `/post/1`, for example, Post component will render with id being 1.

### Use Case

This is useful for creating pages that display dynamic content, such as viewing blog posts, user profiles, or products where each has a unique identifier within the URL.

### 4. Lazy Loading with React Router

Lazy loading allows you to defer loading components until they are needed, optimizing the performance of your React application by reducing the initial bundle size. React Router integrates well with React's `lazy` and `Suspense` to enable this feature.

```jsx
import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Home = lazy(() => import("./components/Home"));
const About = lazy(() => import("./components/About"));

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
```
### Use Case

Lazy loading is ideal for large applications where certain routes/components might not be accessed frequently. It helps reduce the app's initial load time, enhancing the user experience by loading only necessary components on demand.

### 5. 404 Error Handling

When users try to access a route that doesn't exist in your application, it's essential to provide a user-friendly 404 error page to enhance the overall experience. React Router makes it easy to define a fallback route for handling undefined paths.

```jsx
// NotFound.jsx
const NotFound = () => {
  return <h2>404 - Page Not Found</h2>;
};

// App.jsx
import NotFound from "./components/NotFound";

<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
  {/* Catch-all route for undefined paths */}
  <Route path="*" element={<NotFound />} />
</Routes>
```
### Use Case

In larger applications, it's common for users to enter incorrect URLs or navigate to pages that no longer exist. By adding a 404 page, you can gracefully inform users that the page they are looking for is unavailable. The catch-all route (path="*") ensures that any undefined paths will render the NotFound component, preventing blank pages or confusing errors.