import React from 'react';
import ImgPaterns from '../../../public/images/partenaires6.png'
import ImgPaterns1 from '../../../public/images/partenaires6.png'
import ImgPaterns2 from '../../../public/images/partenaires1.png'

function Paterners() {
  return (
    <section className='bg-gray-50  mx-0 flex flex-col items-center justify-center gap-5  px-8 py-6 lg:px-16 lg:py-10'>
        <h2 className='text-2xl lg:text-5xl text-gray-700 font-semibold mb-3'>Ils nous ont fait confiance</h2>
       
        <div className='flex flex-row gap-5  my-4 flex-wrap lg:flex-nowrap'>
            <img src={ImgPaterns}  className='w-[10rem]'            alt="le logo du partenaire" />
            <img src={ImgPaterns}  className='w-[10rem]'            alt="le logo du partenaire" />
            <img src={ImgPaterns}  className='w-[10rem]'            alt="le logo du partenaire" />
            <img src={ImgPaterns}  className='w-[10rem]'            alt="le logo du partenaire" />
        </div>
      

    </section>
  )
}

export default Paterners