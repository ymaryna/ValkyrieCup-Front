import React from 'react'
import Slide from './misc/Slide'
import HeaderVideo from './home/HeaderVideo'
import ProxComp from './home/ProxComp'
import './Home.css'

const Home = () => {
    return(
        <div>
            <HeaderVideo />
            <ProxComp />
            <Slide />
        </div>
    )
}

export default Home