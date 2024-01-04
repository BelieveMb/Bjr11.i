import React from 'react'
import Header from '../components/Header/Header'
import HeroSection from '../components/homepage/HeroSection'
import Paterners from '../components/homepage/Paterners'
import YoursAvantages from '../components/homepage/YoursAvantages'
import WorkUs from '../components/homepage/WorkUs'
import TakeDevelopper from '../components/homepage/TakeDevelopper'
import CallUs from '../components/homepage/CallUs'

function Home() {
  return (
    <>
        <Header />
        <main className='bg-gray-200  '>
            <HeroSection />
            <Paterners />
            <YoursAvantages />
            <WorkUs />
            <TakeDevelopper />
            <CallUs />

        </main>
    </>
  )
}


export default Home