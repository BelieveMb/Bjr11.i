import React from 'react'
import logoBjr from '../../../public/images/logoBlack.png';

function Footer() {
  return (
    <section className='bg-gray-700  px-8 py-16 lg:px-16 lg:py-20 '>
        <div className="flex flex-col gap-8 text-gray-50 lg:flex-row">
            <div className='flex flex-col items-center content-center lg:content-start lg:items-start'>
                <img src={logoBjr} alt="logo Bjr 11" className='w-36' />
                <p className='text-center text-gray-50 w-[70%] lg:text-left '> Des développeurs expérimentés prêts à rejoindre votre équipe.</p>
            </div>
            <div className='flex flex-col items-center content-center gap-4 lg:mr-[12rem]'>
                <h3 className='text-2xl font-bold'>Expertise</h3>
                <div className="flex flex-col items-center lg:items-start gap-5 ml-10">
                    <a href="" className='hover:text-red-500 hover:font-bold'> <i className="bi bi-arrow-right text-red-500"></i> Services</a>
                    <a href="" className='hover:text-red-500 hover:font-bold'><i className="bi bi-arrow-right text-red-500"></i> Skills</a>
                    <a href="" className='hover:text-red-500 hover:font-bold'><i className="bi bi-arrow-right text-red-500"></i> Nos devs</a>
                    <a href="" className='hover:text-red-500 hover:font-bold'><i className="bi bi-arrow-right text-red-500"></i> Embaucher un dev</a>
                </div>
            </div>

            <div className='flex flex-col items-center content-center gap-4'>
                <h3 className='text-2xl font-bold'>Réalisations</h3>
                <div className="flex flex-col items-center lg:items-start gap-5 ml-6">
                    <a href="" className='hover:text-red-500 hover:font-bold'><i className="bi bi-arrow-right text-red-500"></i>  Nos clients</a>
                    <a href="" className='hover:text-red-500 hover:font-bold'><i className="bi bi-arrow-right text-red-500"></i> Projets développés</a>
                    <a href="" className='hover:text-red-500 hover:font-bold'><i className="bi bi-arrow-right text-red-500"></i> Nos partenaires</a>
                </div>
            </div>

        </div>
        <div className="flex flex-col justify-between text-gray-50 lg:flex-row mt-10">
            <p>KADEA © 2023 Tous droits réservés</p>
            <p className='flex flex-row gap-4 justify-center items-center text-red-500 text-right'>
                <a href="" className='hover:text-red-500 hover:font-bold'> <i className="bi bi-facebook"></i> </a>
                <a href="" className='hover:text-red-500 hover:font-bold'> <i className="bi bi-twitter"></i> </a>
                <a href="" className='hover:text-red-500 hover:font-bold'> <i className="bi bi-whatsapp"></i> </a>
                <a href="" className='hover:text-red-500 hover:font-bold'> <i className="bi bi-instagram"></i> </a>
            </p>
        </div>
    </section>
  )
}

export default Footer