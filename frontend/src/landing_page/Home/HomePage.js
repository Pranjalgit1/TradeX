import React from 'react';
import HeroSection from './HeroSection';
import Awards from './Awards';
import Stats from './Stats';
import Pricing from './Pricing';
import Education from './Education';
import TopNav from '../TopNav';
import OpenAccount from '../OpenAccount';
import Footer from '../Footer';

function HomePage() {
    return ( 
        <>
            
            <HeroSection />
            <Awards />
            <Stats />
            <Pricing />
            <Education />
            <OpenAccount />
            
        </>
     );
}

export default HomePage;