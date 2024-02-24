import React from 'react'
// import mayankpost from "../../../assets/post/mayankpost.jpg"
// import tusharpost from "../../../assets/post/tusharpost.jpg"
// import tusharpic from "../../../assets/person/tusharpic.png"


const Post = (props) => {

    const{profpic, name, caption, cont} = props;

  return (
    <div className='flex flex-col justify-center m-4 w-[455px] shadow-xl'>
        <div className='flex justify-center'>
            <div className='flex justify-start w-[449px] bg-stone-900 my-1 rounded-lg'>
                <img className='h-14 w-14 rounded-full my-1 mx-2' src={profpic}/>
                <div className='flex flex-col mx-3  w-full'>
                    <span className='font-bold text-white text-lg'>{name}</span>
                    <span className='text-yellow-100 text-xs mt-2'>{caption}</span>
                </div>
            </div>
        </div>
        <div className='flex justify-center'>
            <img className="max-h-[600px] rounded-md" src={cont}/>
        </div>
        <div>
            
        </div>
    </div>
  )
}

export default Post