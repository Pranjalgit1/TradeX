import React from 'react';


function Team() {
    return ( 
        <>
        <div className='container'>
            <div className='row p-5 border-top'>
                <h1 className='text-center'>People</h1>
            </div>
        </div>
        
          <div className='row p-5 text-muted fs-6'>
                <div className='col-6 p-5 text-center'>
                  <img src='images/green.jpeg' style={{width:"50%",borderRadius: "100%"}}/>
                  <h4 className='mt-4'>Mr Green</h4>
                  <h7>Founder,CEO</h7>
                </div>
                <div className='col-6 p-5'>
                    <p>Mr Green founded this Zerodha Clone to overcome the hurdles he faced decade long ago as a trader.
                        Today, Zerodha has changed the landscape of the World broking industry.</p><p> Mr green likes to play Roblox.</p>
                        <p>     Connect on <a href="" style={{textDecoration:"none"}}> HomePage</a> / 
                        <a href="" style={{textDecoration:"none"}}> TradingQ&A  </a> /  
                        <a href="" style={{textDecoration:"none"}}> Twitter </a></p>
                    
                </div>
            </div>
        
        </>
     );
}

export default Team;