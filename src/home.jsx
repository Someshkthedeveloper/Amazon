import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Banner from './Banner/Banner.jsx'
import Nav from './Nav/Nav.jsx'
import Section1 from './Section-1/Section1Home.jsx'
import Carousel from './Carosel/Carosel.jsx'
import Card from './card/Listitem.jsx'
import Scroll from './OfferScroll/Tendinglist.jsx'
import Five from './fivedata/Fivelist.jsx'
import F1 from './Card1.jsx'
import F2 from './Firstcard.jsx'
import Mobile from './Mobile.jsx'
import F3 from './Footer.jsx'
function home() {
    return (
<>
        <Banner/>
        <Nav/>
        <Carousel/>
        <Section1/>
        <Scroll/>
        <Card/>
        <Five/>
        <F2/>
        {/* <F1/> */}
        {/* <Mobile/> */}
        <F3/>
        </>
    )
}

export default home