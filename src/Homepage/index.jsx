import React from 'react'
import Landing from './components/landing'
import Songs from './components/songs'
import Footer from '../layout/footer'

const HomePage = () => {
  return (
    <div className='homepage'>
        <Landing/>
        <Songs/>
        <Footer/>
    </div>
  )
}

export default HomePage