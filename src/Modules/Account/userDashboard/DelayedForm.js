import React, { useState, useEffect } from 'react';
import './YourPopupStyles.css'; // Import your CSS styles

const AutoPopupForm = () => {
    const [showPopup, setShowPopup] = useState(false);
    const [formData, setFormData] = useState({
        email: "",
        bankaccount: "",
        ifsccode: "",
        accountHolderName: "",
        pancard_image: "",
        aadhaarcard_image: ""
    });
    const [pan,setPancardFile]=useState(null)
    const [aadhar,setAadhaarFile]=useState(null)
    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });
    };
    useEffect(() => {
        const timer = setTimeout(() => {
            setShowPopup(true);
        }, 3000); // 3-second delay

        return () => clearTimeout(timer);
    }, []);

    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission logic here
        formData["email"]="anuj840084@gmail.com"
        formData["pancard_image"]=pan
        formData["aadhaarcard_image"]=aadhar
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        
        var raw = JSON.stringify(formData);
        var formdata = new FormData();

         formdata.append("email", localStorage.getItem("userData"));
    formdata.append("bankaccount", formData.bankaccount);
    formdata.append("ifsccode", formData.ifsccode);
    formdata.append("accountHolderName", formData.accountHolderName)
    if (pan) {
        formdata.append("pancard_image", pan);
    }
    
    if (aadhar) {
        formdata.append("aadhaarcard_image", aadhar);
    }

       
    var requestOptions = {
        method: 'POST',
        body: formdata,
        redirect: 'follow'
    };
        
        fetch("https://brightfutureapilatest.pythonanywhere.com/rolebased/update_kyc/", requestOptions)
          .then(response => response.text())
          .then(result => console.log(result))
          .catch(error => console.log('error', error));
        console.log("Form submitted",formData);
        debugger
    };

    const closePopup = () => setShowPopup(false);

    if (!showPopup) {
        return null;
    }
   
    const handleFileChange = (e) => {
        if (e.target.name === 'pancard') {
            setPancardFile(e.target.files[0]);
        } else if (e.target.name === 'aadhaar') {
            setAadhaarFile(e.target.files[0]);
        }
    }
    return (
        <div className="popup">
      <div className="popup-content">
        <div className="red-note">
          Please Fill your KYC Details before using brightFutureX
        </div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="panCard">PAN Card:</label>
          <input type="file" id="panCard" name="pancard" onChange={handleFileChange} />
          
          <label htmlFor="aadharCard">Aadhar Card:</label>
          <input type="file" id="aadharCard" name="aadhaar" onChange={handleFileChange} />

          <label htmlFor="ifsc">IFSC Code:</label>
          <input type="text" id="ifsc" name="ifsccode" onChange={handleChange} />
          
          <label htmlFor="ifsc">Account Holder Name</label>
          <input type="text" id="accountHolderName" name="accountHolderName" onChange={handleChange} />
          
          <label htmlFor="bankAccount">Bank Account:</label>
          <input type="text" id="bankAccount" name="bankaccount" onChange={handleChange} />

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
    );
};

export default AutoPopupForm;
