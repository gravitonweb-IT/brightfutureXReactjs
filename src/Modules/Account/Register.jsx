

import React, { useEffect, useState} from "react";
import { useNavigate } from 'react-router-dom';
import { servieUrl } from "../../env/env";
import A from "../../Assests/HomePageImages/TradingImage1.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressCard, faBuildingColumns, faCalendar, faCalendarDay, faCreditCard, faEnvelope, faIdCard, faLock, faPhone, faPiggyBank, faUser } from '@fortawesome/free-solid-svg-icons';
import ReCAPTCHA from "react-google-recaptcha";
import { ColorFactory } from "antd/es/color-picker/color";
import "./register.css"

function Register() {
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phonenumber, setPhoneNumber] = useState("");
  const [dateofbirth, setDateOfBirth] = useState("");
  const [pancard, setPanCard] = useState("");
  const [bankaccount, setBankAccount] = useState("pending");
  const [ifsccode, setIfscCode] = useState("pending");
  const [aadhaarcardnumber, setAadhaarCardNumber] = useState("");
  const [checkOtp, setOtp] = useState(false);
  const [otpValue, setOtpValue] = useState(null);
  const navigate = useNavigate(); // Access the navigation function
  const [pancard_image, setPancardFile] = useState(null);
  const [aadhaarcard_image , setAadhaarFile] = useState(null);
 const [errorMessage,seterrormessage]=useState("")
 const [captchaValue, setCaptchaValue] = useState(null);
 const [captcha, setCaptcha] = useState('');
 const [userCaptchaInput, setUserCaptchaInput] = useState('');
 
  const [errors, setErrors] = useState({
    username: "",
    password: "",
    confirmpassword: "",
    firstname: "",
    lastname: "",
    email: "",
    phonenumber: "",
    dateofbirth: "",
    pancard: "null",
    bankaccount: "",
    ifsccode: "",
    aadhaarcardnumber: "null",
    pancard_image :null,
    aadhaarcard_image :null
  });

  const generateCaptcha = () => {
    const characters = '2B3C4D5F6G7H8J9KLMNPQRSTUVWXY';
    let result = '';
    for (let i = 0; i < 6; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    setCaptcha(result);
  };

  useEffect(() => {
    generateCaptcha();
  }, []);

  const [isLoading, setIsLoading] = useState(false);
  const [registrationSuccess, setRegistrationSuccess] = useState(false);

  const emailSending = () => {
    var formdata = new FormData();
    formdata.append("to", email);
    formdata.append("userid", username);
    formdata.append("password", password);
    var requestOptions = {
      method: "POST",
      body: formdata,
      redirect: "follow",
    };

    fetch(servieUrl.otpurl + "rolebased/emailNewRegistratinos/", requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  };
  const sendOtp = (e) => {
    e.preventDefault();
    const newErrors = {};
    setUserName(Math.floor(100000 + Math.random() * 900000));
    

    if (!password) {
      newErrors.password = "Password is required";
      seterrormessage("Password is required")
    }
    // else if (!/^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/.test(password)) {
    //   newErrors.password = "Password must be alphanumeric";
    //   seterrormessage("Password must be alphanumeric")
    // }
    if (!confirmpassword) {
      newErrors.confirmpassword = "Confirm Password is required";
    } else if (password !== confirmpassword) {
      newErrors.confirmpassword = "Passwords do not match";
    }

    if (!firstname) {
      newErrors.firstname = "First Name is required";
      seterrormessage("First Name is required")
    }

    if (!lastname) {
      newErrors.lastname = "Last Name is required";
      seterrormessage("Last Name is required")
    }

    if (!email) {
      newErrors.email = "Email is required";
      seterrormessage("Email is required")
    }

    if (!phonenumber) {
      newErrors.phonenumber = "Phone Number is required";
      seterrormessage("Phone Number is required")
    }

    if (!dateofbirth) {
      newErrors.dateofbirth = "Date of Birth is required";
    }
    if (userCaptchaInput.toLowerCase() !== captcha.toLowerCase()) {
      newErrors.captcha = 'CAPTCHA is incorrect';
      seterrormessage('CAPTCHA is incorrect');
      generateCaptcha(); // Generate a new CAPTCHA
      setUserCaptchaInput(''); // Clear the CAPTCHA input
      return; // Exit the function if CAPTCHA is incorrect
    }

    // if (!pancard) {
    //   newErrors.pancard = "Pan Card Number is required";
    // }

    if (!bankaccount) {
      newErrors.bankaccount = "Bank Account Number is required";
    }

    if (!ifsccode) {
      newErrors.ifsccode = "IFSC Code is required";
    }

    // if (!aadhaarcardnumber) {
    //   newErrors.aadhaarcardnumber = "Aadhaar Card Number is required";
    // }

    // Update the errors state with the new errors
    setErrors(newErrors);

    setIsLoading(true);

    // If there are no errors, submit the form
    if (Object.values(newErrors).every((error) => !error)) {
      setOtp(true);
      var formdata = new FormData();
      formdata.append("number", phonenumber);

      var requestOptions = {
        method: "POST",
        body: formdata,
        redirect: "follow",
      };

      fetch(servieUrl.otpurl + "rolebased/sendOTP/", requestOptions)
        .then((response) => response.json())
        .then((result) => console.log(result))
        .catch((error) => console.log("error", error));
    } else {
      setIsLoading(false);
    }
  };

  const verifyOtp = (e) => {
    e.preventDefault();
    var formdata = new FormData();
    formdata.append("number", phonenumber);
    formdata.append("otp", otpValue);

    var requestOptions = {
      method: "PUT",
      body: formdata,
      redirect: "follow",
    };

    fetch(servieUrl.otpurl + "rolebased/checkOTP/", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        if (result.status) {
          handleSubmit();
        } else {
          alert("otp is wrong entered");
        }
      })
      .catch((error) => console.log("error", error));
  };

  const sendingRegsiter = () => {
    var formdata = new FormData();
    formdata.append("email", email);
    formdata.append("password", password);

    var requestOptions = {
      method: "POST",
      body: formdata,
      redirect: "follow",
    };

    fetch(servieUrl.otpurl + "rolebased/PasswordUpdate/", requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  };

  const handleSubmit = async () => {
    emailSending();
    sendingRegsiter();
    // 
    // Disable the button to prevent multiple submissions

    if (true) {
      try {
        var formdata = new FormData();

        formdata.append("username", username);
        formdata.append("password", password);
        formdata.append("first_name", firstname);
        formdata.append("last_name", lastname);
        formdata.append("email", email);
        formdata.append("phone_number", phonenumber);
        formdata.append("pancard", "null");
        formdata.append("bankaccount", bankaccount);
        formdata.append("ifsccode", ifsccode);
        formdata.append("aadhaarCardNumber", "null");
        // formdata.append("pancard_image", pancard_image)
        // formdata.append("aadhaarcard_image", aadhaarcard_image)
        var requestOptions = {
          method: "POST",
          body: formdata,
          redirect: "follow",
        };

        const response = await fetch(
          servieUrl.otpurl + "rolebased/register/",
          requestOptions
        );

        setUserName("");
        setPassword("");
        setConfirmPassword("");
        setFirstName("");
        setLastName("");
        setEmail("");
        setPhoneNumber("");
        setDateOfBirth("");
        setPanCard("");
        setBankAccount("");
        setIfscCode("");
        setAadhaarCardNumber("");
        setShowSuccessPopup(true);
        setTimeout(() => {
          navigate("/loginandregister");
        }, 3000);

        // Show a success alert
        // alert("Registration successful!");
      } catch (error) {
        console.error("Error:", error);
        alert("Registration failed. Please try again later.");
      } finally {
        // Re-enable the button after registration process finishes
        setIsLoading(false);
      }
    }
    setRegistrationSuccess(true);

    localStorage.setItem("userData", username);
  };
  const handleFileChange = (e) => {
    if (e.target.name === 'pancard') {
        setPancardFile(e.target.files[0]);
    } else if (e.target.name === 'aadhaar') {
        setAadhaarFile(e.target.files[0]);
    }
};
  return (
    <>
      {checkOtp ? (
        <div className="mt-16 flex items-center justify-center">
          <div className="max-w-md w-full p-6 bg-white rounded-md shadow-md">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
              OTP Verification
            </h2>
            <form onSubmit={verifyOtp}>
              <div className="mb-4">
                {/* <label htmlFor="email" className="block text-gray-600">Email</label> */}
                <input
                  type="text"
                  id="number"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                  placeholder="Enter your OTP"
                  value={otpValue}
                  onChange={(e) => setOtpValue(e.target.value)}
                  required
                />
              </div>
              <div className="mb-4">
                <button
                  className="bg-[#2774AE] mt-8 w-full py-2 text-white text-lg font-semibold rounded-lg"
                  type="submit"
                  // Disable the button when isLoading is true
                >
                  Verify OTP
                </button>
              </div>
            </form>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2  gap-10 mx-10 md:mx-20 lg:mx-32 mt-10 md:mt-16 mb-10">
          <div className="flex justify-center items-center">
            <div className=" ">
            <img src={A} class="hidden md:block" />
            </div>
          </div>
          <form onSubmit={sendOtp} >
            <h3 className="text-lg md:text-3xl font-bold text-[#0066b2] ">
              Register
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-5 mt-5">
              <p className="mt-2">
                <label className="font-semibold text-lg">First Name</label>
                <div className="relative">
                  {/* <FontAwesomeIcon
                    icon={faUser}
                    className="absolute pl-3 mt-8 transform -translate-y-1/2 text-gray-500"
                  /> */}
                  <input
                    type="text"
                    className="w-full p-2 pl-9 border-2 rounded-lg mt-3"
                    placeholder="First Name"
                    id="fname"
                    name="fname"
                    value={firstname}
                    onChange={(e) => setFirstName(e.target.value)}
                  ></input>
                </div>
                {errors.firstname && (
                  <p className="text-red-500 mt-2">{errors.firstname}</p>
                )}
              </p>

              <p className="mt-2">
                <label className="font-semibold text-lg">Last Name</label>
                <div className="relative">
                  {/* <FontAwesomeIcon
                    icon={faUser}
                    className="absolute pl-3 mt-8 transform -translate-y-1/2 text-gray-500"
                  /> */}
                <input
                  type="text"
                  className="w-full p-2 pl-9 border-2 rounded-lg mt-3"
                  placeholder="Last Name"
                  id="lname"
                  name="lname"
                  value={lastname}
                  onChange={(e) => setLastName(e.target.value)}
                ></input>
                </div>
                {errors.lastname && (
                  <p className="text-red-500 mt-2">{errors.lastname}</p>
                )}
              </p>

              <p className="">
                <label className="font-semibold text-lg">Email</label>
                <div className="relative">
                  {/* <FontAwesomeIcon
                    icon={faEnvelope}
                    className="absolute pl-3 mt-8 transform -translate-y-1/2 text-gray-500"
                  /> */}
                <input
                  type="email"
                  className="w-full p-2 pl-9 border-2 rounded-lg mt-3"
                  placeholder="Enter Email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                ></input>
                </div>
                {errors.email && (
                  <p className="text-red-500 mt-2">{errors.email}</p>
                )}
              </p>

              <p className="">
                <label className="font-semibold text-lg">Phone Number</label>
                <div className="relative">
                  {/* <FontAwesomeIcon
                    icon={faPhone}
                    className="absolute pl-3 mt-8 transform -translate-y-1/2 text-gray-500"
                  /> */}
                <input
                  type="tel"
                  className="w-full p-2 pl-9 border-2 rounded-lg mt-3"
                  placeholder="Phone Number"
                  id="pnumber"
                  name="pnumber"
                  value={phonenumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                ></input>
                </div>
                {errors.phonenumber && (
                  <p className="text-red-500 mt-2">{errors.phonenumber}</p>
                )}
              </p>

              <p className="">
                <label className="font-semibold text-lg">Date Of Birth</label>
                <div className="relative">
                  {/* <FontAwesomeIcon
                    icon={faCalendarDay}
                    className="absolute pl-3 mt-8 transform -translate-y-1/2 text-gray-500"
                  /> */}
                <input
                  type="date"
                  className="w-full p-2 pl-9 border-2 rounded-lg mt-3"
                  placeholder="Enter DOB"
                  id="dob"
                  name="dob"
                  value={dateofbirth}
                  onChange={(e) => setDateOfBirth(e.target.value)}
                ></input>
                </div>
                {errors.dateofbirth && (
                  <p className="text-red-500 mt-2">{errors.dateofbirth}</p>
                )}
              </p>

              <p className="">
                <label className="font-semibold text-lg">Password</label>
                <div className="relative flex ju item-center">
                  {/* <FontAwesomeIcon
                    icon={faLock}
                    className="absolute pl-3 mt-8 transform -translate-y-1/2 text-gray-500 "
                  /> */}
                <input
                  type="password"
                  className="w-full p-2 pl-9 border-2 rounded-lg mt-3"
                  placeholder="Enter Password"
                  id="password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                ></input>
                </div>
                {errors.password && (
                  <p className="text-red-500 mt-2">{errors.password}</p>
                )}
              </p>

              <p className="">
                <label className="font-semibold text-lg">
                  Confirm Password
                </label>
                <div className="relative flex ju item-center">
                  {/* <FontAwesomeIcon
                    icon={faLock}
                    className="absolute pl-3 mt-8 transform -translate-y-1/2 text-gray-500 "
                  /> */}
                <input
                  type="password"
                  className="w-full  p-2 pl-9 border-2 rounded-lg mt-3"
                  placeholder="Enter Confirm Password"
                  id="cpassword"
                  name="cpassword"
                  value={confirmpassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                ></input>
                </div>
                {errors.confirmpassword && (
                  <p className="text-red-500 mt-2">{errors.confirmpassword}</p>
                )}
              </p>
              <div className="captcha-container">
  
  <input
    type="text"
    placeholder="Enter Captcha"
    value={userCaptchaInput}
    onChange={(e) => setUserCaptchaInput(e.target.value)}
    required
  />
  <div className="captcha" onClick={generateCaptcha}>
    {captcha}
  </div>
</div>
             
              <button
                className="bg-[#2774AE] mt-8 w-full py-2 hover:bg-slate-100 text-white text-lg font-semibold rounded-lg"
                type="submit"
                disabled={isLoading} // Disable the button when isLoading is true
              >
                {isLoading ? "Registering..." : "Register"}
              </button>
              {registrationSuccess && (
                <p className="text-green-500 mb-2">
                  {" "}
                  Registration Successfully!
                </p>
              )}
            </div>
          </form>
          <p style={{ color: 'red' }}>{errorMessage}</p>

        </div>
      )}

      {showSuccessPopup && (
        <div className="fixed inset-0 flex items-center justify-center z-10">
          <div className="bg-white p-8 rounded shadow-lg text-center">
            <h2 className="text-2xl font-semibold text-green-500 mb-4">
              Registration Successful
            </h2>

            <p className="text-gray-700">
              Your request is successful and your form will be approved as soon
              as possible.
            </p>

            <div className="mt-6">
              <button
                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                onClick={() => setShowSuccessPopup(false)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
      {showSuccessPopup && (
        <div className="fixed inset-0 flex items-center justify-center z-10">
          <div className="bg-white p-8 rounded shadow-lg text-center">
            <h2 className="text-2xl font-semibold text-green-500 mb-4">
              Registration Successful
            </h2>

            <p className="text-gray-700">
              Your request is successful and your form will be approved as soon
              as possible.
            </p>

            <div className="mt-6">
              <button
                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                onClick={() => setShowSuccessPopup(false)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Register;
