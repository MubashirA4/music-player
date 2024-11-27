import React, { useRef } from 'react'
import Cards from '../../Props/cards'
import TrendingCard from '../../Props/trending card'
import Image1 from '../assets/1.png'
import Trending1 from '../assets/Trending 1.png'
import Artists from '../../Props/artist'
import { IoAdd } from "react-icons/io5";


const Songs = () => {
  const newReleaseSongs = useRef(null);

  const scrollToNewRelease = () =>{
    newReleaseSongs.current?.scrollIntoView({ behavior: 'smooth'});
  }


  return (
    <>
    {/* Weekly Top */}
    <div className=''>
        <h4 className='text-4xl font-bold pb-6 mt-14'>Weekly Top <span className='text-pink-500'>Songs</span></h4>
        <div className='flex gap-5'>
            <Cards image={Image1} title="Whatever It takes" text="Imagne dragons"/>
            <Cards image={Image1} title="Whatever It takes" text="Imagne dragons"/>
            <Cards image={Image1} title="Whatever It takes" text="Imagne dragons"/>
            <Cards image={Image1} title="Whatever It takes" text="Imagne dragons"/>
            <div class="flex items-center justify-center">
              <div class="flex flex-col items-center">
                <div class="add shadow-md rounded-xl rounded-full w-min bg-neutral-400/5 p-4">
                  <IoAdd size={30} />
                </div>
                <p>View All</p>
              </div>
            </div>
        </div>
    </div>


    {/* New Release */}
    <div ref={newReleaseSongs}>
        <h4 className='text-4xl font-bold pt-16 pb-6'>New Release <span className='text-pink-500'>Songs</span></h4>
        <div className='flex gap-5'>
            <Cards image={Image1} title="Whatever It takes" text="Imagne dragons"/>
            <Cards image={Image1} title="Whatever It takes" text="Imagne dragons"/>
            <Cards image={Image1} title="Whatever It takes" text="Imagne dragons"/>
            <Cards image={Image1} title="Whatever It takes" text="Imagne dragons"/>
            <div class="flex items-center justify-center">
              <div class="flex flex-col items-center">
                <div class="add shadow-md rounded-xl rounded-full w-min bg-neutral-400/5 p-4">
                  <IoAdd size={30} />
                </div>
                <p>View All</p>
              </div>
            </div>
        </div>
    </div>
    {/* Trending */}
    <div>
    <h4 className='text-4xl w-full font-bold pt-16 pb-6'>Trending <span className='text-pink-500'>Songs</span></h4>
    <div className='grid grid-cols-4 align-middle'>
      <div></div>
      <div><p className='text-center'>Release date</p></div>
      <div><p className='text-center'>Album</p></div>
      <div><p className='text-center pl-32'>Duration</p></div>
    </div>
    <TrendingCard no={1} image={Trending1} title="Sorforce" text="The neighberhood" releaseDate="Nov 4, 2023" album="Hard to Imagine the Neighbourhood Ever Changing"  time="3:26" />
    <TrendingCard no={1} image={Trending1} title="Sorforce" text="The neighberhood" releaseDate="Nov 4, 2023" album="Hard to Imagine the Neighbourhood Ever Changing"  time="3:26" />
    <TrendingCard no={1} image={Trending1} title="Sorforce" text="The neighberhood" releaseDate="Nov 4, 2023" album="Hard to Imagine the Neighbourhood Ever Changing"  time="3:26" />
    </div>

    {/* Popular Artists */}
    <div>
        <h4 className='text-4xl w-full font-bold pt-16 pb-6'>Popular <span className='text-pink-500'>Artists</span></h4>
    <div className='flex gap-5'>
      <Artists image={Trending1} title="Name"/>
      <Artists image={Trending1} title="Name"/>
      <Artists image={Trending1} title="Name"/>
      <Artists image={Trending1} title="Name"/>
      <Artists image={Trending1} title="Name"/>
      <Artists image={Trending1} title="Name"/>
      <div class="flex items-center justify-center">
            <div class="flex flex-col items-center">
              <div class="add shadow-md rounded-xl rounded-full w-min bg-neutral-400/5 p-4">
                  <IoAdd size={30} />
              </div>
                <p>View All</p>
            </div>
        </div>
      </div>
    </div>


    </>
  )
}

export default Songs