import React from "react";
import playStore from "../../../Assests/HomePageImages/playstore.jpg";

function MobileApp() {
  const bgImage = {
    backgroundImage: `url('https://www.interactivebrokers.co.in/images/web/ibkr-mobile-section-background-on-the-go.jpg')`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  return (
    <section className="py-5" style={bgImage}>
      <div className="container ">
        <div className="row align-items-center  ">
          <div className="col-md-5 d-none d-md-block">
            <div className="d-flex align-items-center justify-content-center">
              <img
                src="https://www.interactivebrokers.co.in/images/web/ibkr-mobile-quote-details.png"
                alt=""
                className="w-[500] h-[500px]"
              />
            </div>
          </div>
          <div className="col-md-7 col-12 ps-5">
            <div className="">
              <h1 className="text-gray-100">Start Treading! </h1>
              <h2 className="text-md-[50px] text-[30px] text-gray-100 text-bold mb-3">
                Download Bright Future FX App!
              </h2>
              <p className="text-md-[20px] text-[16pxx] fw-400 text-gray-100  lh-26 mb-4">
                Our Bright Future mobile app provides the functionality you need
                to trade and manage your account on-the-go.
              </p>
              <a href="../../../Assests/app-debug.apk" download>
                <img src={playStore} className="cursor-pointer" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MobileApp;
