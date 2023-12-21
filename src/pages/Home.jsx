import React from 'react'
import Header from '../components/Header/Header'
import HeroSection from '../components/homepage/HeroSection'
import Paterners from '../components/homepage/Paterners'

function Home() {
  return (
    <>
        <Header />
        <main className='bg-gray-200  '>
            <HeroSection />
            <Paterners />
        </main>
    </>
  )
}

export default Home