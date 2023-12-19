import React, { useState } from 'react';
import axios from 'axios';
import { servieUrl } from '../../env/env';

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

const trasaction = async()=>{
    const form ={  name: formData.Name,
    email: formData.Email,
    type: 'Credit',
    amount: formData.Amount}
    try {
        const response = await fetch(servieUrl.url+'rolebased/transaction/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(form),
        });

        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }

        await response.json();
     
       
    } catch (error) {
        console.error('Error submitting form:', error);
    }
}

const amountstatus=()=>{
    trasaction()
    var myHeaders = new Headers();
myHeaders.append("Accept", "*/*");
myHeaders.append("Accept-Language", "en-US,en;q=0.9");
myHeaders.append("Connection", "keep-alive");
myHeaders.append("DNT", "1");
myHeaders.append("Origin", "http://localhost:3000");
myHeaders.append("Referer", "http://localhost:3000/");
myHeaders.append("User-Agent", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36 Avast/119.0.0.0");
const today = new Date();
var formdata = new FormData();
formdata.append("date", today.toLocaleDateString('en-CA', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
  }));
formdata.append("price",formData.Amount);
formdata.append("loss", "0");
formdata.append("profit", "0");
formdata.append("user_email", formData.Email);

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: formdata,
  redirect: 'follow'
};

fetch(servieUrl.url+"growadmin/amount_account/", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
}

    const handleSubmit = async (e) => {
        amountstatus()
        e.preventDefault();
        try {
            const response = await axios.post(servieUrl.url+'rolebased/deposit/', formData);
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
