import React from 'react';
import Hero from './Hero';
import LeftSection from './LeftSection';
import RightSection from './RightSection';
import Universe from './Universe';

function ProductPage() {
    return ( 
        <>
        <Hero/>
        <LeftSection imageURL="/images/kite.png" 
        productName="Kite" 
        productDescription="Our ultra fast flagship trading platform with streaiming market data,advanced charts,an elgant UI, and more. ENjoy the Kite experience seamlessly on your Android and iOS devices."
        tryDemo="" 
        learnMore="" 
        googlePlay="" 
        appStore=""/>

        <RightSection imageURL="/images/console.png" 
        productName="Console" 
        productDescription="The central dashboard for your zerodha account. Gain insights into your trades and investments with in-depth reports and visualizations."
        learnMore="" />
    
        <LeftSection imageURL="/images/coin.png" 
        productName="Coin" 
        productDescription="Buy direct Mutual Funds online, commision-free,delivery direct to you Demat acc. enjoy the investment experience on you Andoird and iOS devices."
        tryDemo="" 
        learnMore="" 
        googlePlay="" 
        appStore=""/>


         <RightSection imageURL="/images/kiteconnect.png" 
        productName="Kite Connect API" 
        productDescription="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup,build your investment app and showcase ot to our clientbase."
        learnMore="" />


        <LeftSection imageURL="/images/varsity.png" 
        productName="Varsity Mobile" 
        productDescription="An easy to grasp,collection of stock market lessons with in depth coverage and illustrations. Content is Broken down into small chunks to help you learn on the go."
        tryDemo="" 
        learnMore="" 
        googlePlay="" 
        appStore=""/>

        <p className='text-center mt-5 mb-5'>
            Want to know more about our technology stack? Check out Zerodha.techblog
        </p>
        <Universe/>
        </>
     );
}

export default ProductPage;