import React from 'react'
import { Route, Routes } from 'react-router-dom'
import App from './pages/home/App'
import Profile from './pages/profile/profile'

const Routess = () => {
  return (
    <>
    <Routes>
        <Route path="/" element={<App/>}></Route>
        <Route path="/profile" element={<Profile/>}></Route>
    </Routes>
    </>
  )
}

export default Routess