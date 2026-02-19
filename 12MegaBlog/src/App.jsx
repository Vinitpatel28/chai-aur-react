import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Outlet } from 'react-router-dom'
import './App.css'
import authService from "./appwrite/auth"
import { login, logout} from "./store/authSlice"
import {Header, Footer} from "./components"

function App() {
  const [loading, setLoding] = useState(true)
  const dispatch = useDispatch()

  useEffect(() =>{
    authService.getCurrentUser()
    .then((userData) =>{
      if(userData){
        dispatch(login({userData}))
      }else{
        dispatch(logout())
      }
    })
    .finally(() => setLoding(false))
  },[])

  return !loading ? (
    <div className='min-h-screen flex flex-col bg-gray-50'>
      <Header />
      <main className='flex-1'>
        <Outlet />
      </main>
      <Footer />
    </div>
  ) : null
}

export default App
