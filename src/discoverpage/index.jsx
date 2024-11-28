import React from 'react'
import { IoAdd } from "react-icons/io5";
import Header from '../layout/header'
import Footer from '../layout/footer';
import Cards from '../Props/cards'
import Artists from '../Props/artist'
import MusicVedio from '../Props/vedio';
import Pop from '../Assets/pop track.png'
import Artist1 from '../Assets/eminem.png';
import Vedio1 from '../Assets/shape of you.png'
import New1 from '../Assets/time.png'

const Discover = () => {
    return (
        <div className='flex flex-col space-y-8'>
            <Header />
            <div className='' >
                <h4 className='text-4xl font-bold pb-6'>Music <span className='text-pink-700'>Genres</span></h4>
                <div className='flex gap-5'>
                    <Cards image={Pop} title="Whatever It takes" text="Imagne dragons" />
                    <Cards image={Pop} title="Whatever It takes" text="Imagne dragons" />
                    <Cards image={Pop} title="Whatever It takes" text="Imagne dragons" />
                    <Cards image={Pop} title="Whatever It takes" text="Imagne dragons" />
                    <div class="flex items-center justify-center">
                        <div class="flex flex-col items-center">
                            <div class="add shadow-md rounded-full w-min bg-neutral-400/5 p-4">
                                <IoAdd size={30} />
                            </div>
                            <p>View All</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='' >
                <h4 className='text-4xl font-bold pb-6 mt-7'>Mood <span className='text-pink-700'>Playlist</span></h4>
                <div className='flex gap-5'>
                    <Cards image={Pop} title="Whatever It takes" text="Imagne dragons" />
                    <Cards image={Pop} title="Whatever It takes" text="Imagne dragons" />
                    <Cards image={Pop} title="Whatever It takes" text="Imagne dragons" />
                    <Cards image={Pop} title="Whatever It takes" text="Imagne dragons" />
                    <div class="flex items-center justify-center">
                        <div class="flex flex-col items-center">
                            <div class="add shadow-md rounded-full w-min bg-neutral-400/5 p-4">
                                <IoAdd size={30} />
                            </div>
                            <p>View All</p>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <h4 className='text-4xl w-full font-bold pt-16 pb-6'>Popular <span className='text-pink-700'>Artists</span></h4>
                <div className='flex gap-7'>
                    <Artists image={Artist1} title="Eminem" />
                    <Artists image={Artist1} title="Eminem" />
                    <Artists image={Artist1} title="Eminem" />
                    <Artists image={Artist1} title="Eminem" />
                    <Artists image={Artist1} title="Eminem" />
                    <Artists image={Artist1} title="Eminem" />
                    <div class="flex items-center justify-center">
                        <div class="flex flex-col items-center">
                            <div class="add shadow-md rounded-full w-min bg-neutral-400/5 p-4">
                                <IoAdd size={30} />
                            </div>
                            <p>View All</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='' >
                <h4 className='text-4xl font-bold pb-6'>Music <span className='text-pink-700'>Genres</span></h4>
                <div className='flex gap-8'>
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                        <MusicVedio image={Vedio1} title="Whatever It takes" text="Imagne dragons" count="5M views" />
                        <MusicVedio image={Vedio1} title="Whatever It takes" text="Imagne dragons" count="5M views" />
                        <MusicVedio image={Vedio1} title="Whatever It takes" text="Imagne dragons" count="5M views" />
                        <MusicVedio image={Vedio1} title="Whatever It takes" text="Imagne dragons" count="5M views" />
                        <MusicVedio image={Vedio1} title="Whatever It takes" text="Imagne dragons" count="5M views" />
                        <MusicVedio image={Vedio1} title="Whatever It takes" text="Imagne dragons" count="5M views" />
                    </div>
                    <div class="flex items-center justify-center">
                        <div class="flex flex-col items-center">
                            <div class="add shadow-md rounded-full w-min bg-neutral-400/5 p-4">
                                <IoAdd size={30} />
                            </div>
                            <p>View All</p>
                        </div>
                    </div>

                </div>
            </div>
            <div>
                <h4 className='text-4xl font-bold pt-16 pb-6'>New Release <span className='text-pink-700'>Songs</span></h4>
                <div className='flex gap-5'>
                    <Cards image={New1} title="Time" text="Luciano" />
                    <Cards image={New1} title="Time" text="Luciano" />
                    <Cards image={New1} title="Time" text="Luciano" />
                    <Cards image={New1} title="Time" text="Luciano" />
                    <div class="flex items-center justify-center">
                        <div class="flex flex-col items-center">
                            <div class="add shadow-md rounded-full w-min bg-neutral-400/5 p-4">
                                <IoAdd size={30} />
                            </div>
                            <p>View All</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Discover