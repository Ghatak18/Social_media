import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Topbar from './components/topbar/Topbar'
import Rightbar from './components/rightbar/rightbar'
import Feed from './components/feed/Feed'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Topbar/>
      <div className='flex flex-row'>
      <div>
        <Rightbar/>
      </div>
      <div >
        <Feed/>
      </div>
      
      </div>
      
    </>
  )
}

export default App
