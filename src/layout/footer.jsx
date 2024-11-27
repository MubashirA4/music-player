import React from 'react'
import { Link } from 'react-router-dom'
import { LiaFacebookSquare } from "react-icons/lia";
import { FaInstagram } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";


const Footer = () => {
  return (
    <div className='footer grid grid-cols-5 bg-neutral-800 border-t-2 mt-10 text-white shadow-t font-vazirmatn'>
      <div className="about mt-8">
        <h4 className='text-3xl font-bold'>About</h4>
        <p className='font-thin'>Melodies is a website that has been created for over <span className='text-pink-500'> 5 year’s </span>now and it is one of the most famous music player website’s in the world. in this website you can listen and download songs for free. also of you want no limitation you can buy our <span className='text-sky-600'> premium pass’s.</span></p>
      </div>
      <div className="melodies mt-8">
        <div className='border-b-4 w-fit m-auto pb-2'>
        <h4 className='text-2xl font-bold text-center'>Melodies</h4>
        </div>
        <ul className='flex flex-col gap-2 text-center pt-3'>
          <li><Link to="/">Songs</Link></li>
          <li><Link to="/">Radio</Link></li>
          <li><Link to="/">Podcast</Link></li>
        </ul>
      </div>
      <div className="melodies mt-8">
      <div className='border-b-4 w-fit m-auto pb-2'>
        <h4 className='text-2xl font-bold text-center'>Access</h4>
        </div>
        <ul className='flex flex-col gap-2 text-center pt-3'>
          <li><Link to="/">Explore</Link></li>
          <li><Link to="/">Artists</Link></li>
          <li><Link to="/">Playlists</Link></li>
          <li><Link to="/">Albums</Link></li>
          <li><Link to="/">Trending</Link></li>
        </ul>
      </div>
      <div className="melodies mt-8">
      <div className='border-b-4 w-fit m-auto pb-2'>
        <h4 className='text-2xl font-bold text-center'>Contact</h4>
        </div>
        <ul className='flex flex-col gap-2 text-center pt-3'>
          <li><Link to="/">About</Link></li>
          <li><Link to="/">Policy</Link></li>
          <li><Link to="/">Social Media</Link></li>
        </ul>
      </div>
      <div className="melodies mt-16">
     <Link to="/">
        <h2 className="bg-gradient-to-r from-pink-500 from-10% via-purple-500 via-200% to-sky-500  bg-clip-text   text-transparent font-bold text-3xl pl-3">
            Melodies
          </h2>
     </Link>
        <ul className='flex gap-6 mt-6'>
          <li><Link ><LiaFacebookSquare size={26} /></Link></li>
          <li><Link ><FaInstagram size={26}/></Link></li>
          <li><Link ><CiTwitter size={26}/></Link></li>
          <li><Link ><IoCallOutline size={26}/></Link></li>
        </ul>
      </div>
    </div>
  )
}

export default Footer