import React from 'react'
import Createpost from './createpost/Createpost'
import Postcontainer from './post/Postcontainer'
const Feed = () => {
  return (
    <div className='flex flex-col justify-start h-screen w-[1300px] mt-8 ml-40'>
        <div className='flex justify-start mt-3 ml-6 '>
        <Createpost className="basis-1/5"/>
        </div>
        <div className='basis-4/5'>
            <div>
                <Postcontainer/>
            </div>
        </div>
    </div>
  )
}

export default Feed