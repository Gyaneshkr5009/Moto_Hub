import { SignInButton } from '@clerk/clerk-react'
import React from 'react'
import { Button } from './components/ui/button'
import Header from './components/Header'
import Hero from './components/Hero'
import Category from './components/Category'
import MostSearchCar from './components/MostSearchCar'
import InfoSection from './components/infoSection'
import Footer from './components/Footer'

const Home = () => {
  return (
    <div>
      {/*Header Section*/}
        <Header/>
      {/*Header Section*/}
        <Hero/>
      {/*Category Section*/}
        <Category/>
      {/*MostSearchCar Section*/}
        <MostSearchCar/>
      {/*Info Section*/}
        <InfoSection/>
      {/*Footer Section*/}
        <Footer/>
    </div>
  )
}

export default Home