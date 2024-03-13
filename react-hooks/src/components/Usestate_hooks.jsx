import React, { useState } from 'react'

// In this program we are understanding the concept of "useState" hook by making a basic counter value program

function Usestate_hooks() {

  // using "useState" hook to update the value
  let [value, setValue] = useState(0);

  // function to increase the value by 1
  let addVlaue = () => {
    setValue(value + 1);
  };

  //function to decrease the value by 1
  let removeValue = () => {
    setValue(value - 1);
  };


  return (
    <div>
        <h1 className="font-bold mb-3">React Hooks</h1>
      <h2 className="text-gray-900 font-bold mb-5">COUNTER VALUE - {value}</h2>
      <div className="flex gap-20 flex-wrap">
        <button
          className="bg-blue-700 text-white p-12px rounded-md"
          onClick={addVlaue}
        >
          Add value
        </button>
        <button
          className="bg-blue-700 text-white p-12px rounded-md"
          onClick={removeValue}
        >
          Remove value
        </button>
      </div>
      
    </div>
  )
}

export default Usestate_hooks
