import { useState } from 'react'
import './App.css'
import Counter from './components/Counter'
import { useContext } from 'react'
import { counterContext } from './context/ContextCounter'

function App() {
  const counterState = useContext(counterContext)

  console.log("Context" , counterState)

  return (
    <div className='app'>
    <h1>Context API in reactjs</h1>
    <h4>Count is {counterState.count}</h4>
    <Counter/>
    <Counter/>
    <Counter/>
    <Counter/>
    </div>
  )
}

export default App
