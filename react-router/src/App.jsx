import { useState } from 'react'
import './App.css'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import Home from './Components/Home/Home'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1 className='bg-green-500 p-4 text-white rounded-md'>React-Router</h1>
    
    </>
  )
}

export default App
