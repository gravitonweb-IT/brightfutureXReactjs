import { Link, useNavigate } from "react-router-dom";
import { IoPerson } from "react-icons/io5";
import { MdLibraryBooks } from "react-icons/md";
import { BsFillClipboard2DataFill } from "react-icons/bs";
import { FaDollarSign } from "react-icons/fa6";
import { servieUrl } from "../../env/env";
import React, { useEffect, useState } from "react";
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
import { GiTrade } from "react-icons/gi";
import "./user.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { TfiMenuAlt } from "react-icons/tfi";











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
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 1,
        infinite: true,
        speed: 500,
        autoplay: false,
        autoplaySpeed: 3000,
      },
    },
  ],
};
const UserDashboard = ({ children }) => {
  const navigate = useNavigate();

  const [base64Image, setBase64Image] = useState(null);

  const [profile, setProfile] = useState([]);

  const uploadImage = (value) => {
    ;
  };

  const sourceDiv = document.querySelector(".tv-embed-widget-wrapper__body");

  const targetDiv = document.getElementById("grapch");

  const [selectedMenuItem, setSelectedMenuItem] = useState("Dashboard");
const[open,setOpen]=useState(false)
  const menuItems = [
    { name: "Dashboard", icon: AiOutlineDashboard },
    { name: "Transaction", icon: BsFillClipboard2DataFill },
    { name: "Add Fund", icon: AiOutlineFundProjectionScreen },
    { name: "Withdraw", icon: AiOutlineMoneyCollect },
    { name: "Trade Now", icon: GiTrade },
    { name: "Edit Profile", icon: AiOutlineProfile },
    { name: "Change Password", icon: AiOutlineLock },
    { name: "Logout", icon: AiOutlineLogout },
    { name: "Support Ticket", icon: AiOutlineCustomerService },
    { name: "Payout History", icon: AiOutlineHistory },
    {name:"portfolio",icon:AiOutlineHistory}
  ];

  const handleMenuItemClick = (itemName) => {
    setSelectedMenuItem(itemName);
    // You can perform additional actions here if needed
  };

  useEffect(() => {
    if (localStorage.getItem("userData") == null) {
      navigate("/loginandregister");
    }
  }, [navigate]);
  const [dataValue, setDataValue] = useState([]);

  useEffect(() => {
    var formdata = new FormData();
    formdata.append("userEmail", localStorage.getItem("userData"));

    var requestOptions = {
      method: "POST",
      body: formdata,
      redirect: "follow",
    };

    fetch(servieUrl.url + "rolebased/UserAmountStatus/", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        let totalProfit = 0;
        let totalLoss = 0;
        let totalPrice = 0;

        // Loop through the data array
        result.forEach((item) => {
          const { profit, loss, price } = item.fields;

          // Add the profit, loss, and price values to the corresponding totals
          totalProfit += Number(profit);
          totalLoss += Number(loss);
          totalPrice += Number(price);
        });

        // Create an object to store the total values
        const result1 = {
          profit: totalProfit,
          loss: totalLoss,
          price: totalPrice,
        };

        ;

        setDataValue(result1);
      })
      .catch((error) => console.log("error", error));
  }, []);
  useEffect(() => {
    var formdata = new FormData();

    formdata.append("userEmail", localStorage.getItem("userData"));

    ;

    var requestOptions = {
      method: "POST",

      body: formdata,

      redirect: "follow",
    };

    fetch(servieUrl.url + "rolebased/uploadProfile/", requestOptions)
      .then((response) => response.json())

      .then((result) => {
        setProfile(result);
      })

      .catch((error) => console.log("error", error));

    console.log(profile);
  }, []);

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = (e) => {
        setBase64Image(e.target.result);

        if (e.target.result) {
          var formdata = new FormData();

          formdata.append("userEmail", localStorage.getItem("userData"));

          formdata.append("image", e.target.result);

          var requestOptions = {
            method: "POST",

            body: formdata,

            redirect: "follow",
          };

          fetch(servieUrl.url + "rolebased/uploadProfile/", requestOptions)
            .then((response) => response.json())

            .then((result) => {
              alert("successfully update image");
            })

            .catch((error) => console.log("error", error));
        }

        // console.log("base64",e.target.result)
      };

      reader.readAsDataURL(file);
    }

    console.log("base64", e.target.result);
  };

  const handleOpen = () => {
    setOpen(!open); // Toggle the value of 'open'
  };
  
  return (
    <>
    
      <div className="row ">
        <div className="col-lg-2  col-sm-12">
                      <div className="d-none d-sm-block">

          <div className="min-h-screen flexbg-gray-100 w-100">
            <div className=" px-2 py-5 "  style={{backgroundColor:'#1d233a',height:'100vh'}}>
              <ul className="space-y-3">
                <li
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
                </li>
                <li
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
                </li>
                <li
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
                </li>
                <li
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
                </li>
                <li
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
                </li>
                <li
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
                </li>
                <li
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
                </li>
                {/* <li
                  className={`flex items-center text-gray-700 hover:text-blue-500 cursor-pointer ${
                    selectedMenuItem === "Logout" ? "font-bold" : ""
                  }`}
                  onClick={() => setSelectedMenuItem("Logout")}
                >
                  <Link to="/user-logout" className="flex items-center">
                    <AiOutlineLogout className="mr-2" />
                    Logout
                  </Link>
                </li> */}
                <li
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
                </li>
                <li
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
                </li>
                <li
                  className={`flex items-center text-gray-700 hover:text-blue-500 py-2 px-2 border-l-[2px]  hover:border-blue-500 hover:bg-gray-100 rounded cursor-pointer ${
                    selectedMenuItem === "portfolio"
                      ? " border-l-[2px] border-blue-500 bg-gray-100 font-bold"
                      : ""
                  }`}

                  style={{color: selectedMenuItem === "portfolio"  ? 'black' :'white'}}

                  onClick={() => setSelectedMenuItem("portfolio")}
                >
                  <Link to="/portfolio" className="flex items-center">
                    <AiOutlineMoneyCollect className="mr-2" />
Portfolio                  </Link>
                </li>
              </ul>
            </div>
          </div>
          </div>
          <div className="d-lg-none ">
            <div style={{backgroundColor:'rgb(29, 35, 58)'}} className="p-2">
            <TfiMenuAlt style={{fontSize:'36px',color:'white'}} onClick={handleOpen}/>

            </div>
          {open && 
          <center style={{backgroundColor:'rgb(29, 35, 58)',marginTop:'-10px'}}>
     <div
                  className={`mt-3 flex items-center text-gray-700 hover:text-blue-500 py-2 px-2 border-l-[2px]  hover:border-blue-500 hover:bg-gray-100 rounded cursor-pointer ${
                    selectedMenuItem === "Dashboard"
                      ? " border-l-[2px] border-blue-500 bg-gray-100 font-bold"
                      : ""
                  }`}
                
                  onClick={() => setSelectedMenuItem("Dashboard")}
                >
                  <Link to="/UserDashboard" className="flex items-center" style={{fontSize:'22px'}}>
                    <AiOutlineDashboard className="mr-2" style={{fontSize:'22px'}}/>
                    Dashboard
                  </Link>
               </div>
                <div
                  className={`mt-3 flex items-center text-white-700 hover:text-blue-500 py-2 px-2 border-l-[2px]  hover:border-blue-500 hover:bg-gray-100 rounded cursor-pointer ${
                    selectedMenuItem === "Transaction"
                      ? " border-l-[2px] border-blue-500 bg-gray-100 font-bold"
                      : ""
                  }`}

                  style={{color: selectedMenuItem === "Transaction"  ? 'black' :'white'}}
                  onClick={() => setSelectedMenuItem("Transaction")}
                >
                  <Link to="/usertransaction" className="flex items-center" style={{fontSize:'22px'}}>
                    <BsFillClipboard2DataFill className="mr-2" style={{fontSize:'22px'}}/>
                    Transaction
                  </Link>
               </div>
                <div
                  className={`mt-3 flex items-center text-gray-700 hover:text-blue-500 py-2 px-2 border-l-[2px]  hover:border-blue-500 hover:bg-gray-100 rounded cursor-pointer ${
                    selectedMenuItem === "Fund"
                      ? " border-l-[2px] border-blue-500 bg-gray-100 font-bold"
                      : ""
                  }`}
                  style={{color: selectedMenuItem === "Fund"  ? 'black' :'white'}}

                  onClick={() => setSelectedMenuItem("Fund")}
                >
                  <Link to="/user-fund" className="flex items-center" style={{fontSize:'22px'}}>
                    <AiOutlineFundProjectionScreen className="mr-2" style={{fontSize:'22px'}}/>
                    Add Fund
                  </Link>
               </div>
                <div
                  className={`mt-3 flex items-center text-gray-700 hover:text-blue-500 py-2 px-2 border-l-[2px]  hover:border-blue-500 hover:bg-gray-100 rounded cursor-pointer ${
                    selectedMenuItem === "Withdraw"
                      ? " border-l-[2px] border-blue-500 bg-gray-100 font-bold"
                      : ""
                  }`}

                  style={{color: selectedMenuItem === "Withdraw"  ? 'black' :'white'}}

                  onClick={() => setSelectedMenuItem("Withdraw")}
                >
                  <Link to="/user-withdraw" className="flex items-center" style={{fontSize:'22px'}}>
                    <AiOutlineMoneyCollect className="mr-2" style={{fontSize:'22px'}}/>
                    Withdraw
                  </Link>
               </div>
                <div
                  className={`mt-3 flex items-center text-gray-700 hover:text-blue-500 py-2 px-2 border-l-[2px]  hover:border-blue-500 hover:bg-gray-100 rounded cursor-pointer ${
                    selectedMenuItem === "Now"
                      ? " border-l-[2px] border-blue-500 bg-gray-100 font-bold"
                      : ""
                  }`}
                  style={{color:selectedMenuItem === "Now" ? 'black' :'white'}}

                  onClick={() => setSelectedMenuItem("Now")}
                >
                  <Link to="/tradeNow" className="flex items-center" style={{fontSize:'22px'}}>
                    <GiTrade className="mr-2" style={{fontSize:'22px'}}/>
                    Trade Now
                  </Link>
               </div>
                <div
                  className={`mt-3 flex items-center text-gray-700 hover:text-blue-500 py-2 px-2 border-l-[2px]  hover:border-blue-500 hover:bg-gray-100 rounded cursor-pointer ${
                    selectedMenuItem === "Profile"
                      ? " border-l-[2px] border-blue-500 bg-gray-100 font-bold"
                      : ""
                  }`}
                  style={{color:selectedMenuItem === "Profile" ? 'black' :'white'}}

                  onClick={() => setSelectedMenuItem("Profile")}
                >
                  <Link to="/edit-profile" className="flex items-center" style={{fontSize:'22px'}}>
                    <AiOutlineProfile className="mr-2" style={{fontSize:'22px'}}/>
                     Profile
                  </Link>
               </div>
                <div
                  className={`mt-3 flex items-center text-gray-700 hover:text-blue-500 py-2 px-2 border-l-[2px]  hover:border-blue-500 hover:bg-gray-100 rounded cursor-pointer ${
                    selectedMenuItem === "Password"
                      ? " border-l-[2px] border-blue-500 bg-gray-100 font-bold"
                      : ""
                  }`}
                  style={{color:selectedMenuItem === "Password" ? 'black' :'white'}}

                  onClick={() => setSelectedMenuItem("Password")}
                >
                  <Link to="/change-password" className="flex items-center" style={{fontSize:'22px'}}>
                    <AiOutlineLock className="mr-2" style={{fontSize:'22px'}}/>
                    Change Password
                  </Link>
               </div>
               
                <div
                  className={`mt-3 flex items-center text-gray-700 hover:text-blue-500 py-2 px-2 border-l-[2px]  hover:border-blue-500 hover:bg-gray-100 rounded cursor-pointer ${
                    selectedMenuItem === "Ticket"
                      ? " border-l-[2px] border-blue-500 bg-gray-100 font-bold"
                      : ""
                  }`}
                  style={{color:selectedMenuItem === "Ticket" ? 'black' :'white'}}

                  onClick={() => setSelectedMenuItem("Ticket")}
                >
                  <Link to="/support-ticket" className="flex items-center" style={{fontSize:'22px'}}>
                    <AiOutlineCustomerService className="mr-2" style={{fontSize:'22px'}}/>
                    Support Ticket
                  </Link>
                </div>
                <div
                  className={`mt-3 flex items-center text-gray-700 hover:text-blue-500 py-2 px-2 border-l-[2px]  hover:border-blue-500 hover:bg-gray-100 rounded cursor-pointer ${
                    selectedMenuItem === "History"
                      ? " border-l-[2px] border-blue-500 bg-gray-100 font-bold"
                      : ""
                  }`}
                  style={{color:selectedMenuItem === "Ticket" ? 'black' :'white'}}

                  onClick={() => setSelectedMenuItem("History")}
                >
                  <Link to="/payout-history" className="flex items-center" style={{fontSize:'22px'}}>
                    <AiOutlineHistory className="mr-2" style={{fontSize:'22px'}}/>
                    Payout History
                  </Link>
                </div>
                <div
                  className={`mt-3 flex items-center text-gray-700 hover:text-blue-500 py-2 px-2 border-l-[2px]  hover:border-blue-500 hover:bg-gray-100 rounded cursor-pointer ${
                    selectedMenuItem === "portfolio"
                      ? " border-l-[2px] border-blue-500 bg-gray-100 font-bold"
                      : ""
                  }`}

                  style={{color: selectedMenuItem === "portfolio"  ? 'black' :'white'}}

                  onClick={() => setSelectedMenuItem("portfolio")}
                >
                  <Link to="/portfolio" className="flex items-center" style={{fontSize:'22px'}}>
                    <AiOutlineMoneyCollect className="mr-2" style={{fontSize:'22px'}}/>
Portfolio                  </Link>
               </div>

          </center>
        
               
                }
          </div>
        </div>
        <div className="col-lg-10  col-sm-12 ">{children} </div>
      </div>
    </>
  );
};

export default UserDashboard;
