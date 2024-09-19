import { useEffect } from 'react';
import './App.css';

function App() {

  //fetch User function
  const getUser = () => {
    fetch("http://localhost:3001/api/user")
    .then(res => res.json())
    .then(json => console.log(json))
  }

  useEffect(() => {
    getUser()
  },[])

  return (
    <div>
      App
    </div>
  );
}

export default App;
