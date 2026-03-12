import React from "react";

function Footer() {
  const linkClass = "text-decoration-none text-muted d-inline-block mb-2";

  return (
    <footer style={{ backgroundColor: "rgb(250,250,250)" }}>
      <div className="container border-top mt-5">
        <div className="row mt-5">
          <div className="col mt-5 mb-5">
            <img src="images/logo.svg" style={{ width: "50%" }} alt="Logo" />
            <p>
              © 2010-2026, Just a Dummy of Zerodha Broking Ltd. All rights
              reserved
            </p>
          </div>

          <div className="col">
            <p>Company</p>
            <a href="" className={linkClass}>About</a><br/>
            <a href="" className={linkClass}>Products</a><br/>
            <a href="" className={linkClass}>Pricing</a><br/>
            <a href="" className={linkClass}>Referral Program</a><br/>
            <a href="" className={linkClass}>Careers</a><br/>
            <a href="" className={linkClass}>Zerodha tech</a><br/>
            <a href="" className={linkClass}>Press & media</a><br/>
            <a href="" className={linkClass}>Zerodha cares</a><br/>
          </div>

          <div className="col">
            <p>Support</p>
            <a href="" className={linkClass}>Contact</a><br/>
            <a href="" className={linkClass}>Support Portal</a><br/>
            <a href="" className={linkClass}>Z-Connect blog</a><br/>
            <a href="" className={linkClass}>List of charges</a><br/>
            <a href="" className={linkClass}>Downloads & resources</a><br/>
          </div>

          <div className="col">
            <p>Account</p>
            <a href="" className={linkClass}>Open an account</a><br/>
            <a href="" className={linkClass}>Fund transfer</a><br/>
            <a href="" className={linkClass}>69 day challange</a><br/>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
