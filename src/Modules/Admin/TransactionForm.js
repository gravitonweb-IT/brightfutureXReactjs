import React, { useState } from 'react';
import './TransactionForm.css'; // Import the CSS file for styling
import { servieUrl } from '../../env/env';

const TransactionForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        type: '',
        amount: ''
    });
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setShowSuccessMessage(false);

        try {
            const response = await fetch(servieUrl.url+'rolebased/transaction/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error(`Error: ${response.status}`);
            }

            await response.json();
            setShowSuccessMessage(true);
            setFormData({ name: '', email: '', type: '', amount: '' }); // Reset form
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };

    return (
        <div className="transaction-form-container">
            <form onSubmit={handleSubmit} className="transaction-form">
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Name"
                    className="form-input"
                />
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    className="form-input"
                />
                <select name="type" value={formData.type} onChange={handleChange} className="form-select">
                    <option value="">Select Type</option>
                    <option value="Debit">Debit</option>
                    <option value="Credit">Credit</option>
                    <option value="Payout">Payout</option>
                </select>
                <input
                    type="number"
                    name="amount"
                    value={formData.amount}
                    onChange={handleChange}
                    placeholder="Amount"
                    className="form-input"
                />
                <button type="submit" className="submit-button">Submit Transaction</button>
            </form>
            {showSuccessMessage && <div className="success-message">Transaction Successful!</div>}
        </div>
    );
};

export default TransactionForm;
