import React from 'react'

const ImageContainer = (props) => {
  return (
    <div className='h-96 w-80 shrink-0 overflow-hidden relative rounded-4xl bg-black'>
        <img className ='h-full w-full object-cover'src="{props.img}" alt="{props.title}" />
        <div className="absolute bottom-5 left-5">
                <h2 className="text-white text-2xl font-bold">
                    {props.title}
                </h2>
            </div>
    </div>
  )
}

export default ImageContainer