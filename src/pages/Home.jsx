import React from 'react'
import Banner from '../components/Banner'
import BigBanner from '../components/BigBanner'
import NavBar from '../components/NavBar'
import Viwed from '../components/Viwed'

const Home = () => {
  return (
    <div>
        <NavBar/>
     <Banner/>
     <Viwed />
     <BigBanner/>
    </div>
  )
}

export default Home