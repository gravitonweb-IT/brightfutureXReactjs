import React, { useEffect, useState } from "react";
import LogoImage from "./NavbarImages/logoNew.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import {
  faFacebook,
  faInstagram,
  faTwitch,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { servieUrl } from "../env/env";

const FooterOne = () => {

  const [contactInfo, setContactInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
      const fetchData = async () => {
          try {
              const response = await fetch(servieUrl.url+'rolebased/get_ContactFomr/');
              if (!response.ok) {
                  throw new Error('Network response was not ok');
              }
              const data = await response.json();
              setContactInfo(data[0]);
          } catch (error) {
              setError(error.message);
          } finally {
              setLoading(false);
          }
      };

      fetchData();
  }, []);


  return (
    <>
      <footer
        id="colophon"
        className="pbmit-footer-section site-footer pbmit-footer-style-2 py-5 pbmit-text-color-white pbmit-bg-color-custom pbmit-bg-image-yes pbmit-footer-menu-yes pbmit-footer-widget-yes"
      >
        <div className="pbmit-footer-section pbmit-footer-big-area-wrapper pbmit-bg-color-transparent">
          <div className="footer-wrap pbmit-footer-big-area">
            <div className="container">
              <div className="row">
                <div className="col-xl-5 col-lg-4 col-md-6 col-sm-12">
                  <div className="pbmit-footer-logo  mb-[100px]">
                    <img
                      className=""
                      src={LogoImage}
                      alt="Cleanfin Demo2"
                      title="Cleanfin Demo2"
                      width={100}
                    />
                  </div>
                </div>

                <div className="col-xl-7 col-lg-4 col-md-6 col-sm-12 pbmit-footer-right">
                  <div className="pbmit-footer-left">
                    <h3>Subscribe to our newsletter! Stay always in touch!</h3>{" "}
                  </div>
                  <form
                    id="mc4wp-form-1"
                    className="mc4wp-form mc4wp-form-2474 mt-3"
                    method="post"
                    data-id={2474}
                    data-name="Newsletter"
                  >
                    <div className="mc4wp-form-fields ps-0">
                      <div className="pbmit-footer-newsletter ps-0">
                        <input
                          type="email"
                          name="EMAIL"
                          placeholder="Enter your email"
                        />
                        <button className="pbmit-svg-btn">
                          <svg
                            className="pbmit-svg-arrow"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            x="0px"
                            y="0px"
                            width={10}
                            height={19}
                            viewBox="0 0 19 19"
                            xmlSpace="preserve"
                          >
                            <line x1={1} y1={18} x2="17.8" y2="1.2" />
                            <line x1="1.2" y1={1} x2={18} y2={1} />
                            <line x1={18} y1="17.8" x2={18} y2={1} />
                          </svg>
                        </button>
                      </div>
                    </div>
                    <label>
                      Leave this field empty if you're human:{" "}
                      <input
                        type="text"
                        name="_mc4wp_honeypot"
                        defaultValue=""
                      />
                    </label>
                    <input
                      type="hidden"
                      name="_mc4wp_timestamp"
                      defaultValue={1702419077}
                    />
                    <input
                      type="hidden"
                      name="_mc4wp_form_id"
                      defaultValue={2474}
                    />
                    <input
                      type="hidden"
                      name="_mc4wp_form_element_id"
                      defaultValue="mc4wp-form-1"
                    />
                    <div className="mc4wp-response" />
                  </form>
                </div>
              </div>
              <div className="row">
                <div className="pbmit-footer-widget pbmit-footer-widget-col-1 col-md-4">
                  <aside
                    id="pbm_addons_contact_widget-1"
                    className="widget pbm_addons_contact_widget pt-0"
                  >
                    <h2 className="widget-title">Our address</h2>
                    <div className="pbmit-contact-widget-lines">
                      <div className="pbmit-contact-widget-line pbmit-contact-widget-address">
                       {contactInfo?.address}
                      </div>
                    </div>
                  </aside>{" "}
                </div>
                {/* .pbmit-footer-widget */}
                <div className="pbmit-footer-widget pbmit-footer-widget-col-2 col-md-4">
                  <aside
                    id="pbm_addons_contact_widget-2"
                    className="widget pbm_addons_contact_widget pt-0"
                  >
                    <h2 className="widget-title">Contact Us</h2>
                    <div className="pbmit-contact-widget-lines">
                      <div className="pbmit-contact-widget-line pbmit-contact-widget-phone">
                      {contactInfo?.phone}
                      </div>
                      <div className="pbmit-contact-widget-line pbmit-contact-widget-email">
                      {contactInfo?.email}
                      </div>
                    </div>
                  </aside>{" "}
                </div>
                {/* .pbmit-footer-widget */}
                <div className="pbmit-footer-widget pbmit-footer-widget-col-3 col-md-4">
                  <aside id="text-6" className="widget widget_text pt-0">
                    <h2 className="widget-title">Our Social</h2>{" "}
                    <div className="textwidget">
                      <ul className="pbmit-social-links">
                        <li className="pbmit-social-li pbmit-social-facebook ">
                          <a href={contactInfo?.social_media_facebook} target="_blank" rel="noopener">
                            <span>
                              <FontAwesomeIcon
                                icon={faFacebook}
                                className="text-[25px]"
                              />
                            </span>
                          </a>
                        </li>
                        <li className="pbmit-social-li pbmit-social-twitter ">
                          <a href={contactInfo?.social_media_twitter} target="_blank" rel="noopener">
                            <span>
                              <FontAwesomeIcon
                                icon={faTwitter}
                                className="text-[25px]"
                              />
                            </span>
                          </a>
                        </li>
                        <li className="pbmit-social-li pbmit-social-instagram ">
                          <a href={contactInfo?.social_media_instagram} target="_blank" rel="noopener">
                            <span>
                              <FontAwesomeIcon
                                icon={faInstagram}
                                className="text-[25px]"
                              />
                            </span>
                          </a>
                        </li>
                        <li className="pbmit-social-li pbmit-social-youtube ">
                          <a href={contactInfo?.social_media_linkedin} target="_blank" rel="noopener">
                            <span>
                              <FontAwesomeIcon
                                icon={faYoutube}
                                className="text-[25px]"
                              />
                            </span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </aside>{" "}
                </div>
                {/* .pbmit-footer-widget */}
              </div>
              <div className="pbmit-footer-section pbmit-footer-text-area  pbmit-color-white pbmit-bg-color-transparent">
                <div className="container">
                  <div className="pbmit-footer-text-inner">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="pbmit-footer-copyright-text-area">
                          {" "}
                          Copyright © 2023 <a href="#">Bright Future FX</a>, All
                          Rights Reserved.
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className=" pbmit-footer-menu-area">
                          <div className="menu-footer-menu-container">
                            <ul className="pbmit-footer-menu">
                              <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-4180">
                                <a href="#">Teams &amp; Conditions</a>
                              </li>
                              <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-4181">
                                <a href="#">Privacy Policy</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>{" "}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default FooterOne;
