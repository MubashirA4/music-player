import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className="sidebar pt-10 bg-neutral-800 w-64 font-vazirmatn">
      <div className='mx-12'>
        <div className=''>
          <Link>
            <h2 className="bg-gradient-to-r from-pink-500 from-10% via-purple-500 via-200% to-sky-500  bg-clip-text text-transparent font-bold text-4xl">
              Melodies
            </h2>
          </Link>
        </div>
        <div className='menu mt-8'>
          <p className='text-pink-700 pb-4'>Menu</p>
          <ul>
            <li className='text-white pb-4'><Link> Home </Link></li>
            <li className='text-white pb-4'><Link> Discover </Link></li>
            <li className='text-white pb-4'><Link> Albums </Link></li>
            <li className='text-white pb-4'><Link> Artists </Link></li>
          </ul>
        </div>
        <div className='library'>
          <p className='text-pink-700 pb-4'>Library</p>
          <ul>
            <li className='text-white pb-4'><Link>Recently Added</Link></li>
            <li className='text-white pb-4'><Link>Most Played </Link></li>
          </ul>
        </div>
        <div className='playlist'>
          <p className='text-pink-700 pb-4'>Playlist and fovorite</p>
          <ul>
            <li className='text-white pb-4'><Link>Your favourites </Link></li>
            <li className='text-white pb-4'><Link>Your Playlist</Link></li>
            <li className='text-sky-600 pb-4'><Link>Add playlist</Link></li>
          </ul>
        </div>
        <div className='playlist'>
          <p className='text-pink-700 pb-4'>general</p>
          <ul>
            <li className='text-white pb-4'><Link>Setting </Link></li>
            <p className='text-pink-500 pb-4'>Logout</p>

          </ul>
        </div>
      </div>
    </div>
  )
}

export default Sidebar