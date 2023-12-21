import React from 'react'
import Header from '../components/Header/Header'
import HeroSection from '../components/homepage/HeroSection'

function Home() {
  return (
    <>
        <Header />
        <main className='bg-gray-200 px-8 py-10 lg:px-14'>
            <HeroSection />
        </main>
    </>
  )
}

export default Home