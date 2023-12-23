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
import "../../Account/data_table.css";
import './UserTransaction.css'
const UserTransaction = () => {
  const navigate = useNavigate();

  const [base64Image, setBase64Image] = useState(null);

  const [profile, setProfile] = useState([]);

  const uploadImage = (value) => {
    ;
  };

  const sourceDiv = document.querySelector(".tv-embed-widget-wrapper__body");

  const targetDiv = document.getElementById("grapch");

  const [selectedMenuItem, setSelectedMenuItem] = useState("Dashboard");
  const [trsansaction,setTrsaction]=useState(null)
 useEffect(()=>{
  var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  
  fetch(servieUrl.url+"rolebased/transaction/"+localStorage.getItem("userData")+"/", requestOptions)
    .then(response => response.json())
    .then(result =>{
      setTrsaction(result)
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

  const [data, setData] = useState([
    { id: 1, name: "Item 1", description: "Description for Item 1" },
    { id: 2, name: "Item 2", description: "Description for Item 2" },
    { id: 3, name: "Item 3", description: "Description for Item 3" },
  ]);

  const [selectedItem, setSelectedItem] = useState(null);

  const handleSelectItem = (id) => {
    setSelectedItem(id === selectedItem ? null : id);
  };

  return (
    <>
      <>
        <UserDashboard>
          <div className="row">
        <div className="col-lg-12 p-3" style={{border:'1px solid #1d233a',marginLeft:'-13px',backgroundColor:'#1d233a',width:'100%'}}>
      <div className="d-flex justify-content-start">
      <RxDashboard className="mt-2 mx-4" style={{color:'white',fontSize:'24px'}}/>
      <h3 style={{color:'white',fontSize:'24px',marginLeft:'-10px'}}>Dashboard</h3>

      </div>
   

    </div>
          {/* <div className="py-md-5 py-3  flex items-center justify-center bg-white-200 background-image" > */}
          <div className="row py-md-5 py-3  bg-white-200 p-3 background-image" >

          <div className="background-overlays"></div>
<div style={{border:'1px solid white'}}>
<div className=" p-8 rounded shadow-md  form-containers" style={{backgroundColor:'#808080bd'}}>
              <h2 className="text-2xl font-semibold  " style={{color:'white'}}>Data Transition</h2>
              <div className="p-2">
                <div class="table-wrapper" >
                  <table>
                    <thead >
                      <tr >
                        <th>Name</th>
                        <th>Email</th>
                        <th>Type</th>
                        <th>Amount</th>
                      </tr>
                    </thead>
                    <tbody>
                      {
 trsansaction?.map(data=> <tr style={{backgroundColor:'white',color:'black'}} >
  <td>{data.name}</td>
  <td>{data.email}</td>
  <td>{data.type}</td>
  <td>{data.amount}</td>
</tr>
  )

                      }
                      
                      
                    </tbody>
                  </table>
                </div>
              </div>
              {/* <ul>
                {data.map((item) => (
                  <li
                    key={item.id}
                    className={`mb-4 p-4 cursor-pointer transition-all ${
                      selectedItem === item.id
                        ? "bg-blue-100"
                        : "hover:bg-gray-100"
                    }`}
                    onClick={() => handleSelectItem(item.id)}
                  >
                    <h3 className="text-lg font-semibold">{item.name}</h3>
                    {selectedItem === item.id && (
                      <p className="text-gray-600 mt-2">{item.description}</p>
                    )}
                  </li>
                ))}
              </ul> */}
            </div>
</div>
           
          </div>
          </div>
        </UserDashboard>
      </>
    </>
  );
};

export default UserTransaction;
