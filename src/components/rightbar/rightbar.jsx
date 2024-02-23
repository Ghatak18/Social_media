import React from 'react'
import ankitapic from "../../assets/person/ankitapic.png"
import fizapic from "../../assets/person/fizapic.png"
import mayankpic from "../../assets/person/mayankpic.png"
import tusharpic from "../../assets/person/tusharpic.png"
import { FaSearch } from "react-icons/fa";
import Friendson from '../friendson/friendson';



const Rightbar = () => {
  return (
    <div className='bg-slate-900 text-yellow-50 h-screen w-80 fixed left-0 top-16 '>
        <div className='flex justify-between'>
            <span className='ml-4 my-4'>Friend Requests</span>
            <span className='mr-4 my-4 '>See All</span>
        </div>
        <div className='m-4 '>
            <div className=' flex'>
                <img className="rounded-full h-16 w-16  mb-1"src={ankitapic}/>
                <div className='ml-4 flex flex-col '>
                    <span className='font-bold text-xl'> Ankita Gorai</span>
                    <span className='text-sm'>1 mutual friend</span>
                </div>
                <div className='flex justify-center ml-14'>
                <span className='text-xs'>3d</span>
                </div>
            </div>
            <div className='flex justify-around mt-2'>
                <button className='bg-purple-950 hover:bg-cyan-800'>Accept</button>
                <button className='bg-purple-950 hover:bg-cyan-800'>Delete</button>
            </div>
        </div>
        <hr></hr>
        <div>
        <div className='flex justify-between'>
            <span className='ml-4 my-4'>Friends Online</span>
            <FaSearch className='mr-4 my-4'/>
        </div>
        <div>
            <Friendson img={fizapic} name = "Fiza Yasmin" />
            <Friendson img={mayankpic} name = "Mayank mallick" />
            <Friendson img={tusharpic} name = "Tushar Kanti Das" />
        </div>

        </div>
    </div>
  )
}

export default Rightbar