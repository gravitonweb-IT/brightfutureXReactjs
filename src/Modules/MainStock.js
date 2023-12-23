import React, { useEffect, useState } from 'react'
import "./stockitem.css"
import TradeNow from './TradeNow';
import UserDashboard from './Account/UserDashboard';
import axios from 'axios';
import { servieUrl } from '../env/env';
import { RxDashboard } from "react-icons/rx";

const MainStock = () => {
    const [stocks, setStocks] = useState(null);

    

      useEffect(() => {
          fetchStockData();
      }, []);
  
      const fetchStockData = async () => {
          try {
              const response = await axios.get(servieUrl.url+'rolebased/get_stocks/');
  
              const convertedData = response.data.stocks?.map(stock => ({
                symbol: stock.fields.symbol,
                change: stock.fields.change,
                percentageChange: stock.fields.percentageChange,
                volume: stock.fields.volume
            }));
            
            setStocks(convertedData)
              // setStocks(response.data.stocks);
          } catch (error) {
              console.error('Error fetching stock data:', error);
          }
      };
  
      const handleDelete = async () => {
        try {
            await axios.delete(servieUrl.url+'rolebased/delete_stocks/');
            alert('All stock data deleted successfully!');
            // Optionally, add logic to update the UI or state
        } catch (error) {
            console.error('Error deleting stock data:', error);
            alert('Error deleting stock data');
        }
    };
      useEffect(() => {
        const interval = setInterval(() => {
          // Update stocks with simulated data for demonstration purposes
          const updatedStocks = stocks?.map(stock => ({
            ...stock,
            change: stock.change + (Math.random() - 0.5) * 2, // Random change
            percentageChange: stock.percentageChange + (Math.random() - 0.5) * 2, // Random change
          }));
    
          setStocks(updatedStocks);
        }, 2000);
    
        return () => clearInterval(interval);
      }, [stocks]);
    
      return (
        
        <div>
            <UserDashboard>
              <div className='row'>
            <div className="col-lg-12 p-3" style={{border:'1px solid #1d233a',marginLeft:'-13px',backgroundColor:'#1d233a'}}>
      <div className="d-flex justify-content-start">
      <RxDashboard className="mt-2 mx-4" style={{color:'white',fontSize:'24px'}}/>

      <h3 style={{color:'white',fontSize:'24px',marginLeft:'-10px'}}>Dashboard</h3>

      </div>
   

    </div>
              <div className='row p-1'>
                <div className='col-lg-2'></div>
                <div className='col-lg-8 p-3'>
            
                {/* <button onClick={handleDelete} style={{fontSize:'20px',fontWeight:'500'}}>Delete All Stock Data</button> */}
          {stocks?.map((stock, index) => (
            <TradeNow key={index} stock={stock} />
          ))}
                </div>

              </div>
           </div>
          </UserDashboard>
        </div>
  )
}

export default MainStock