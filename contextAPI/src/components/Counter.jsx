import React from 'react'
import { useContext } from 'react'
import { counterContext } from '../context/ContextCounter'


function Counter() {
    const CounterContext = useContext(counterContext)
  return (
    <div>
      <button onClick={() => CounterContext.setCount(CounterContext.count + 1)}>Increment</button>
      <button onClick={() => CounterContext.setCount(CounterContext.count - 1)}>Decrement</button>
    </div>
  )
}

export default Counter
