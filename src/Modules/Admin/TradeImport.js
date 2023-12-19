import axios from 'axios';
import React, { useState } from 'react'
import MainStock from '../MainStock';
import MainStockAdmin from './MainStockAdmin';
import { servieUrl } from '../../env/env';

const TradeImport = () => {
    const [file, setFile] = useState(null);

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleUpload = async () => {
        if (!file) {
            alert('Please select a file first!');
            return;
        }

        const formData = new FormData();
        formData.append('excel_file', file);

        try {
            const response = await axios.post(servieUrl.url+'rolebased/upload_excel/', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            console.log(response.data);
            alert('File uploaded successfully!');
        } catch (error) {
            console.error('Error uploading file: ', error);
            alert('Error uploading file');
        }
    };

    return (
        <div>
            <input type="file" onChange={handleFileChange} accept=".xlsx, .xls" />
            <button onClick={handleUpload}>Upload</button>
            <MainStockAdmin/>
        </div>
    );
}

export default TradeImport