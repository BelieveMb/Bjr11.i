import React from 'react'
import Boutons from '../section/Buttons'
import ProfilerCard from './ProfilerCard'

function YoursAvantages() {
  return (
    <section className='bg-gray-50 flex flex-col justify-between gap-5   lg:flex-row  px-8 py-6 lg:px-16 lg:py-10'>
        <div className='lg:w-1/2'>
            <ProfilerCard />
        </div>
        
        <div className='lg:w-1/2'>
            <h2 className='text-2xl lg:text-5xl text-gray-700 font-semibold mb-3'>Pourquoi travailler avec nous</h2>

            {/* <h2 className='text-5xl font-semibold lg:text-xl text-gray-700'>Pourquoi travailler avec nous</h2> */}
            <p className='text-lg text-gray-600 my-5 '>Engagez un ou plusieurs développeurs de Kadea Software pour rejoindre votre équipe à distance.</p>
            <ul className='mb-5 flex flex-col gap-4'>
                <li className='flex  flex-row items-center gap-2 text-lg text-gray-600 font-semibold lg:text-2xl'>
                    <i className="text-red-500 bi bi-patch-check-fill"></i>
                    <span>Experts qualifiés</span>
                </li>

                <li className='flex  flex-row items-center gap-2 text-lg text-gray-600 font-semibold lg:text-2xl'>
                    <i className="text-red-500 bi bi-patch-check-fill"></i>
                    <span>Experts qualifiés</span>
                </li>
                <li className='flex  flex-row items-center gap-2 text-lg text-gray-600 font-semibold lg:text-2xl'>
                    <i className="text-red-500 bi bi-patch-check-fill"></i>
                    <span>Experts qualifiés</span>
                </li>
                <li className='flex  flex-row items-center gap-2 text-lg text-gray-600 font-semibold lg:text-2xl'>
                    <i className="text-red-500 bi bi-patch-check-fill"></i>
                    <span>Experts qualifiés</span>
                </li>
            </ul>

            <Boutons />
        </div>
    </section>
    
  )
}

export default YoursAvantages