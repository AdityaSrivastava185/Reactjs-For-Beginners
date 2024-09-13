## React Fullstack App
This project consists of a simple full-stack application using Express.js for the backend and React.js for the frontend. The application demonstrates a basic setup for handling HTTP requests and displaying data.

### Prerequisites
Before you begin, ensure you have the following installed on your system:

- Node.js
- npm

### Setting Up the Backend
Navigate to the backend directory in the terminal and set up the project:
```
npm init -y
npm install express cors
```

### Creating the Backendfiles
Create a file named `index.js` and add the following code to initialize an Express server:

```
import express from "express";
import cors from "cors";

const app = express();
const PORT = 3001;

app.use(cors());

app.get("/", (req, res) => {
    res.send("Server is ready");
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
```
### Adding User API Endpoint
Create a file named users.js with user data or copy it from the repository `react-nodejs-backend/react-backend/users.js`. 
Import this file into index.js and set up the user API endpoint:

```
import users from "./users.js"; // Adjust path as needed

app.get("/api/users", (req, res) => {
    res.send(users);
});
```

### Run the backend using:
```
node ./index.js
```
### Setting Up the Frontend:
Navigate to the frontend directory and create the React app:
```
cd frontend
npx create-react-app user-app
cd user-app
npm start
```

### Cleaning Up Default Files:
Remove unnecessary files and modify the main files:
```
rm -f public/logo*.png src/App.test.js src/logo.svg src/reportWebVitals.js
```
Update src/index.js by removing the reportWebVitals import and call.

### Modifying the App Component:
Edit src/App.js to include the user-fetching logic:
```
import React, { useEffect } from 'react';
import './App.css';

function App() {
  const getUser = () => {
    fetch("http://localhost:3001/api/users")
      .then(res => res.json())
      .then(json => console.log(json));
  }

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div className="App">
      <h1>Users</h1>
    </div>
  );
}

export default App;
```
Now, when you navigate to the frontend and open the console, you should see the array of users fetched from the backend.

Conclusion
This setup provides a basic structure for developing a full-stack application using Express and React. Further customization and functionality can be added as per project requirements.
