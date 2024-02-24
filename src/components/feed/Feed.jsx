import React from 'react'
import Createpost from './createpost/Createpost'
import Postcontainer from './post/Postcontainer'
import "./feed.css"
const Feed = () => {
  return (
    <div className=' feed  '>
        <div className='flex justify-start mt-3 ml-6 '>
        <Createpost className="basis-1/5 w-full"/>
        </div>
        <div className='basis-4/5 h-full'>
            <div>
                <Postcontainer/>
            </div>
        </div>
    </div>
  )
}

export default Feed