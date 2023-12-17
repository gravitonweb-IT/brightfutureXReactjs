import { Link, useNavigate } from "react-router-dom";
import { IoPerson } from "react-icons/io5";
import { MdLibraryBooks } from "react-icons/md";
import { BsFillClipboard2DataFill } from "react-icons/bs";
import { FaRupeeSign } from "react-icons/fa";
import { FaSortAmountUpAlt } from "react-icons/fa";
import { FcNeutralTrading } from "react-icons/fc";
import { MdPayments } from "react-icons/md";
import { GiProfit } from "react-icons/gi";
import { RxDashboard } from "react-icons/rx";

import React, { Children, useEffect, useState } from "react";
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
import "../../Account/user.css";
import { servieUrl } from "../../../env/env";
import UserDashboard from "../UserDashboard";
import './DashboardUser.css'
const DashboardUser = ({ Children }) => {
  const navigate = useNavigate();

  const [base64Image, setBase64Image] = useState(null);

  const [profile, setProfile] = useState([]);

  const uploadImage = (value) => {
    debugger;
  };

  const sourceDiv = document.querySelector(".tv-embed-widget-wrapper__body");

  const targetDiv = document.getElementById("grapch");

  const [selectedMenuItem, setSelectedMenuItem] = useState("Dashboard");
  const [dataDashboard,setDataDashboard]=useState(null)

  const [totalAmount, setTotalAmount] = useState(0);
  const [totalProfit, setTotalProfit] = useState(0);
  const [totalLoss, setTotalLoss] = useState(0);
  const [totalWithdrawal, setTotalWithdrawal] = useState(0);
  const [totalDeposit, setTotalDeposit] = useState(0);

useEffect(()=>{
  var formdata = new FormData();
  formdata.append("userEmail", "usertestuser@gmail.com");
  
  var requestOptions = {
    method: 'POST',
    body: formdata,
    redirect: 'follow'
  };
  
  fetch(servieUrl.url+"rolebased/totalUserOneData/", requestOptions)
    .then(response => response.json())
    .then(result => {
      debugger
      const data =result
const amountData = JSON.parse(data.Amount);
        const profitData = JSON.parse(data.StockForm);
        const lossData = JSON.parse(data.StockForm);
        const withdrawData = JSON.parse(data.widraw);
        const depositData = JSON.parse(data.Diposit);

        const sumAmounts = amountData.reduce((acc, item) => acc + parseFloat(item.fields.price), 0);
        const sumProfits = profitData.reduce((acc, item) => acc + parseFloat(item.fields.profit), 0);
        const sumLosses = lossData.reduce((acc, item) => acc + parseFloat(item.fields.loss), 0);
        const sumWithdrawals = withdrawData.reduce((acc, item) => acc + parseFloat(item.fields.price), 0);
        const sumDeposits = depositData.reduce((acc, item) => acc + parseFloat(item.fields.Amount), 0);

        setTotalAmount(sumAmounts);
        setTotalProfit(sumProfits);
        setTotalLoss(sumLosses);
        setTotalWithdrawal(sumWithdrawals);
        setTotalDeposit(sumDeposits);
      console.log(result)
      setDataDashboard(result)
    })
    .catch(error => console.log('error', error));
},[])


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
        debugger;
        setDataValue(result1);
      })
      .catch((error) => console.log("error", error));
  }, []);

  useEffect(() => {
    var formdata = new FormData();
    formdata.append("userEmail", localStorage.getItem("userData"));
    debugger;

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

  return (
    <>
      <UserDashboard>
        <div className="row">
          
          <div className="col-lg-12 p-3" style={{border:'1px solid blue',marginLeft:'-10px',backgroundColor:'#1d233a'}}>
            <div className="d-flex justify-content-start">
            <RxDashboard className="mt-2 mx-4" style={{color:'white',fontSize:'24px'}}/>
            <h3 style={{color:'white',fontSize:'24px',marginLeft:'-10px'}}>Dashboard</h3>

            </div>
         

          </div>
        </div>
       
        
        <div className="row m-1 mt-2">
          <div className="col-lg-3">
            <div className="d-flex justify-content-center p-4 res" style={{border:'1px solid blue'}}>
            <div>
              <h2 className="" style={{fontSize:'34px',fontWeight:'bold',color:'rgb(29, 35, 58)'}}>Amount </h2>
              <h1 className="font-bold mx-1" style={{marginTop:'-20px'}}>{totalAmount}</h1>
            </div>
            <FaSortAmountUpAlt className="text-7xl text-green-500 mx-3 " />

            </div>
          </div>
          <div className="col-lg-3">
              <div className="d-flex justify-content-center p-4 res" style={{border:'1px solid blue'}}>
            <div>
              <h2 className="" style={{fontSize:'34px',fontWeight:'bold',color:'rgb(29, 35, 58)'}}>Trades </h2>
              <h1 className="font-bold mx-1" style={{marginTop:'-20px'}}>0</h1>
            </div>
            <FcNeutralTrading className="text-7xl text-green-500 mx-3 " />

            </div>
          </div>

          <div className="col-lg-3">
            <div className="d-flex justify-content-center p-4 res" style={{border:'1px solid blue'}}>
            <div>
              <h2 className="" style={{fontSize:'34px',fontWeight:'bold',color:'rgb(29, 35, 58)'}}>Payouts </h2>
              <h1 className="font-bold mx-1" style={{marginTop:'-20px'}}>3</h1>
            </div>
            <MdPayments className="text-7xl text-green-500 mx-3 " />

            </div>
          </div>

          <div className="col-lg-3">
            <div className="d-flex justify-content-center p-4 res" style={{border:'1px solid blue'}}>
            <div>
              <h2 className="" style={{fontSize:'34px',fontWeight:'bold',color:'rgb(29, 35, 58)'}}>Profit </h2>
              <h1 className="font-bold mx-1" style={{marginTop:'-20px'}}>{totalProfit}</h1>
            </div>
            <GiProfit className="text-7xl text-green-500 mx-3 " />

            </div>
          </div>
        </div>

        <div className="row m-1 mt-2">
          <div className="col-lg-3">
            <div className="d-flex justify-content-center p-4 res" style={{border:'1px solid blue'}}>
            <div>
              <h2 className="" style={{fontSize:'34px',fontWeight:'bold',color:'rgb(29, 35, 58)'}}>Loss </h2>
              <h1 className="font-bold mx-1" style={{marginTop:'-20px'}}>{totalLoss}</h1>
            </div>
            <BsFillClipboard2DataFill className="text-7xl text-green-500 mx-3 " />

            </div>
          </div>
          <div className="col-lg-3">
            <div className="d-flex justify-content-center p-4 res" style={{border:'1px solid blue'}}>
            <div>
              <h2 className="" style={{fontSize:'28px',fontWeight:'bold',color:'rgb(29, 35, 58)'}}>TotalWidraw </h2>
              <h1 className="font-bold mx-1" style={{marginTop:'-20px'}}>2000</h1>
            </div>
            <FaRupeeSign className="text-7xl text-green-500 mx-3 " />

            </div>
          </div>

          <div className="col-lg-3">
            <div className="d-flex justify-content-center p-4 res" style={{border:'1px solid blue'}}>
            <div>
              <h2 className="" style={{fontSize:'28px',fontWeight:'bold',color:'rgb(29, 35, 58)'}}>TotalDeposit </h2>
              <h1 className="font-bold mx-1" style={{marginTop:'-20px'}}>22</h1>
            </div>
            <FaRupeeSign className="text-7xl text-green-500 mx-3 " />

            </div>
          </div>

          <div className="col-lg-3">
            <div className="d-flex justify-content-center p-4 res" style={{border:'1px solid blue'}}>
            <div>
              <h2 className="" style={{fontSize:'14px',fontWeight:'bold',color:'rgb(29, 35, 58)'}}>TOTAL WITHDRAW CHARGE AMOUNT </h2>
              <h1 className="font-bold mx-1" style={{marginTop:'-20px'}}>56.19₹</h1>
            </div>
            <FaRupeeSign className="text-7xl text-green-500 mx-3 " />

            </div>
          </div>
        </div>
      </UserDashboard>
    </>
  );
};

export default DashboardUser;
