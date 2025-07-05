import React from 'react'

export const TempleImageComp = (props) => {
  return (
    <div className='relative w-full border-1'>
        <img src={props.img} alt="" className='w-full h-100'/>
        <div className='absolute  inset-0 bg-black opacity-40'></div>
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white justify-items-center  text-6xl font-bold'>
            {props.statement}
        </div>

    </div>
  )
}
