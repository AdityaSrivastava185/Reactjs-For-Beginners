import { useEffect, useState } from 'react'
import { getPosts } from './api'
import Postcard from './components/Postcard';
import './App.css'

function App() {

  const [data , setData] = useState(null);

  useEffect(() => {
    getPosts().then((posts) => setData(posts))
  } , [])

  return (
    <>
      <h1 className='text-2xl text-center mb-9'>Fetching data from API</h1>
      <div className='flex flex-wrap gap-10 justify-center items-center'>
      {
        data ? data.map((e) =><Postcard title = {e.title} body = {e.body} />) : <p>No Data</p>
      }
      </div>
      
    </>
  )
}

export default App
