import React from 'react';
import "./trade.css";
import { RxDashboard } from "react-icons/rx";


const TradeNow = ({ stock }) => {
    const { symbol, change, percentageChange, volume } = stock;
    const changeClass = change >= 0 ? 'positive' : 'negative';
  
    return (
      <>
      <div className="col-lg-12 p-3" style={{border:'1px solid #1d233a',marginLeft:'-13px',backgroundColor:'#1d233a'}}>
      <div className="d-flex justify-content-start">
      {/* <RxDashboard className="mt-2 mx-4" style={{color:'white',fontSize:'24px'}}/> */}
      <h3 style={{color:'white',fontSize:'24px',marginLeft:'-10px'}}>Dashboard</h3>

      </div>
   

    </div>
      <div className={`stock-item ${changeClass}`}>
        <div className="symbol">{symbol}</div>
        <div className="change">{change.toFixed(2)}</div>
        <div className="percentage-change">({percentageChange.toFixed(2)}%)</div>
        <div className="volume">Volume: {volume.toLocaleString()}</div>
      </div>
      </>
    );
};

export default TradeNow;