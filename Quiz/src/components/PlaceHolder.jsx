import React from 'react'
import { HiInboxStack } from "react-icons/hi2";

const PlaceHolder = (props) => {
  return (
    <div className='flex-col gap-3 p-4 flex justify-center items-center'>
      <HiInboxStack className='w-52 h-52 text-orange-500' />
      <h2 className='text-2xl font-bold'>Quizzes await! Make one.</h2>
      <span className='text-[13px] font-light'>
        Click below to begin your journey here..
      </span>
      <button className='p-3 px-4 text-white text-[17px] bg-orange-600 rounded-md'>
        Create my first Quiz
      </button>
    </div>
  )
}

export default PlaceHolder
