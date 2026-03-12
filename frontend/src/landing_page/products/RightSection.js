import React from 'react';


function RightSection({imageURL,
  productName,
  productDescription,
  learnMore,}) {
    return ( 
        <div className="container mt-5">
      <div className="row">
        
        <div className="col-6 p-5">
          <h1 className="mb-3">{productName}</h1>
          <h1 className="fs-5 text-muted mb-3">{productDescription}</h1>
          <div>
            <a href={learnMore} style={{marginLeft:"0px", fontStyle:"initial"}}>Learn More</a>
          </div>
        </div>
        <div className="col-6 p-3">
          <img src={imageURL} />
        </div>
      </div>
    </div>
     );
}

export default RightSection;