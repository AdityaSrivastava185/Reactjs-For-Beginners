import { useState } from "react";
import "./App.css";
import Useeffect_hooks from "./components/Useeffect_hooks";
import Usestate_hooks from "./components/Usestate_hooks";


function App() {
  
  let [visible , setVisible] = useState(false)
  
  return (
    <>
      <Usestate_hooks/>
      <button className="bg-blue-700 text-white p-12px rounded-md mt-10 items-center" onClick={() => {setVisible(!visible)}}>Toggle</button>
      {visible ? <Useeffect_hooks/> : <></>}
    </>
  );
}

export default App;
