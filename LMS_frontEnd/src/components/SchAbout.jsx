import React from 'react'
import hImg from '../assets/hImg2.png'

const SchAbout=()=> {
  return (
    <div className='font-kumbh'>
        <div className='flex flex-row items-center justify-between gap-10 m-12'>
            <div className='w-300px h-150px '>
                <img src={hImg} alt=''/>
            </div>
            <div className='text-black font-kumbh'>
                <h1 className='text-6xl font-bold'>
                    About
                </h1>
                <h3 className='text-4xl font-bold'>
                    R/Pathagama Maha Vidyalaya
                </h3>
                <p className='text-2xl text-justify'>
                R/Pathagama Maha Vidyalaya, established in 1891, stands as a pillar
    of Sri Lankan education. With dedicated faculty and a serene
    environment, we provide well-rounded education that fosters growth
    and prepares students for success in the modern world.
                </p>
            </div>
        </div>
      
    </div>
  );
};

export default SchAbout
