import React, { useEffect, useState } from 'react'
import { servieUrl } from '../../env/env';

const FundRequest = () => {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(servieUrl.url+'rolebased/user-data/');
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                // const messages = JSON.parse(data);
                debugger
                setMessages(data);
            } catch (error) {
                console.error("Error fetching data: ", error);
            }
        };

        fetchData();
    }, []);
    const toggleScreenshotVisibility = (index) => {
        setMessages(messages.map((message, idx) => {
            if (idx === index) {
                return { ...message, isScreenshotVisible: !message.isScreenshotVisible };
            }
            return message;
        }));
    };
    return (
        <div className="table-container">
            <table className="styled-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>User ID</th>
                        <th>UTR Number</th>
                        <th>Show Screenshot</th>
                    </tr>
                </thead>
                <tbody>
                    {messages?.map((message, index) => (
                        <tr key={index}> {/* Use a unique key, message.id or similar */}
                            <td>{message.name}</td> {/* Adjust these fields based on your API response */}
                            <td>{message.user_id}</td>
                            <td>{message.utr_number}</td>
                            <td>
                                <button onClick={() => toggleScreenshotVisibility(index)}>
                                    {message.isScreenshotVisible ? 'Hide' : 'Show'}
                                </button>
                                {message.isScreenshotVisible && <img src={"http://127.0.0.1:8000"+message.screenshot} alt="Screenshot" />}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default FundRequest