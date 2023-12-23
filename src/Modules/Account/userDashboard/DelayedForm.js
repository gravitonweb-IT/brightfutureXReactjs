import React, { useState, useEffect } from 'react';
import './YourPopupStyles.css'; // Import your CSS styles

const AutoPopupForm = () => {
    const [showPopup, setShowPopup] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowPopup(true);
        }, 3000); // 3-second delay

        return () => clearTimeout(timer);
    }, []);

    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission logic here
        console.log("Form submitted");
    };

    const closePopup = () => setShowPopup(false);

    if (!showPopup) {
        return null;
    }

    return (
        <div className="popup">
            <div className="popup-content">
           
                <button onClick={closePopup} className="close-btn">X</button>
                <div class="red-note">
    Please Fill your KYC Details before using brightFutureX
</div>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="panCard" className='mt-2'>PAN Card:</label>
                    <input type="file" id="panCard" name="panCard" className='w-100 ' style={{border:'1px solid black',borderRadius:'5px'}}/>
                    
                    <label htmlFor="aadharCard" className='mt-2'>Aadhar Card:</label>
                    <input type="file" id="aadharCard" name="aadharCard"  className='w-100 ' style={{border:'1px solid black',borderRadius:'5px'}}/>

                    <label htmlFor="ifsc" className='mt-2'>IFSC Code:</label>
                    <input type="text" id="ifsc" name="ifsc" className='w-100 ' style={{border:'1px solid black',borderRadius:'5px'}}/>

                    <label htmlFor="bankAccount" className='mt-2'>Bank Account:</label>
                    <input type="text" id="bankAccount" name="bankAccount" className='w-100 ' style={{border:'1px solid black',borderRadius:'5px'}}/>

                    <button type="submit" className='w-100 p-2 mt-3' style={{border:'1px solid #1d233a',backgroundColor:'#1d233a',color:'white',borderRadius:'5px'}}>Submit</button>
                </form>
            </div>
        </div>
    );
};

export default AutoPopupForm;
