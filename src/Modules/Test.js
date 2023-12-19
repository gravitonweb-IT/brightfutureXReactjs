import React, { useState } from 'react';
import axios from 'axios';

const Test = () => {
    const [image, setImage] = useState(null);
    const [panNumber, setPanNumber] = useState('');
    const [aadhaarNumber, setAadhaarNumber] = useState('');
  
    const handleImageChange = (e) => {
      setImage(e.target.files[0]);
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      const formData = new FormData();
      formData.append('image', image);
  
      
    };
  
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <input type="file" onChange={handleImageChange} />
          <button type="submit">Upload and Extract Text</button>
        </form>
        <div>PAN Number: {panNumber}</div>
        <div>Aadhaar Number: {aadhaarNumber}</div>
      </div>
    );
};

export default Test;
