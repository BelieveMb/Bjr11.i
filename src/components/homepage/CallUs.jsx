import React from 'react';
import imgLady from '../../../public/images/lady-call.png';
import Buttons from '../section/Buttons';

function CallUs() {
  return (
    <section className='flex flex-col justify-between items-center lg:flex-row gap-8   bg-gray-200  px-8 pt-16 lg:px-16 lg:pt-20 '>
        <h3 className='w-full lg:w-[35%] text-xl text-center'>Agence pionnière basée au cœur de Kinshasa, une ville de 17 mio d’habitants</h3>
        <div className="flex lg:hidden">
            <Buttons textContent="Contactez nous  "/>
        </div>
        <img src={imgLady} alt="image de lady call" />
        <div className="hidden lg:flex">
            <Buttons textContent="Contactez nous  "/>
        </div>
    </section>

  )
}

export default CallUs