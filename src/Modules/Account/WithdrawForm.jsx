// import React, { useEffect, useState } from "react";

// import { servieUrl } from "../../env/env";
// import UserDashboard from "./UserDashboard";

// const WithdrawForm = ({ isOpen, onClose }) => {
//   const [registrationSuccess, setRegistrationSuccess] = useState(false);
//   const [showSuccessPopup, setShowSuccessPopup] = useState(false);

//   const [formData, setFormData] = useState({
//     date: "",

//     name: "",

//     accountNo: "",

//     ifsc: "",

//     panNo: "",

//     price: "",
//     Email:""
//   });

//   const [profile, setProfile] = useState([]);
//   useEffect(() => {
//     var formdata = new FormData();

//     formdata.append("userEmail", localStorage.getItem("userData"));

//     ;

//     var requestOptions = {
//       method: "POST",

//       body: formdata,

//       redirect: "follow",
//     };

//     fetch(servieUrl.url + "rolebased/uploadProfile/", requestOptions)
//       .then((response) => response.json())

//       .then((result) => {
//         setProfile(result);
//       })

//       .catch((error) => console.log("error", error));

//     console.log(profile);
//   }, []);
//   const handleChange = (e) => {
//     const { name, value } = e.target;

//     setFormData({
//       ...formData,

//       [name]: value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     var formdata = new FormData();

//     formdata.append("date", formData.date);

//     formdata.append("name", formData.name);

//     formdata.append("Account_No", formData.accountNo);

//     formdata.append("ifsc", formData.ifsc);

//     formdata.append("panNo", formData.panNo);

//     formdata.append("price", formData.price);
//     formdata.append("user_email", formData.Email);
//     var requestOptions = {
//       method: "POST",

//       body: formdata,

//       redirect: "follow",
//     };

//     fetch(servieUrl.otpurl + "growadmin/stock_fund/", requestOptions)
//       .then((response) => response.json())

//       .then((result) => {
//         setShowSuccessPopup(true);
//         onClose();
//       })

//       .catch((error) => console.log("error", error));

//     // alert("Submitted Successfully !")

//     console.log(formData);

//     // onSubmit(formData);

//     setFormData({
//       date: "",

//       name: "",

//       accountNo: "",

//       ifsc: "",

//       panNo: "",

//       price: "",
//       Email:""
//     });
//     setRegistrationSuccess(true);
//   };

//   return (
//     <>
//       <UserDashboard>
        
//         {showSuccessPopup && (
//           <div className="fixed inset-0 flex items-center justify-center z-10">
//             <div className="bg-white p-8 rounded shadow-lg text-center">
//               <h2 className="text-2xl font-semibold text-green-500 mb-4">
//                 Form Successfully
//               </h2>

//               <p className="text-gray-700">
//                 Your request is successful and your form will be approved as
//                 soon as possible.
//               </p>

//               <div className="mt-6">
//                 <button
//                   className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
//                   onClick={() => setShowSuccessPopup(false)}
//                 >
//                   Close
//                 </button>
//               </div>
//             </div>
//           </div>
//         )}

//         <div
//           className={`fixed inset-0 flex items-center justify-center z-50 ${
//             true ? "" : "hidden"
//           }`}
//         >
//           <div className="bg-white w-2/3 lg:w-1/3 md:w-1/3  p-4 rounded shadow-lg">
//             <div className="relative">
//               {/* <button
//                 onClick={onClose}
//                 className="absolute top-0 right-2 text-black hover:bg-gray-100 p-2"
//                 style={{ zIndex: 1 }} // To ensure it appears above other content
//               >
//                 X
//               </button> */}
// <div className="mt-5">
// <form onSubmit={handleSubmit} className="p-4">
//                 <div className="mb-4">
//                   <label
//                     htmlFor="date"
//                     className="block text-gray-700 font-bold"
//                   >
//                     Date
//                   </label>

//                   <input
//                     type="date"
//                     name="date"
//                     id="date"
//                     value={formData.date}
//                     onChange={handleChange}
//                     className="border rounded w-full py-2 px-3"
//                     required
//                   />
//                 </div>

//                 <div className="mb-4">
//                   <label
//                     htmlFor="name"
//                     className="block text-gray-700 font-bold"
//                   >
//                     Name
//                   </label>

//                   <input
//                     type="text"
//                     name="name"
//                     id="name"
//                     value={formData.name}
//                     onChange={handleChange}
//                     className="border rounded w-full py-2 px-3"
//                     required
//                   />
//                 </div>

//                 <div className="mb-4">
//                   <label
//                     htmlFor="accountNo"
//                     className="block text-gray-700 font-bold"
//                   >
//                     Account No
//                   </label>

//                   <input
//                     type="text"
//                     name="accountNo"
//                     id="accountNo"
//                     value={formData.accountNo}
//                     onChange={handleChange}
//                     className="border rounded w-full py-2 px-3"
//                     required
//                   />
//                 </div>

//                 <div className="mb-4">
//                   <label
//                     htmlFor="ifscCode"
//                     className="block text-gray-700 font-bold"
//                   >
//                     IFSC CODE
//                   </label>

//                   <input
//                     type="text"
//                     name="ifsc"
//                     id="ifsc"
//                     value={formData.ifsc}
//                     onChange={handleChange}
//                     className="border rounded w-full py-2 px-3"
//                     required
//                   />
//                 </div>

//                 <div className="mb-4">
//                   <label
//                     htmlFor="panNo"
//                     className="block text-gray-700 font-bold"
//                   >
//                     PAN NO
//                   </label>

//                   <input
//                     type="text"
//                     name="panNo"
//                     id="panNo"
//                     value={formData.panNo}
//                     onChange={handleChange}
//                     className="border rounded w-full py-2 px-3"
//                     required
//                   />
//                 </div>

//                 <div className="mb-4">
//                   <label
//                     htmlFor="price"
//                     className="block text-gray-700 font-bold"
//                   >
//                     Price
//                   </label>

//                   <input
//                     type="number"
//                     name="price"
//                     id="price"
//                     value={formData.price}
//                     onChange={handleChange}
//                     className="border rounded w-full py-2 px-3"
//                     required
//                   />
//                 </div>
//                 <div className="mb-4">
//                   <label
//                     htmlFor="price"
//                     className="block text-gray-700 font-bold"
//                   >
//                     Email
//                   </label>

//                   <input
//                     type="text"
//                     name="Email"
//                     id="Email"
//                     value={formData.Email}
//                     onChange={handleChange}
//                     className="border rounded w-full py-2 px-3"
//                     required
//                   />
//                 </div>

//                 <div className="mb-4">
//                   <button
//                     type="submit"
//                     className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//                   >
//                     Submit
//                   </button>
//                 </div>
//                 {registrationSuccess && (
//                   <p className="text-green-500 mb-2">
//                     {" "}
//                     successfully Submitted!
//                   </p>
//                 )}
//               </form>
// </div>
            
//             </div>
//           </div>
//         </div>
//       </UserDashboard>
//     </>
//   );
// };

// export default WithdrawForm;

import React, { useEffect, useState } from "react";
import { servieUrl } from "../../env/env";
import UserDashboard from "./UserDashboard";
import './WithdrawForm.css';
import { RxDashboard } from "react-icons/rx";



const WithdrawForm = ({ isOpen, onClose }) => {
  const [registrationSuccess, setRegistrationSuccess] = useState(false);
  const [formData, setFormData] = useState({
    date: "",
    name: "",
    accountNo: "",
    ifsc: "",
    panNo: "",
    price: "",
    Email: "",
  });

  const [totalAmount,setTotalAmount]=useState(0)
  const [limit,setLimit]=useState()

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
        setTotalAmount(result1.price)
        setLimit(result1.price*0.6)
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
        // setProfile(result);
      })
      .catch((error) => console.log("error", error));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    var formdata = new FormData();

    formdata.append("date", formData.date);

    formdata.append("name", formData.name);

    formdata.append("Account_No", formData.accountNo);

    formdata.append("ifsc", formData.ifsc);

    formdata.append("panNo", formData.panNo);

    formdata.append("price", formData.price);
    formdata.append("user_email", formData.Email);
    // const withdrawalLimit = 300 * 0.60;
    if (parseFloat(formData.price) > limit) {
      alert(`Withdrawal amount cannot exceed 60% of 300. Maximum allowed is ${limit}`);
      return;
    }
    else{
      var requestOptions = {
        method: "POST",
  
        body: formdata,
  
        redirect: "follow",
      };
  
      fetch(servieUrl.otpurl + "growadmin/stock_fund/", requestOptions)
        .then((response) => response.json())
  
        .then((result) => {
          alert("Successfully Stored")
          // setShowSuccessPopup(true);
          onClose();
        })
  
        .catch((error) => console.log("error", error));
  
      // alert("Submitted Successfully !")
  
      console.log(formData);
  
      // onSubmit(formData);
  
      setFormData({
        date: "",
  
        name: "",
  
        accountNo: "",
  
        ifsc: "",
  
        panNo: "",
  
        price: "",
        Email:""
      });
      setRegistrationSuccess(true);
    }

   
  };

  return (
    <UserDashboard>
      <div className="row">
         <div className="col-lg-12 p-3" style={{border:'1px solid #1d233a',marginLeft:'-13px',backgroundColor:'#1d233a'}}>
      <div className="d-flex justify-content-start">
      <RxDashboard className="mt-2 mx-4" style={{color:'white',fontSize:'24px'}}/>
      <h3 style={{color:'white',fontSize:'24px',marginLeft:'-10px'}}>Dashboard</h3>

      </div>
   

    </div>
      <div className="row background-image" style={{backgroundColor:'#8080800f'}}
        // className={`fixed inset-0 flex items-center justify-center z-50 ${
        //   true ? "" : "hidden"
        // }`}
      >
                  <div className="background-overlayf"></div>
    
        <div className="col-lg-3"></div>
        <div className="col-lg-6 " >
        <div className="mt-5 form-containerf" style={{border:'1px solid white',boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
      backgroundColor:'white'}}>
        Total Amount: {totalAmount}                    Limit:{limit}
              <form onSubmit={handleSubmit} className="p-4">
                <div className="row">
                  <div className="col-lg-6"> <div className="mb-4">
                  <label
                    htmlFor="date"
                    className="block text-gray-700 font-bold"
                  >
                    Dates
                  </label>
                  <input
                    type="date"
                    name="date"
                    id="date"
                    value={formData.date}
                    onChange={handleChange}
                    className=" rounded w-full py-2 px-3"
                    required
                    style={{border:'1px solid #00000052'}}
                  />
                </div></div>
                  <div className="col-lg-6">
                  <div className="mb-4">
                  <label
                    htmlFor="name"
                    className="block text-gray-700 font-bold"
                  >
                    Name
                  </label>

                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    className=" rounded w-full py-2 px-3"
                    required
                    style={{border:'1px solid #00000052'}}
                  />
                </div>
                  </div>

                </div>
               
                <div className="row">
                  <div className="col-lg-6"> <div className="mb-4">
                  <label
                    htmlFor="accountNo"
                    className="block text-gray-700 font-bold"
                  >
                    Account No
                  </label>

                  <input
                    type="text"
                    name="accountNo"
                    id="accountNo"
                    value={formData.accountNo}
                    onChange={handleChange}
                    className=" rounded w-full py-2 px-3"
                    required
                    style={{border:'1px solid #00000052'}}
                  />
                </div>
</div>
                  <div className="col-lg-6"> <div className="mb-4">
                  <label
                    htmlFor="ifscCode"
                    className="block text-gray-700 font-bold"
                  >
                    IFSC CODE
                  </label>

                  <input
                    type="text"
                    name="ifsc"
                    id="ifsc"
                    value={formData.ifsc}
                    onChange={handleChange}
                    className=" rounded w-full py-2 px-3"
                    required
                    style={{border:'1px solid #00000052'}}
                  />
                </div></div>

                </div>

                <div className="row">
                  <div className="col-lg-6">  <div className="mb-4">
                  <label
                    htmlFor="panNo"
                    className="block text-gray-700 font-bold"
                  >
                    PAN NO
                  </label>

                  <input
                    type="text"
                    name="panNo"
                    id="panNo"
                    value={formData.panNo}
                    onChange={handleChange}
                    className=" rounded w-full py-2 px-3"
                    required
                    style={{border:'1px solid #00000052'}}
                  />
                </div></div>
                  <div className="col-lg-6">  <div className="mb-4">
                  <label
                    htmlFor="price"
                    className="block text-gray-700 font-bold"
                  >
                    Price
                  </label>

                  <input
                    type="number"
                    name="price"
                    id="price"
                    value={formData.price}
                    onChange={handleChange}
                    className=" rounded w-full py-2 px-3"
                    required
                    style={{border:'1px solid #00000052'}}
                  />
                </div></div>

                </div>
               

              

              
                <div className="mb-4">
                  <label
                    htmlFor="price"
                    className="block text-gray-700 font-bold"
                  >
                    Email
                  </label>

                  <input
                    type="text"
                    name="Email"
                    id="Email"
                    value={formData.Email}
                    onChange={handleChange}
                    className=" rounded w-full py-2 px-3"
                    required
                    style={{border:'1px solid #00000052'}}
                  />
                </div>                <div className="mb-4">
                  <button
                    type="submit"
                    className="w-100 p-2" style={{border:'1px solid rgb(29, 35, 58)', color:'white',backgroundColor:'rgb(29, 35, 58)',borderRadius:'10px'}}
                  >
                    Submit
                  </button>
                </div>
                {registrationSuccess && (
                  <p className="text-green-500 mb-2">
                    successfully Submitted!
                  </p>
                )}
              </form>
            </div>
        </div>

      
      </div>
      </div>
    </UserDashboard>
  );
};

export default WithdrawForm;
