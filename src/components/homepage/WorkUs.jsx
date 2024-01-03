import React from 'react'
import ImgDev from '../../../public/images/pc3.png'
import logoPhp from '../../../public/images/php.png'
import logoLaravel from '../../../public/images/laravel.png'



function WorkUs() {
  return (
    <section className=' flex flex-col justify-center content-center   gap-5  '>
        
        <div className="bg-red-500 text-gray-50 flex flex-col items-center px-8 py-6 lg:px-16 lg:py-20 ">
          <h2 className='text-3xl lg:text-5xl text-center text-gray-100 font-semibold mb-3'>Nous accompagnons vos projets</h2>
          <p  className='text-center text-xl lg:px-[20rem]'> Depuis 2018, nous avons mené à bien plus de 100 projets et missions pour plus de 60 clients en RDC et en Europe. </p>

        </div>
        <div className='bg-gray-50 text-red-500 flex flex-col items-center pb-20'>
            <div className="flex flex-row justify-around content-center items-center ">
              <i className="bi bi-arrow-left-circle-fill hidden lg:flex text-4xl"></i>
              <img src={ImgDev} alt="Image de nos projets"  className='-mt-24 lg:-mt-[10rem] lg:w-[50rem]'/>
              <i className="bi bi-arrow-right-circle-fill hidden lg:flex text-4xl "></i>

            </div>
            <div className='flex flex-col justify-center items-center gap-4 lg:my-8'>
                <h3 className='text-2xl font-semibold lg:text-3xl'>Digital Africa</h3>
                <p className='text-center mb-4 px-8 lg:px-28'>Dev Lorem ipsum dolor sit amet  adipisicing elit. Qui, veniam expedita sint ad quibusdam nihil  ducimus tempora.</p>
                
                <div className='flex flex-col justify-between gap-4 lg:flex-row'>
                  <div className='bg-gray-200 flex flex-col items-center text-gray-700 rounded-2xl px-16 py-4 gap-4 w-auto'>
                    <b className='text-xl'>Réalisation</b>
                    <span>2019-2022</span>
                  </div>
                  <div className='bg-gray-200 flex flex-col items-center text-gray-700 rounded-2xl px-16 py-4 gap-4 w-full'>
                    <b className='text-xl'>Technologies</b>
                    <span>Node JS</span>
                  </div>

                  <div className='bg-gray-200 flex flex-col items-center text-gray-700 rounded-2xl px-16 py-4 gap-4 w-full'>
                    <b className='text-xl'>Equipes</b>
                    <span>2 développeurs</span>
                  </div> 
                </div>

            </div>
        </div>

        <div className='text-gray-700'>
          <h2 className='text-3xl lg:text-5xl text-center text-gray-700 font-semibold mb-3'>Notre expertises</h2>

          <div className="flex flex-row  items-center px-8 py-6 lg:px-16 lg:py-20 ">
            <LogoText logo={logoPhp} textBottom={'Php'} />
            <LogoText logo={logoLaravel} textBottom={'Laravel'} />
            
          </div>

        </div>
    </section>

  )
}

export default WorkUs