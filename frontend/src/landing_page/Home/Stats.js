import React from "react";

function Stats() {
  return (
    <div className="container p-5">
      <div className="row p-5">
        <div className="col-6 p-6">
          <h1 className="fs-2 mb-5">Trust with Confidence</h1>
          <h2 className="fs-4">Customer-first</h2>
          <p className="text-muted">
            Many Customers trust our Trading platform and its the best
          </p>
          <h2 className="fs-4">No spam </h2>
          <p className="text-muted">
            NO spam or annoying push notifications. High quality apps that you
            can use easily
          </p>
          <h2 className="fs-4">TradeX Universe</h2>
          <p className="text-muted">Not just an App, its a whole ecosystem</p>
          <h2 className="fs-4">Spend Money wisely</h2>
          <p className="text-muted">
            Nudge and Kill Switch, helps facilitiate transactions, actively
            helps you do better with your money
          </p>
        </div>
        <div className="col-6 p-5">
          <img
            src="images/ecosystem.png"
            style={{ width: "100%" }}
          />
          <div className="text-center">
            <a href="" className="mx-5" style={{ textDecoration: "none" }}>
              Explore our Products{" "}
              <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
            <a href="" style={{ textDecoration: "none" }}>
              Try Kite Demo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
