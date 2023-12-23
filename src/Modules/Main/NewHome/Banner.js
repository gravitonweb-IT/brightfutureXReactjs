import React from 'react';
import {isMobile} from 'react-device-detect'


const mobban={height:'400px',width:'100%'}
const deskban={height:'500px',width:'100%'}

const mobtext={color: "#ffffff",
fontSize: "40px",
lineHeight: "1.2",}
const desktext={color: "#ffffff",
fontSize: "70px",
lineHeight: "1.2",}
const Banner = () => {
  
  
  return (
    <div style={{overflowX:'hidden'}}>
    <div style={{ position: 'relative', textAlign: 'center' }}>
      <img
        src="https://img.freepik.com/premium-photo/business-development-financial-plan-strategy-analysis-finance-graph-market-chart-investment-digital-economy-exchange-development-growing-growth-plan-stock-market-investment-banking_150455-17878.jpg?w=1380"
      
       style={isMobile?mobban:deskban}
        alt="Banner"
      />
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '30%',
        transform: 'translate(-50%, -50%)',
        color: 'white',
        padding: '20px'
      }}>
         <div style={{textAlign:'left'}}>
       <h1 className="p-2" style={isMobile?mobtext:desktext}>
                  Build wealth on
                  <br /> India's simplest <br /> trading app
                </h1>
                </div>
                <div style={{textAlign:'left'}} className='p-2'>
                <button className='p-2 mt-4' style={{border:'1px solid white',borderRadius:'20px'}}>Contact Us</button>

                </div>
               
      </div>
    </div>
    </div>
  );
};

export default Banner;
