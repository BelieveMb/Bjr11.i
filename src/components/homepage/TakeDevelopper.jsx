import React, { useState } from 'react';
import imgBesoin from '../../../public/images/besoin.png';
import imgCv from '../../../public/images/cv.png';
import imgOnboarding from '../../../public/images/onboarding.jpg';
import Buttons from '../section/Buttons';

const textBesoin = "Vous nous faites part de votre besoin en échangeant avec notre conseiller sur vos exigences précises, les particularités de votre produit, projet et la dynamique de votre équipe. Cette étape est cruciale pour nous permettre de vous proposer les profils les plus adaptés.";
const textCv = "Vous recevez une liste de CV des profils correspondants à votre besoin en moins de 48 heures. Selon votre choix nous organisons les entretiens avec les candidats, selon votre procédure de recrutement (entretien vidéo, tests en ligne, etc.)"
const textonboarding = "Une fois votre candidat défini, son intégration commence avec vos équipes. Notre équipe de conseiller accompagne l’onboarding du développeur pour s’assurer qu’il a toutes les informations nécessaires pour qu’il soit productif dès le jour 1 de la mission."


const DetailNavigation = ({imgDetail, textDetail}) => {
  return(
      <div className='flex flex-col gap-6 text-gray-300 lg:flex-row'>
        <img src={imgDetail} alt="l'image du besoin" className='rounded-3xl lg:w-[50%] '  />
        <p className='lg:text-2xl ' > {textDetail} </p>
      </div>
  )
}

function TakeDevelopper() {
  const [ title, setTitle ] = useState(1);
 

  return (
    <section className='  bg-red-500  px-8 py-16 lg:px-16 lg:py-20 '>
      <h2 className='text-4xl lg:text-6xl lg:w-[60%]  text-gray-300 font-semibold mb-16'>Embauchez le développeur idéal pour votre équipe  </h2>

        <div className="flex flex-col content-start items-start gap-10 lg:flex-row ">
          <div className="flex flex-col gap-6 text-2xl lg:text-3xl  text-gray-500 w-full lg:w-[50%]  cursor-pointer">
            <h3 className={"flex flex-row gap-4  " + (title=== 1 ? "text-gray-50" : null)}   onClick={()=> setTitle(1)} >
              <i className= {"  " + ( title === 1 ? "bi bi-circle-fill  " : " bi bi-circle") }></i>Comprendre vos besoins
            </h3>
            <h3 className={"flex flex-row gap-4  " + (title=== 2 ? "text-gray-50" : null)}  onClick={()=> setTitle(2)}>
              <i className={"  " + ( title === 2 ? "bi bi-circle-fill  ": " bi bi-circle") }></i>Proposition de profils
            </h3>
            <h3 className={"flex flex-row gap-4  " + (title=== 3 ? "text-gray-50" : null)}  onClick={()=> setTitle(3)}>
              <i className={"  " + ( title === 3 ? "bi bi-circle-fill  ": " bi bi-circle") }></i>Onboarding
            </h3>
            <div className="hidden lg:flex mt-5" >
              <Buttons textContent="Renforcer votre équipe"  />
            </div>
          </div>

          <div className='flex flex-col items-start gap-6 w-[85%]'>
            
            { title === 1 ? <DetailNavigation imgDetail={imgBesoin} textDetail={textBesoin} /> : null }
            { title === 2 ? <DetailNavigation imgDetail={imgCv} textDetail={textCv} /> : null }
            { title === 3 ? <DetailNavigation imgDetail={imgOnboarding} textDetail={textonboarding} /> : null }
            <div className="flex lg:hidden mt-16" >
              <Buttons  className="flex lg:hidden" />
            </div>


          </div>
        </div>

    </section>
  )
}

export default TakeDevelopper