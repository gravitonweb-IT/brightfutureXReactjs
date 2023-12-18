import React, { useEffect, useState } from 'react'
import "./MainStockAdmin.css"


import axios from 'axios';
import TradeNow from '../TradeNow';
const MainStockAdmin = () => {
    const [stocks, setStocks] = useState(null);

    

      useEffect(() => {
          fetchStockData();
      }, []);
  
      const fetchStockData = async () => {
          try {
              const response = await axios.get('http://localhost:8000/rolebased/get_stocks/');
  debugger
              const convertedData = response.data.stocks?.map(stock => ({
                symbol: stock.fields.symbol,
                change: stock.fields.change,
                percentageChange: stock.fields.percentageChange,
                volume: stock.fields.volume
            }));
            debugger
            setStocks(convertedData)
              // setStocks(response.data.stocks);
          } catch (error) {
              console.error('Error fetching stock data:', error);
          }
      };
  
      const handleDelete = async () => {
        try {
            await axios.delete('http://localhost:8000/rolebased/delete_stocks/');
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
            
              <div className='row'>
                <div className='col-lg-2'></div>
                <div className='col-lg-8'>
                <button onClick={handleDelete} style={{fontSize:'20px',fontWeight:'500'}}>Delete All Stock Data</button>
          {stocks?.map((stock, index) => (
            <TradeNow key={index} stock={stock} />
          ))}
                </div>

              </div>
           
         
        </div>
  )
}

export default MainStockAdmin