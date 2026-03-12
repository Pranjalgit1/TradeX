import React from "react";

function LeftSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-6 p-3">
          <img src={imageURL} />
        </div>
        <div className="col-6 p-5">
          <h1 className="mb-3">{productName}</h1>
          <h1 className="fs-5 text-muted mb-3">{productDescription}</h1>
          <div>
            <a href={tryDemo} >TryDemo</a>
            <a href={learnMore} style={{marginLeft:"50px"}}>Learn More</a>
          </div>
          <div className="mt-4">
            <a href={googlePlay}>
              <img src="images/googlePlayBadge.svg"  />
            </a>
            <a href={appStore} style={{marginLeft:"50px"}}>
              <img src="images/appstoreBadge.svg" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
