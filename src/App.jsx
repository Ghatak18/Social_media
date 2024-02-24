import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Topbar from './components/topbar/Topbar'
import Rightbar from './components/rightbar/rightbar'
import Feed from './components/feed/Feed'
import Notes from './components/notes/Notes'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Topbar/>
      

      <div className='flex w-full'>
      <div className='r'>
          <Rightbar/>
        </div>
        <div className='feed'>
          <Feed/>
        </div>
        <div className='n'>
          <Notes/>
        </div>
      </div>
      
    </>
  )
}

export default App
