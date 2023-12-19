
// src/components/ForgotPassword.js

import React, { useState } from 'react';
import { servieUrl } from '../../env/env';

function Forget() {
  const [email, setEmail] = useState('');
  
  const sendEmailWithUrl = (email, url) => {
    var formdata = new FormData();
    formdata.append("to", email);
    formdata.append("url", url);

    var requestOptions = {
        method: 'POST',
        body: formdata,
        redirect: 'follow'
    };

    fetch(servieUrl.url+"rolebased/email/", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
}


const extractAndReplaceUrl = (json) => {
  const regex = /localhost:\d{4}\/[a-zA-Z0-9/-]+/;
  const match = json.message.match(regex);
  if (match) {
      return match[0].replace('localhost:8000', 'https://tradingproject-427cb.web.app/reset');
  }
  return null;
};

const generateurl=(email)=>{
  var formdata = new FormData();
  formdata.append("email", email);
  
  var requestOptions = {
    method: 'POST',
    body: formdata,
    redirect: 'follow'
  };
  
  fetch(servieUrl.url+"/rolebased/", requestOptions)
    .then(response => response.json())
    .then(result => {
      // const urlStart = result.message.indexOf("localhost");
      // const url = urlStart.substring(urlStart);-
      const url =extractAndReplaceUrl(result)
      console.log("url",url)
      localStorage.setItem("url",url)

      sendEmailWithUrl(email,url)
    })
    .catch(error => console.log('error', error));
}
  const handleSubmit = (e) => {
    generateurl(email)
    e.preventDefault();
    alert("submited")
    // Implement your password reset logic here
    console.log(`Password reset request for email: ${email}`);
  };

  return (
    <div className="mt-16 flex items-center justify-center">
      <div className="max-w-md w-full p-6 bg-white rounded-md shadow-md">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Forgot Password</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-600">Email</label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <button
              type="submit"
              className="w-full px-4 py-2 bg-[#2774AE] text-white rounded-md hover:bg-blue-600"
            >
              Reset Password
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Forget;
