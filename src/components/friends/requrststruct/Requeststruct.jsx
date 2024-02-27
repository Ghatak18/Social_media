import React from 'react'
import ankitapic from "../../../assets/person/ankitapic.png"
import Friendcard from '../friendcard/Friendcard'

const Requeststruct = (props) => {
    const {pic} = props
  return (
    <div className='ml-[320px] p-5 pt-2 bg-[url("https://www.designbolts.com/wp-content/uploads/2012/11/Free-medium-dark-Tileable-Pattern-Website-Background.jpg")]' >
        <span className='text-neutral-300 text-2xl font-extrabold'>Friend Requests</span>
    <div className=' p-2 grid grid-cols-6 gap-2 bg-red-400 bg-[url("https://www.designbolts.com/wp-content/uploads/2012/11/Free-medium-dark-Tileable-Pattern-Website-Background.jpg")]'>
        <Friendcard pic={ankitapic} name="Ankita Gorai" upbut="Confirm" downbut="Delete"/>
    </div>
    </div>
  )
}

export default Requeststruct