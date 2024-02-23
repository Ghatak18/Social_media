import React from 'react'
import mypic from "../../../assets/person/selfie1.jpg"
import { FaPhotoFilm } from "react-icons/fa6";
const Createpost = () => {
  return (
    <div className='flex border-2 shadow-lg rounded-lg w-96'>
        <img className="h-16 w-16 rounded-full" src={mypic}/>
        <input className="bg-transparent ml-2 outline-none border-none"placeholder='Whats on your mind today'></input>
        <FaPhotoFilm className='ml-12 mt-5 size-6'/>
    </div>
  )
}

export default Createpost