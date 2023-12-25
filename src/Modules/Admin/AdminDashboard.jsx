import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PendingRequest from "./PendingRequest";
import Withdraw from "./Withdraw";
import AccountDetails from "./AccountDetails";
import Fund from "../Account/Fund";
import DepositForm from "./DepositForm";
import TradeImport from "./TradeImport";
import TransactionForm from "./TransactionForm";
import MessagesTable from "./MessagesTable";
import { GiAmericanFootballPlayer } from "react-icons/gi";
import Footer from "./Footer";
import ContactTable from "./ContactTable";
import FundRequest from "./FundRequest";

export default function AdminDashboard() {
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("login") !== "admin") {
      navigate("/loginandregister");
    }
  }, [navigate]);

  const [selectedOption, setSelectedOption] = useState('ManageCustomer');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const handleSelect = (option) => {
    setSelectedOption(option);
    setIsSidebarOpen(false); // Close sidebar on selection in mobile view
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <>
    <div className="flex">
      {/* Mobile Menu Button */}
      <button onClick={toggleSidebar} className="lg:hidden p-4">
        Menu
      </button>

      {/* <div className={`lg:w-1/4 bg-gray-100 p-5 ${isSidebarOpen ? 'block' : 'hidden'} lg:block`}>
      <ul className="space-y-3">
          <li onClick={() => handleSelect('ManageCustomer')}>Manage Customer</li>
          <li onClick={() => handleSelect('Trade')}>Trade</li>
          <li onClick={() => handleSelect('WithdrawRequests')}>Withdraw Requests</li>
          <li onClick={() => handleSelect('Deposit')}>Deposit</li>
          <li onClick={() => handleSelect('ManageBlog')}>Manage Blog</li>
          <li onClick={() => handleSelect('AccountDetails')}>Account Details</li>
          <li onClick={() => handleSelect('Fund')}>Fund</li>
          <li onClick={() => handleSelect('WithdrawData')}>Withdraw Data</li>
          </ul>
      </div>

      <div className="flex-grow p-10">
        {selectedOption === 'ManageCustomer' && <PendingRequest />}
        {selectedOption === 'Trade' && <TradeImport/>}
        {selectedOption === 'WithdrawRequests' && <Withdraw />}
        {selectedOption === 'Deposit' && <DepositForm/>}
        {selectedOption === 'ManageBlog' && <>ManageBlog</>}
        {selectedOption === 'AccountDetails' && <AccountDetails />}
        {selectedOption === 'Fund' && <Fund />}
        {selectedOption === 'WithdrawData' && <Withdraw />}
        </div> */}
    </div>
      <div className="row">
        <div className="col-lg-2">
        <div className={` ${isSidebarOpen ? 'block' : 'hidden'} lg:block`}>
      <ul className="" style={{border:'1px solid black',height:'100vh',backgroundColor:'#1d233a',color:'white' }} >
          <li className="mt-5 p-2" onClick={() => handleSelect('ManageCustomer')}>Manage Customer</li>
          <li className='mt-1 p-2' onClick={() => handleSelect('Trade')}>Trade</li>
          <li className='mt-1 p-2' onClick={() => handleSelect('WithdrawRequests')}>Withdraw Requests</li>
          <li className='mt-1 p-2' onClick={() => handleSelect('Deposit')}>Deposit</li>
          {/* <li className='mt-1 p-2' onClick={() => handleSelect('ManageBlog')}>Manage Blog</li> */}
          <li className='mt-1 p-2' onClick={() => handleSelect('AccountDetails')}>Account Details</li>
          <li className='mt-1 p-2' onClick={() => handleSelect('Fund')}>Fund</li>
          <li className='mt-1 p-2' onClick={() => handleSelect('WithdrawData')}>Withdraw Data</li>
          <li className='mt-1 p-2' onClick={() => handleSelect('Trasaction')}>Add Trasaction</li>
          <li className='mt-1 p-2' onClick={() => handleSelect('support')}>Support Tickets</li>
          <li className='mt-1 p-2' onClick={() => handleSelect('contactTable')}>Contact</li>
          <li className='mt-1 p-2' onClick={() => handleSelect('footer')}>Footer</li>
          <li className='mt-1 p-2' onClick={() => handleSelect('FundRequest')}>FundRequest</li>
            {/* ... other menu items */}
          </ul>
      </div>
        </div>
        <div className="col-lg-10">
        <div className=""  style={{height:'100vh'}}>
        {selectedOption === 'ManageCustomer' && <PendingRequest />}
        {selectedOption === 'Trade' && <TradeImport/>}
        {selectedOption === 'WithdrawRequests' && <Withdraw />}
        {selectedOption === 'Deposit' && <DepositForm/>}
        {selectedOption === 'ManageBlog' && <>ManageBlog</>}
        {selectedOption === 'AccountDetails' && <AccountDetails />}
        {selectedOption === 'Fund' && <Fund />}
        {selectedOption === 'WithdrawData' && <Withdraw />} 
        {selectedOption === 'Trasaction' && <TransactionForm />}
        {selectedOption === 'support' && <MessagesTable />}
        {selectedOption === 'contactTable' && <ContactTable />}
        {selectedOption === 'footer' && <Footer />}
        {selectedOption === 'FundRequest' && <FundRequest />}
        </div>
        </div>

      </div>
      </>
    
  );


  
}
