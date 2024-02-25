import React from 'react'
import { AiFillLike } from "react-icons/ai";
import { FaHeart } from "react-icons/fa6";
import { FaComment } from "react-icons/fa";


const Underpost = () => {
  return (
    <div className='flex justify-between mx-3'>
      <likediv className='text-neutral-200 flex'>
      <likeicon className='text-neutral-200 text-3xl flex '>
        {/* <AiFillLike/> */}
        <FaHeart className='ml-{-3}'/>
      </likeicon>
      <liketext className="ml-2">
        <span> 5 likes</span>
      </liketext>
      </likediv>
      <commentdiv className="flex text-neutral-200 ">
        <FaComment/>
        <span className='ml-2'>2 comments</span>
      </commentdiv>
    </div>
  )
}

export default Underpost