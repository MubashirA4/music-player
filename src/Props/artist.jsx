import React from 'react'

const Artists = ({image, title, text}) => {
  return (
    <>
    <div>
        <div class="flex w-40 flex-col items-center justify-center p-2">
            <img class="w-80 block rounded-full" src={image} alt="" />
            <h3 class="text-white text-center text-lg">{title}</h3>
        </div>
    </div>
    </>
  )
}

export default Artists