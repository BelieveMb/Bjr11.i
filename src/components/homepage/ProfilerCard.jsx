import React from 'react'
import ImgDev from '../../../public/images/believe.png'

function ProfilerCard() {
  return (
    <div className="bg-red-500  p-4 rounded-3xl shadow-lg">
        <div>
            <img src={ImgDev} alt="nos développeurs" className="w-[40rem] rounded-3xl mx-auto" />
        </div>

        <div className='flex flex-row jsut-between items-center gap-5 my-4 text-gray-200'>
            <b>Développeur FullStack</b>
            <b>5ans d'expérience</b>
        </div>

        <div className='flex flex-row  flex-wrap gap-5  text-sm'>
            <b className='p-2 bg-gray-200 text-red-500 rounded-full'>React JS</b>
            <b className='p-2 bg-gray-200 text-red-500 rounded-full'>Node </b>
            <b className='p-2 bg-gray-200 text-red-500 rounded-full'>Laravel </b>
            <b className='p-2 bg-gray-200 text-red-500 rounded-full'>Tailwind CSS</b>
            <b className='p-2 bg-gray-200 text-red-500 rounded-full'>React Nativ</b>
        </div>
    </div>
  )
}

export default ProfilerCard