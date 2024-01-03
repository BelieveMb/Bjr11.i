import React from 'react'
import Header from '../components/Header/Header'
import HeroSection from '../components/homepage/HeroSection'
import Paterners from '../components/homepage/Paterners'
import YoursAvantages from '../components/homepage/YoursAvantages'
import WorkUs from '../components/homepage/WorkUs'

function Home() {
  return (
    <>
        <Header />
        <main className='bg-gray-200  '>
            <HeroSection />
            <Paterners />
            <YoursAvantages />
            <WorkUs />
        </main>
    </>
  )
}

export default Home