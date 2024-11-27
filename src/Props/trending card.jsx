import React from 'react'
import Image from '../Homepage/assets/1.png'
import { CiHeart } from "react-icons/ci";


const TrendingCard = ({no, image,title,text,releaseDate, album, time}) => {
  return (
    <div className='flex'>
        <h2 className='flex pt-7 pr-4 font-bold'>#{no}</h2>
    <div className='grid grid-cols-4 w-full shadow-md rounded-xl bg-neutral-400/5 p-3'>
        <div className='flex'>
            <img src={image} alt="text" width={80} />
            <div className="text pl-5 pt-2">
                <h4 className='font-bold text-2xl'>{title}</h4>
                <p className='text-gray-200'>{text}</p>
            </div>
        </div>
            <div className='flex justify-center align-middle content-center'>
                <p className='pt-4 pr-14'>{releaseDate}</p>
            </div>
            <div>
                <h2 className='text-center'>{album}</h2>
            </div>
            <div className="time flex justify-end gap-2 pr-5">
               <CiHeart className='text-pink-500' size={26}/> {time}
            </div>
    </div>
    </div>
  )
}
export default TrendingCard

