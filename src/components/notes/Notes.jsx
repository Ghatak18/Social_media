import React from 'react'

const Notes = () => {
  return (
    <div className='h-full w-96 flex-4 fixed right-0'>
        <div className='bg-stone-700 h-15 flex justify-center'> 
            <span className='text-yellow-50 m-3'>Remenber Me!!</span>
        </div>
        <div>
            <textarea className='p-3 border-none outline-none  h-screen w-full bg-stone-300'></textarea>
        </div>
    </div>
  )
}

export default Notes