import React from 'react';


function Hero() {
    return ( 
          <>
        <div className='container'>
            <div className='row p-5 mt-5 border-bottom text-center'>
                <h1>Pricing</h1>
                <h4 className='text-muted fs-4 mt-4'>Free equity investments and flat $1 intraday and F&O trades</h4>
            </div>
             <div className='row p-5 mt-5 text-center'>
                <div className='col-4 p-5'>
                    <img src="images/free.jpg" style={{width:"70%"}}/>
                    <h1 className='fs-4'>Free equity delivery</h1>
                    <p className='text-muted'>All equity delivery investments(NSE,BSE) are absolutely free - $0 Brokerage.</p>
                </div>
                <div className='col-4 p-5'>
                    <img src="images/dollarone.jpg" style={{width:"75%"}} />
                    <h1 className='fs-4'>Intraday and F&O trades</h1>
                    <p className='text-muted'>Flat $1 per executed order on intraday trades across equity,currency and commodity trades.</p>
                </div>
                <div className='col-4 p-5'>
                     <img src="images/free.jpg" style={{width:"70%"}}/>
                    <h1 className='fs-4'>Free direct MF</h1>
                    <p className='text-muted'>All direct mutual fund invvestments are absolutely free- $0 commisons & DP charges.</p>
                </div>
             </div>
        </div>
        
      
        
        </>
     );
}

export default Hero;
<h1>Hero</h1>