import React, { useEffect } from 'react'
import { useState } from 'react'


function Useeffect_hooks() {

    const [count , setCount] = useState(0);

    useEffect(() => {
        console.log("count component is mounting.....")
    } , [count])

    useEffect(() => {
        console.log("Component is mounting.....")

        // To return the unmount state , return the function inside of the "useEffect" hook
        return function(){
            console.log("Component is unmounting.....")
        }
    } , [])

  return (
    <div>
        <h1 className='font-bold mt-3'>UseEffect Hook</h1>
      <h2 className='text-gray-900 font-bold mb-5'>Count-1 is { count }</h2>
      <div className='flex gap-10 justify-center'>
      <button className='bg-blue-700 text-white p-12px rounded-md' onClick={() => {setCount(count + 1)} }>Add</button>
      </div>
    </div>
  )
}

export default Useeffect_hooks
