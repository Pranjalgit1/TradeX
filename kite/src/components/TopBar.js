import React from "react";

const TopBar = () => {
  return (
    <div className="topbar-container">
      <div className="indices-container">
        <div className="market-card nifty">
          <p className="index">NIFTY 50</p>
          <p className="index-points">22,648.2</p>
          <p className="percent up">+0.54%</p>
        </div>
        <div className="market-card sensex">
          <p className="index">SENSEX</p>
          <p className="index-points">74,112.8</p>
          <p className="percent down">-0.16%</p>
        </div>
      </div>

      <div className="session-badge">Live session</div>
    </div>
  );
};

export default TopBar;
