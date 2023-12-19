import { faHouseFloodWater } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';
import { servieUrl } from '../../env/env';

const inputStyle = {
    padding: '10px',
    margin: '10px 0',
    border: '1px solid #ddd',
    borderRadius: '4px',
    width: 'calc(100% - 22px)', // account for padding and border
};

const buttonStyle = {
    padding: '10px 20px',
    margin: '10px 0',
    border: 'none',
    borderRadius: '4px',
    backgroundColor: '#007bff',
    color: 'white',
    cursor: 'pointer',
    width: '100%',
};

const formStyle = {
    maxWidth: '500px',
    margin: 'auto',
    backgroundColor: '#f7f7f7',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
};

const Footer = () => {
    const [contactInfo, setContactInfo] = useState({
        address: '',
        email: '',
        phone: '',
        social_media_facebook: '',
        social_media_instagram: '',
        social_media_linkedin: '',
        social_media_twitter: ''
    });

    const handleChange = (e) => {
        setContactInfo({
            ...contactInfo,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(servieUrl.url+'rolebased/contact-info/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(contactInfo)
            });
            if (response.ok) {
                const data = await response.json();
                console.log(data);
                alert("Updated")
                // Handle success here
            } else {
                console.error('Failed to submit contact info');
                // Handle errors here
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            // Handle network errors here
        }
    };

    return (
        <div style={{ padding: '50px', backgroundColor: '#eee', minHeight: '100vh' }}>
            <form onSubmit={handleSubmit} style={formStyle}>
                <input type="text" name="address" value={contactInfo.address} onChange={handleChange} placeholder="Address" style={inputStyle} />
                <input type="email" name="email" value={contactInfo.email} onChange={handleChange} placeholder="Email" style={inputStyle} />
                <input type="tel" name="phone" value={contactInfo.phone} onChange={handleChange} placeholder="Phone" style={inputStyle} />
                <input type="text" name="social_media_facebook" value={contactInfo.social_media_facebook} onChange={handleChange} placeholder="Facebook" style={inputStyle} />
                <input type="text" name="social_media_instagram" value={contactInfo.social_media_instagram} onChange={handleChange} placeholder="Instagram" style={inputStyle} />
                <input type="text" name="social_media_linkedin" value={contactInfo.social_media_linkedin} onChange={handleChange} placeholder="LinkedIn" style={inputStyle} />
                <input type="text" name="social_media_twitter" value={contactInfo.social_media_twitter} onChange={handleChange} placeholder="Twitter" style={inputStyle} />
                <button type="submit" style={buttonStyle}>Submit</button>
            </form>
        </div>
    );
};

export default Footer;
