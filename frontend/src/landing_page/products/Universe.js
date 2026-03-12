import React from 'react';

function Universe() {
    return ( 
         <div className="container mt-5">

      <div className="row text-center">
        <h1 className='mt-5'>The Zerodha Universe</h1>
        <p className='mt-3'>Extend your trading and investment experience even further with out partner platforms</p>
       
        <div className="col-4 p-3 mt-5">
          <img src="images/smallcaseLogo.png" />
          <p className='text-small text-muted mt-3'>Thematic investment Program</p>
        </div>
        <div className="col-4 p-3 mt-5">
         <img src="images/streakLogo.png" style={{width: "40%"}}/>
         <p className='text-small text-muted mt-3'>Algo & strategy platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="images/sensibullLogo.svg" style={{width: "40%"}} />
          <p className='text-small text-muted mt-3'>Option trading platform</p>
        </div>
         <div className="col-4 p-3 mt-5">
          <img src="images/zerodhaFundhouse.png" style={{width: "50%"}} />
          <p className='text-small text-muted mt-3'>Asset Management</p>
        </div>
        <div className="col-4 p-3 mt-5">
         <img src="images/goldenpiLogo.png" />
         <p className='text-small text-muted mt-3'>bonds trading platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="images/dittoLogo.png" style={{width: "30%"}} />
          <p className='text-small text-muted mt-3'>Insurance</p>
        </div>
        <button className='p-2 btn btn-secondary fs-5 mt-3' style = {{width:"25%", margin:"auto"}}>Sign up Now!</button>
      </div>
      
    </div>
     );
}

export default Universe;