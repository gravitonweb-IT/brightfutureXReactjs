import React, { useState } from 'react';
import axios from 'axios';

function DepositForm() {
    const [formData, setFormData] = useState({
        Name: '',
        Email: '',
        Amount: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8000/rolebased/deposit/', formData);
            console.log(response.data);
            // Additional logic after successful post (e.g., clear form, show message)
        } catch (error) {
            console.error("Error posting data: ", error);
            // Error handling logic
        }
    };

    return (
        <>
        <div className='row'>
            <div className='col-lg-3'></div>
            <div className='col-lg-6'>
            <form onSubmit={handleSubmit} className='p-3' style={{border:'1px solid white',boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px'}}>
            <div>
                <label>Name</label>
                <input
                    type="text"
                    name="Name"
                    value={formData.Name}
                    onChange={handleChange}
                    style={{border:'1px solid #0000006b',borderRadius:'5px'}}
                />
            </div>
            <div>
                <label  className='mt-2'>Email</label>
                <input
                    type="email"
                    name="Email"
                    value={formData.Email}
                    onChange={handleChange}
                    style={{border:'1px solid #0000006b',borderRadius:'5px'}}

                   
                />
            </div>
            <div>
                <label  className='mt-2'>Amount</label>
                <input
                    type="text"
                    name="Amount"
                    value={formData.Amount}
                    onChange={handleChange}
                    style={{border:'1px solid #0000006b',borderRadius:'5px'}}

                />
            </div>
            <button type="submit" className='p-2 w-100 mt-3 mb-3' style={{backgroundColor:'#1d233a',color:'white',borderRadius:'5px'}}>Submit</button>
        </form>
            </div>

        </div>
        </>
      
    );
}

export default DepositForm;
