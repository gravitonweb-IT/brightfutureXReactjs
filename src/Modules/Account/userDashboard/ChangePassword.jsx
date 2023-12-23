import { Link, useNavigate } from "react-router-dom";
import { IoPerson } from "react-icons/io5";
import { MdLibraryBooks } from "react-icons/md";
import { BsFillClipboard2DataFill } from "react-icons/bs";
import { FaDollarSign } from "react-icons/fa6";
import { servieUrl } from "../../../env/env";
import React, { useEffect, useState } from "react";
import { RxDashboard } from "react-icons/rx";

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
import "../user.css";
import UserDashboard from "../UserDashboard";
import './ChangePassword.css'
const ChangePassword = () => {
  const navigate = useNavigate();

  const [base64Image, setBase64Image] = useState(null);

  const [profile, setProfile] = useState([]);

  const uploadImage = (value) => {
   
  };

  const sourceDiv = document.querySelector(".tv-embed-widget-wrapper__body");

  const targetDiv = document.getElementById("grapch");

  const [selectedMenuItem, setSelectedMenuItem] = useState("Dashboard");

  const [url,setUrl]=useState(null)

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
  const extractAndReplaceUrl = (json) => {
    const regex = /localhost:\d{4}\/[a-zA-Z0-9/-]+/;
    const match = json.message.match(regex);
    if (match) {
        return match[0].replace('localhost', 'https://tradingproject-427cb.web.app');
    }
    return null;
};

useEffect(()=>{
  
  var formdata = new FormData();
  formdata.append("email", localStorage.getItem("userData"));
  
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
      setUrl(url)
    })
    .catch(error => console.log('error', error));
},[])
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

      

        setDataValue(result1);
      })
      .catch((error) => console.log("error", error));
  }, []);
  useEffect(() => {
    var formdata = new FormData();

    formdata.append("userEmail", localStorage.getItem("userData"));

    

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

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };
const onSubmit =()=>{
  console.log("url checking ",url)
  var formdata = new FormData();
formdata.append("password", password);

var requestOptions = {
  method: 'PATCH',
  body: formdata,
  redirect: 'follow'
};

fetch(url, requestOptions)
  .then(response => response.json())
  .then(result => {
    alert("Succefully Changed")
  })
  .catch(error => console.log('error', error));
}

  return (
    <>
      <UserDashboard>
        <>
        <div className="row">
        <div className="col-lg-12 p-3" style={{border:'1px solid #1d233a',marginLeft:'-13px',backgroundColor:'#1d233a'}}>
            <div className="d-flex justify-content-start">
            <RxDashboard className="mt-2 mx-4" style={{color:'white',fontSize:'24px'}}/>
            <h3 style={{color:'white',fontSize:'24px',marginLeft:'-10px'}}>Dashboard</h3>

            </div>
         

          </div>
        <div className="row py-md-5 py-3  bg-white-200 p-3 background-image" >
        <div className="background-overlay"></div>

          <div className="col-lg-4"></div>
          <div className='col-lg-4  form-container' style={{backgroundColor:'white',borderRadius: '10px',boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px'}}>
            <div className="row">
            <div className='ves' style={{ height: '100px',borderRadius: '10px' }}>
                <div>
                  <center>
                    <h3 className='p-2 ' style={{ fontSize: '1.25rem', marginTop: '10px' }}>
                    Password Form
                    </h3>
                   
                  </center>
                </div>
              </div>
            </div>
            <div >
            <div className="mb-4">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium" style={{color:'black'}}
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={password}
                  onChange={handlePasswordChange}
                  className="mt-1 p-2 w-full border rounded-md"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="confirmPassword"
                  className="block text-sm font-medium " style={{color:'black'}}
                >
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={confirmPassword}
                  onChange={handleConfirmPasswordChange}
                  className="mt-1 p-2 w-full border rounded-md"
                />
              </div>
              <button
                className=" p-2 w-100 mb-3"
                onClick={() =>
                  onSubmit()
                } style={{backgroundColor:'#1d233a',color:'white',borderRadius:'5px'}}
              >
                Submit
              </button></div> 
           
              
            </div>
            
        </div>
       
          {/* <div className="py-md-5 py-3 flex items-center justify-center bg-gray-200">
            <div className="ves bg-gray-100 p-8 rounded shadow-md w-96">
              <h2 className="text-2xl font-semibold mb-4">Password Form</h2>
              <div className="mb-4">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-600"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={password}
                  onChange={handlePasswordChange}
                  className="mt-1 p-2 w-full border rounded-md"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="confirmPassword"
                  className="block text-sm font-medium text-gray-600"
                >
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={confirmPassword}
                  onChange={handleConfirmPasswordChange}
                  className="mt-1 p-2 w-full border rounded-md"
                />
              </div>
              <button
                className="bg-blue-500 text-gray-100 px-4 py-2 border border-transparent rounded-md hover:border-blue-600  hover:bg-gray-100 hover:text-blue-600"
                onClick={() =>
                  alert(
                    `Password: ${password}\nConfirm Password: ${confirmPassword}`
                  )
                }
              >
                Submit
              </button>
            </div>
          </div> */}
          </div>
        </>
      </UserDashboard>
    </>
  );
};

export default ChangePassword;
