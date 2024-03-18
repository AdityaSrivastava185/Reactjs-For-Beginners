import React, { useState } from 'react'
import { useDispatch } from "react-redux" 
import './App.css'
import authService from "./appwrite/auth"
import { useEffect } from 'react';
import {login, logout} from "./store/authSlice"
import Header from "./Components/Header/Header"
import  Footer  from './Components/Footer/Footer'
import {Outlet} from "react-router-dom"

function App() {

  const [loading , setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService.getcurrentuser()
    .then((userData) => {
      if(userData){
        dispatch(login(userData))
      } else{
        dispatch(logout())
      }
    })
    .finally(() => setLoading(false))
  } , [])
  // condtional rendering
  return !loading ? (
   <div className='min-h-screen  flex flex-wrap content-between bg-black'>
    <div className="w-full block">
      <Header/>
      <main>
        <Outlet/>
      </main>
      <Footer/>
    </div>
   </div>
  ) : null 
}

export default App