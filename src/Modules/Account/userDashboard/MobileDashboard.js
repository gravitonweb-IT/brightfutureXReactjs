import React,{useState} from 'react'
import Slider from "react-slick";
import { Link } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { GiTrade } from "react-icons/gi";
import { BsFillClipboard2DataFill } from "react-icons/bs";

import {
    AiOutlineDashboard,
    AiOutlineFundProjectionScreen,
    AiOutlineMoneyCollect,
    AiOutlineProfile,
    AiOutlineLock,
    AiOutlineLogout,
    AiOutlineCustomerService,
    AiOutlineHistory,
  } from "react-icons/ai";


var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: false,
    autoplaySpeed: 3000,
    slidesToShow: 4,
    slidesToScroll: 2,
  
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
          infinite: true,
          dots: false,
          speed: 500,
          autoplay: false,
          autoplaySpeed: 3000,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
          speed: 500,
          autoplay: false,
          autoplaySpeed: 3000,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 1,
          infinite: true,
          speed: 500,
          autoplay: false,
          autoplaySpeed: 3000,
        },
      },
    ],
  };

const MobileDashboard = ()=>{
    const [selectedMenuItem, setSelectedMenuItem] = useState("Dashboard");

    return(
        <>
          <div className="d-lg-none ">
                <div className="row m-2" style={{border:'1px solid white',boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px'}}>
                  <Slider {...settings}>
                
                <div
                  className={`flex items-center text-gray-700 hover:text-blue-500 py-2 px-2 border-l-[2px]  hover:border-blue-500 hover:bg-gray-100 rounded cursor-pointer ${
                    selectedMenuItem === "Dashboard"
                      ? " border-l-[2px] border-blue-500 bg-gray-100 font-bold"
                      : ""
                  }`}
                  onClick={() => setSelectedMenuItem("Dashboard")}
                >
                  <Link to="/UserDashboard" className="flex items-center">
                    <AiOutlineDashboard className="mr-2" />
                    Dashboard
                  </Link>
               </div>
                <div
                  className={`flex items-center text-white-700 hover:text-blue-500 py-2 px-2 border-l-[2px]  hover:border-blue-500 hover:bg-gray-100 rounded cursor-pointer ${
                    selectedMenuItem === "Transaction"
                      ? " border-l-[2px] border-blue-500 bg-gray-100 font-bold"
                      : ""
                  }`}

                  style={{color: selectedMenuItem === "Transaction"  ? 'black' :'white'}}
                  onClick={() => setSelectedMenuItem("Transaction")}
                >
                  <Link to="/usertransaction" className="flex items-center">
                    <BsFillClipboard2DataFill className="mr-2" />
                    Transaction
                  </Link>
               </div>
                <div
                  className={`flex items-center text-gray-700 hover:text-blue-500 py-2 px-2 border-l-[2px]  hover:border-blue-500 hover:bg-gray-100 rounded cursor-pointer ${
                    selectedMenuItem === "Fund"
                      ? " border-l-[2px] border-blue-500 bg-gray-100 font-bold"
                      : ""
                  }`}
                  style={{color: selectedMenuItem === "Fund"  ? 'black' :'white'}}

                  onClick={() => setSelectedMenuItem("Fund")}
                >
                  <Link to="/user-fund" className="flex items-center">
                    <AiOutlineFundProjectionScreen className="mr-2" />
                    Add Fund
                  </Link>
               </div>
                <div
                  className={`flex items-center text-gray-700 hover:text-blue-500 py-2 px-2 border-l-[2px]  hover:border-blue-500 hover:bg-gray-100 rounded cursor-pointer ${
                    selectedMenuItem === "Withdraw"
                      ? " border-l-[2px] border-blue-500 bg-gray-100 font-bold"
                      : ""
                  }`}

                  style={{color: selectedMenuItem === "Withdraw"  ? 'black' :'white'}}

                  onClick={() => setSelectedMenuItem("Withdraw")}
                >
                  <Link to="/user-withdraw" className="flex items-center">
                    <AiOutlineMoneyCollect className="mr-2" />
                    Withdraw
                  </Link>
               </div>
                <div
                  className={`flex items-center text-gray-700 hover:text-blue-500 py-2 px-2 border-l-[2px]  hover:border-blue-500 hover:bg-gray-100 rounded cursor-pointer ${
                    selectedMenuItem === "Now"
                      ? " border-l-[2px] border-blue-500 bg-gray-100 font-bold"
                      : ""
                  }`}
                  style={{color:selectedMenuItem === "Now" ? 'black' :'white'}}

                  onClick={() => setSelectedMenuItem("Now")}
                >
                  <Link to="/tradeNow" className="flex items-center">
                    <GiTrade className="mr-2" />
                    Trade Now
                  </Link>
               </div>
                <div
                  className={`flex items-center text-gray-700 hover:text-blue-500 py-2 px-2 border-l-[2px]  hover:border-blue-500 hover:bg-gray-100 rounded cursor-pointer ${
                    selectedMenuItem === "Profile"
                      ? " border-l-[2px] border-blue-500 bg-gray-100 font-bold"
                      : ""
                  }`}
                  style={{color:selectedMenuItem === "Profile" ? 'black' :'white'}}

                  onClick={() => setSelectedMenuItem("Profile")}
                >
                  <Link to="/edit-profile" className="flex items-center">
                    <AiOutlineProfile className="mr-2" />
                     Profile
                  </Link>
               </div>
                <div
                  className={`flex items-center text-gray-700 hover:text-blue-500 py-2 px-2 border-l-[2px]  hover:border-blue-500 hover:bg-gray-100 rounded cursor-pointer ${
                    selectedMenuItem === "Password"
                      ? " border-l-[2px] border-blue-500 bg-gray-100 font-bold"
                      : ""
                  }`}
                  style={{color:selectedMenuItem === "Password" ? 'black' :'white'}}

                  onClick={() => setSelectedMenuItem("Password")}
                >
                  <Link to="/change-password" className="flex items-center">
                    <AiOutlineLock className="mr-2" />
                    Change Password
                  </Link>
               </div>
               
                <div
                  className={`flex items-center text-gray-700 hover:text-blue-500 py-2 px-2 border-l-[2px]  hover:border-blue-500 hover:bg-gray-100 rounded cursor-pointer ${
                    selectedMenuItem === "Ticket"
                      ? " border-l-[2px] border-blue-500 bg-gray-100 font-bold"
                      : ""
                  }`}
                  style={{color:selectedMenuItem === "Ticket" ? 'black' :'white'}}

                  onClick={() => setSelectedMenuItem("Ticket")}
                >
                  <Link to="/support-ticket" className="flex items-center">
                    <AiOutlineCustomerService className="mr-2" />
                    Support Ticket
                  </Link>
                </div>
                <div
                  className={`flex items-center text-gray-700 hover:text-blue-500 py-2 px-2 border-l-[2px]  hover:border-blue-500 hover:bg-gray-100 rounded cursor-pointer ${
                    selectedMenuItem === "History"
                      ? " border-l-[2px] border-blue-500 bg-gray-100 font-bold"
                      : ""
                  }`}
                  style={{color:selectedMenuItem === "Ticket" ? 'black' :'white'}}

                  onClick={() => setSelectedMenuItem("History")}
                >
                  <Link to="/payout-history" className="flex items-center">
                    <AiOutlineHistory className="mr-2" />
                    Payout History
                  </Link>
                </div>
                <div
                  className={`flex items-center text-gray-700 hover:text-blue-500 py-2 px-2 border-l-[2px]  hover:border-blue-500 hover:bg-gray-100 rounded cursor-pointer ${
                    selectedMenuItem === "Withdraw"
                      ? " border-l-[2px] border-blue-500 bg-gray-100 font-bold"
                      : ""
                  }`}

                  style={{color: selectedMenuItem === "Withdraw"  ? 'black' :'white'}}

                  onClick={() => setSelectedMenuItem("Withdraw")}
                >
                  <Link to="/portfolio" className="flex items-center">
                    <AiOutlineMoneyCollect className="mr-2" />
Portfolio                  </Link>
               </div>
      
             

                 

                  
                  </Slider>
                </div>
          </div>
        </>
    )
}

export default MobileDashboard