import React from 'react';

function HeroSection() {
    return ( 
        <div className = 'container p-5 mb-5'>
             <div className = 'row text-center'>
                    <img src = 'images/homeHero.png' alt = 'Hero image' className='mb-5'/>
                    <h1 className='mt-5'>Invest Smarter</h1>
                    <p>Online Platform to invest in Stocks,mutual funds and more </p>
                    <button className='p-2 btn btn-secondary fs-5' style = {{width:"25%", margin:"auto"}}>Sign up Now!</button>
             </div>
        </div>
     );
}

export default HeroSection;