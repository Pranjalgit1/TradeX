import React from 'react';

function Hero() {
    return ( 
        <section className='container-fluid' id ='SupportHero' >
            <div className='p-3' id='supportWrapper'>
                <h3 > Support portal</h3>
                <a href=''>Track tickets</a>
            </div>

            <div className='row p-3'>
                <div className='col-6 p-3 '>
                    <h2 className='fs-4'>Search for an answer or browse help topics to create a ticket</h2>
                    <input placeholder='Eg. how do i activate F&O?'/><br/>
                    <a href=' '> Track account Opening  </a>
                    <a href=' '> Track segment activation</a>
                    <a href=' '>Intraday margins</a>
                   <a href=' '> Kite user manual</a> 

                </div>
                <div className='col-6 p-3'>
                    <h2 className='fs-4'>Featured</h2>
                    <ol>
                        <li>
                            <a href=' ' className='mb-3'> Current takeovers and Delisting - january 2026</a>
                        </li>
                        <li>
                              <a href=' '> latest Intraday leverages - MIS & CO</a>
                        </li>
                    </ol>
                      
                  
                </div>
              
            </div>
        </section>
     );
}

export default Hero;