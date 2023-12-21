import React from 'react'
import Boutons from '../section/Buttons';
import imgDeveloper from '../../../public/images/developer.webp';

function HeroSection() {
  return (
    <section className='flex flex-col h-[35rem] lg:h-auto items-center justify-center gap-0 lg:flex-row px-8 py-6 lg:px-16 lg:py-10'>
        <div className="flex flex-col text-left text-gray-800 -mr-10 z-10">
            <h1 className='text-5xl leading-[3rem] font-bold lg:text-6xl lg:leading-[4.5rem] '>Engagez <span className="text-red-500"> un développeur expérimenté</span> pour rejoindre votre équipe</h1>
            <p className='my-3 text-lg leading-[1.8rem] lg:my-6 lg:text-2xl'>
                Recrutez nos talents pour une mission de quelques semaines à plusieurs années. Faites votre demande, nous vous proposons des candidats dans 48 heures.
            </p>

            <Boutons />
        </div>
        <div className='hidden lg:flex lg:-ml-40'>
            <img src={imgDeveloper} alt="image developper" className='w-[80rem]  ' />
        </div>
    </section>

    
   )
}

export default HeroSection