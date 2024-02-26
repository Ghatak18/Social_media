import React from 'react'
import { Route, Routes } from 'react-router-dom'
import App from './pages/home/App'
import Profile from './pages/profile/profile'
import Friends from './pages/friends/Friends'

const Routess = () => {
  return (
    <>
    <Routes>
        <Route path="/" element={<App/>}></Route>
        <Route path="/profile" element={<Profile/>}></Route>
        <Route path="/friends" element={<Friends/>}></Route>
    </Routes>
    </>
  )
}

export default Routess