import React from "react";
import banner from "../../../Assests/HomePageImages/01.jpg";
import banner2 from "../../../Assests/HomePageImages/02.jpg";
import banner3 from "../../../Assests/HomePageImages/03.jpg";
import { Carousel } from "bootstrap";
import playStore from "../../../Assests/HomePageImages/playstore.jpg";
import Banner from "./Banner";
import { isMobile } from "react-device-detect";
import PortfoloioSection from "./PortfolioSection";



const mobt={fontSize:'24px',marginTop:'10px',marginBottom:'-50px'}
const deskt={fontSize:'36px',marginLeft:'10px'}
const mobl={}
const deskl={marginLeft:'-50px'}
const mobbtn={border:'1px solid black',borderRadius:'10px',width:'100%',padding:'10px',color:'black'}
const deskbtn={border:'1px solid black',borderRadius:'10px',padding:'10px',marginLeft:'10px',color:'black'}
const moble={}
const deskle={marginLeft:'-30px'}
const NewHome = () => {



  return (
    <>
      <>
        <div id="page" className="site pbmit-parent-header-style-4" style={{overflowX:'hidden'}}>
          <a className="skip-link screen-reader-text" href="#content">
            Skip to content
          </a>
       
          
            <Banner/>
           
          
          {/* #masthead */}
          <div className="site-content-contain ">
            <div className="site-content-wrap">
              <div id="content" className="site-content py-0">
                <div className="pbmit-header-search-form-wrapper">
                  <div className="pbmit-search-close">
                    <svg
                      className="qodef-svg--close qodef-m"
                      xmlns="http://www.w3.org/2000/svg"
                      width="28.163"
                      height="28.163"
                      viewBox="0 0 26.163 26.163"
                    >
                      <rect
                        width={36}
                        height={1}
                        transform="translate(0.707) rotate(45)"
                      />
                      <rect
                        width={36}
                        height={1}
                        transform="translate(0 25.456) rotate(-45)"
                      />
                    </svg>
                  </div>
                  <form
                    role="search"
                    method="get"
                    className="search-form"
                    action="https://cleanfin-demo.pbminfotech.com/demo2/"
                  >
                    <label htmlFor="search-form-6578da85221c8">
                      <span className="screen-reader-text">Search for:</span>
                    </label>
                    <input
                      type="search"
                      id="search-form-6578da85221c8"
                      className="search-field"
                      placeholder="Search …"
                      defaultValue=""
                      name="s"
                    />
                    <button type="submit" className="search-submit">
                      <span className="screen-reader-text">Search</span>
                    </button>
                  </form>
                </div>
                <div id="primary" className="content-area ">
                  <main
                    id="main"
                    className="site-main pbmit-page-content-wrapper"
                  >
                    <div
                      id="post-1661"
                      className="post-1661 page type-page status-publish hentry"
                    >
                      <div className="entry-content">
                        <div
                          data-elementor-type="wp-page"
                          data-elementor-id={1661}
                          className="elementor elementor-1661"
                        >
                          <div className="p-2" style={{marginTop:'-50px',overflowX:'hidden'}}>
                          <section
                            className="elementor-section elementor-top-section elementor-element elementor-element-282ecbe pbmit-col-stretched-right pbmit-right-col-stretched-content-yes pbmit-cursor-color-blackish-color pbmit-bg-color-over-image elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                            data-id="282ecbe"
                            data-element_type="section"
                          >
                            <div className="elementor-container elementor-column-gap-no">
                              <div
                                className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-d8908b3 pbmit-bg-color-over-image"
                                data-id="d8908b3"
                                data-element_type="column"
                              >
                                <div className="elementor-widget-wrap elementor-element-populated">
                                  <div
                                    className="elementor-element elementor-element-ade3cf9 elementor-widget elementor-widget-pbmit_service_element"
                                    data-id="ade3cf9"
                                    data-element_type="widget"
                                    data-widget_type="pbmit_service_element.default"
                                  >
                                    <div className="elementor-widget-container">
                                      <div
                                        className="pbminfotech-element
		pbminfotech-element-service		pbmit-element-service-style-2		pbmit-element-viewtype-carousel		pbmit-element-column-three		pbmit-element-sticky-carousel-false		pbmit-element-caroursel-dot-false		pbmit-infinite-scroll-no		pbmit-infinite-scroll-button-no		pbminfotech-gap-default		"
                                        data-cpt="service"
                                        data-totalpagination={1}
                                        data-style={2}
                                        data-show={-1}
                                        data-columns={3}
                                        data-loop="true"
                                        data-autoplay="true"
                                        data-center="false"
                                        data-nav="above"
                                        data-dots="false"
                                        data-reverse="false"
                                        data-autoplayspeed={4000}
                                        data-margin="default"
                                      >
                                        <div className="pbmit-element-inner">
                                          <div className="row">
                                            <div className="pbmit-servicebox-left col-lg-3 col-md-12 pbmit-column">
                                              <div className="pbmit-ele-header-area">
                                                <div className="pbmit-heading-subheading pbmit-reverse-heading-yes animation-style2">
                                                 <button style={isMobile?mobbtn:deskbtn}>What We Provide</button>
                                                  <div className="p-1">
                                                  <h2 className="pbmit-element-title" style={isMobile ? mobt:deskt}>
                                                  Enhance your trades with live data, analytics, and risk management
                                                  </h2>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                            <div className="pbmit-infinite-scroll-data">
                                              {"{"}
                                              "cpt":"service","style":"2","columns":"3","show":-1,"order":"DESC","orderby":"none"
                                              {"}"}
                                            </div>{" "}
                                            <div className="pbmit-servicebox-right col-lg-9 col-md-12 pbmit-column" style={isMobile?mobl:deskl}>
                                              <div className="pbmit-element-posts-wrapper row multi-columns-row swiper-container ">
                                                <article className="pbmit-ele pbmit-ele-service pbmit-service-style-2 col-md-4 advisory pbmit-term-30  ">
                                                <div className="pbminfotech-post-item">
                                                  <div className="col-lg-12 "  >

                                                    <div className="pbmit-service-wrapper">
                                                      <div className="pbmit-featured-img-wrapper">
                                                        <div className="pbmit-featured-wrapper">
                                                          <img
                                                            loading="lazy"
                                                            decoding="async"
                                                            // width={900}
                                                            // height={1000}
                                                            style={{width:'100%',height:'300px'}}
                                                            src={banner}
                                                            className="attachment-pbmit-img-900x1000 size-pbmit-img-900x1000 wp-post-image"
                                                            alt=""
                                                          />
                                                        
                                                        </div>
                                                      </div>{" "}
                                                      <div className="pbmit-svg-btn d-flex align-items-center">
                                                        <a
                                                          className="btn-arrow d-flex align-items-center justify-content-center"
                                                          href="#/demo2/service/consulting-service/"
                                                        >
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
                                                            <line
                                                              x1={1}
                                                              y1={18}
                                                              x2="17.8"
                                                              y2="1.2"
                                                            />
                                                            <line
                                                              x1="1.2"
                                                              y1={1}
                                                              x2={18}
                                                              y2={1}
                                                            />
                                                            <line
                                                              x1={18}
                                                              y1="17.8"
                                                              x2={18}
                                                              y2={1}
                                                            />
                                                          </svg>
                                                        </a>
                                                      </div>
                                                        
                                                    </div>
                                                    </div>
                                                    
                                                    <div className="pbminfotech-box-content">
                                                      <div className="pbmit-service-icon-wrapper">
                                                        <i className="pbmit-cleanfin-icon pbmit-cleanfin-icon-global" />{" "}
                                                      </div>
                                                      <div className="pbmit-serv-cat">
                                                        <a
                                                          href="#/demo2/service-category/advisory/"
                                                          rel="tag"
                                                        >
                                                          Forex trading
                                                        </a>
                                                      </div>
                                                      <h3 className="pbmit-service-title">
                                                        <a href="#/demo2/service/consulting-service/">
                                                          world financial
                                                          investment
                                                        </a>
                                                      </h3>
                                                    </div>
                                                    <a
                                                      href="#/demo2/service/consulting-service/"
                                                      className="pbmit-link"
                                                    />
                                                  </div>
                                                </article>
                                                <article className="pbmit-ele pbmit-ele-service pbmit-service-style-2 col-md-4 advisory pbmit-term-30  ">
                                                  <div className="pbminfotech-post-item">
                                                  <div className="col-lg-12"  >

                                                    <div className="pbmit-service-wrapper">
                                                      <div className="pbmit-featured-img-wrapper">
                                                        <div className="pbmit-featured-wrapper">
                                                          <img
                                                            loading="lazy"
                                                            decoding="async"
                                                            style={{width:'100%',height:'300px'}}
                                                            src={banner2}
                                                            className="attachment-pbmit-img-900x1000 size-pbmit-img-900x1000 wp-post-image"
                                                            alt=""
                                                          />
                                                        </div>
                                                      </div>{" "}
                                                      <div className="pbmit-svg-btn d-flex align-items-center">
                                                        <a
                                                          className="btn-arrow d-flex align-items-center justify-content-center"
                                                          href="#/demo2/service/consulting-service/"
                                                        >
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
                                                            <line
                                                              x1={1}
                                                              y1={18}
                                                              x2="17.8"
                                                              y2="1.2"
                                                            />
                                                            <line
                                                              x1="1.2"
                                                              y1={1}
                                                              x2={18}
                                                              y2={1}
                                                            />
                                                            <line
                                                              x1={18}
                                                              y1="17.8"
                                                              x2={18}
                                                              y2={1}
                                                            />
                                                          </svg>
                                                        </a>
                                                      </div>
                                                    </div>
                                                    </div>
                                                    <div className="pbminfotech-box-content">
                                                      <div className="pbmit-service-icon-wrapper">
                                                        <i className="pbmit-cleanfin-icon pbmit-cleanfin-icon-global" />{" "}
                                                      </div>
                                                      <div className="pbmit-serv-cat">
                                                        <a href="" rel="tag">
                                                          chart technology
                                                        </a>
                                                      </div>
                                                      <h3 className="pbmit-service-title">
                                                        <a href="">
                                                          Stock market
                                                        </a>
                                                      </h3>
                                                    </div>
                                                    <a
                                                      href=""
                                                      className="pbmit-link"
                                                    />
                                                  </div>
                                                </article>
                                                <article className="pbmit-ele pbmit-ele-service pbmit-service-style-2 col-md-4 advisory pbmit-term-30  ">
                                                  <div className="pbminfotech-post-item">
                                                  <div className="col-lg-12" >

                                                    <div className="pbmit-service-wrapper">
                                                      <div className="pbmit-featured-img-wrapper">
                                                        <div className="pbmit-featured-wrapper">
                                                          <img
                                                            loading="lazy"
                                                            decoding="async"
                                                            style={{width:'100%',height:'300px'}}
                                                            src={
                                                              "https://img.freepik.com/free-vector/gradient-stock-market-concept_23-2149166910.jpg?w=996&t=st=1702555280~exp=1702555880~hmac=59b1a8a217ac404dd8127177138369cc2d66024f1eec36e98cf3df1f20006523"
                                                            }
                                                            className="attachment-pbmit-img-900x1000 size-pbmit-img-900x1000 wp-post-image"
                                                            alt=""
                                                          />
                                                        </div>
                                                      </div>{" "}
                                                      <div className="pbmit-svg-btn d-flex align-items-center">
                                                        <a
                                                          className="btn-arrow d-flex align-items-center justify-content-center"
                                                          href="https://cleanfin-demo.pbminfotech.com/demo2/service/consulting-service/"
                                                        >
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
                                                            <line
                                                              x1={1}
                                                              y1={18}
                                                              x2="17.8"
                                                              y2="1.2"
                                                            />
                                                            <line
                                                              x1="1.2"
                                                              y1={1}
                                                              x2={18}
                                                              y2={1}
                                                            />
                                                            <line
                                                              x1={18}
                                                              y1="17.8"
                                                              x2={18}
                                                              y2={1}
                                                            />
                                                          </svg>
                                                        </a>
                                                      </div>
                                                    </div>
                                                    </div>
                                                    <div className="pbminfotech-box-content">
                                                      <div className="pbmit-service-icon-wrapper">
                                                        <i className="pbmit-cleanfin-icon pbmit-cleanfin-icon-global" />{" "}
                                                      </div>
                                                      <div className="pbmit-serv-cat">
                                                        <a href="#" rel="tag">
                                                          Illustration
                                                        </a>
                                                      </div>
                                                      <h3 className="pbmit-service-title">
                                                        <a href="#">Stock </a>
                                                      </h3>
                                                    </div>
                                                    <a
                                                      href="#"
                                                      className="pbmit-link"
                                                    />
                                                  </div>
                                                </article>
                                              </div>{" "}
                                              {/* .pbmit-element-posts-wrapper */}
                                            </div>{" "}
                                            {/* .pbmit-servicebox-right*/}
                                          </div>{" "}
                                          {/* .row*/}
                                        </div>
                                        {/* .pbmit-element-inner */}
                                      </div>
                                      {/* .pbminfotech-element */}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </section>
                          </div>
                          <section
                            className="elementor-section elementor-top-section elementor-element elementor-element-38edca9 elementor-section-full_width elementor-section-stretched pbmit-col-stretched-none pbmit-cursor-color-blackish-color pbmit-bg-color-over-image elementor-section-height-default elementor-section-height-default"
                            data-id="38edca9"
                            data-element_type="section"
                            data-settings='{"stretch_section":"section-stretched"}'
                          >
                            <div className="elementor-container elementor-column-gap-no">
                              <div
                                className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-35fb702 pbmit-bg-color-over-image"
                                data-id="35fb702"
                                data-element_type="column"
                              >
                                <div className="elementor-widget-wrap elementor-element-populated">
                                  <div
                                    className="elementor-element elementor-element-74f45ef elementor-widget elementor-widget-pbmit_marquee_effect_element"
                                    data-id="74f45ef"
                                    data-element_type="widget"
                                    data-widget_type="pbmit_marquee_effect_element.default"
                                  >
                                    <div className="elementor-widget-container">
                                      <div
                                        className="pbminfotech-element
		pbminfotech-element-marquee-effect		pbmit-element-marquee-effect-style-1		pbmit-element-viewtype-row-column		pbmit-element-column-three		pbmit-element-sticky-carousel-false		pbmit-element-caroursel-dot-false		pbmit-infinite-scroll-no		pbmit-infinite-scroll-button-no				"
                                        data-cpt="marquee-effect"
                                        data-totalpagination={1}
                                        data-style={1}
                                        data-show={3}
                                        data-columns={3}
                                        data-loop="false"
                                        data-autoplay="false"
                                        data-center="false"
                                        data-nav="false"
                                        data-dots="false"
                                        data-reverse="false"
                                        data-autoplayspeed={1000}
                                        data-margin=""
                                      >
                                        <div className="pbmit-element-inner">
                                          <div className="pbmit-marquee-effect-section">
                                            <div className="pbmit-marquee-container swiper-container">
                                              <div className="swiper-wrapper">
                                                <article className="pbmit-ele pbmit-ele-marquee-effect pbmit-marquee-effect-style-1    ">
                                                  <div className="pbmit-tag-wrapper">
                                                    <h2 className="pbmit-element-title">
                                                      Finance Advisor
                                                    </h2>
                                                  </div>
                                                </article>
                                                <article className="pbmit-ele pbmit-ele-marquee-effect pbmit-marquee-effect-style-1    ">
                                                  <div className="pbmit-tag-wrapper">
                                                    <h2 className="pbmit-element-title">
                                                      Stock Custodian
                                                    </h2>
                                                  </div>
                                                </article>
                                                <article className="pbmit-ele pbmit-ele-marquee-effect pbmit-marquee-effect-style-1    ">
                                                  <div className="pbmit-tag-wrapper">
                                                    <h2 className="pbmit-element-title">
                                                      Market Research
                                                    </h2>
                                                  </div>
                                                </article>
                                                <article className="pbmit-ele pbmit-ele-marquee-effect pbmit-marquee-effect-style-1    ">
                                                  <div className="pbmit-tag-wrapper">
                                                    <h2 className="pbmit-element-title">
                                                      Bitcoin Farming
                                                    </h2>
                                                  </div>
                                                </article>{" "}
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        {/* .pbmit-element-inner */}
                                      </div>
                                      {/* .pbminfotech-element */}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </section>
                          <section
                            className="elementor-section elementor-top-section elementor-element elementor-element-e2b406d pbmit-col-stretched-left pbmit-bg-color-yes pbmit-elementor-bg-color-globalcolor elementor-section-stretched pbmit-cursor-color-blackish-color pbmit-bg-color-over-image elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                            data-id="e2b406d"
                            data-element_type="section"
                            data-settings='{"stretch_section":"section-stretched"}'
                          >
                            <div className="elementor-container elementor-column-gap-no">
                              <div
                                className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-fa20c32 pbmit-bg-color-over-image"
                                data-id="fa20c32"
                                data-element_type="column"
                                data-settings='{"background_background":"classic"}'
                              >
                                <div className=" elementor-element-populated">
                                  <img
                                    src="https://img.freepik.com/free-vector/mobile-online-trading-isometric-concept-with-smartphone-illustration_1284-55812.jpg?w=740&t=st=1702718644~exp=1702719244~hmac=b4921e3de7090562a8ee57ff9e3b7ebba72e241a94eafa55437a05706fd733ff"
                                    className="h-100"
                                  />
                                  <div
                                    className="elementor-element elementor-element-d121d00 elementor-widget elementor-widget-spacer"
                                    data-id="d121d00"
                                    data-element_type="widget"
                                    data-widget_type="spacer.default"
                                  >
                                    <div className="elementor-widget-container">
                                      <style
                                        dangerouslySetInnerHTML={{
                                          __html:
                                            "/*! elementor - v3.18.0 - 08-12-2023 */\n.elementor-column .elementor-spacer-inner{height:var(--spacer-size)}.e-con{--container-widget-width:100%}.e-con-inner>.elementor-widget-spacer,.e-con>.elementor-widget-spacer{width:var(--container-widget-width,var(--spacer-size));--align-self:var(--container-widget-align-self,initial);--flex-shrink:0}.e-con-inner>.elementor-widget-spacer>.elementor-widget-container,.e-con>.elementor-widget-spacer>.elementor-widget-container{height:100%;width:100%}.e-con-inner>.elementor-widget-spacer>.elementor-widget-container>.elementor-spacer,.e-con>.elementor-widget-spacer>.elementor-widget-container>.elementor-spacer{height:100%}.e-con-inner>.elementor-widget-spacer>.elementor-widget-container>.elementor-spacer>.elementor-spacer-inner,.e-con>.elementor-widget-spacer>.elementor-widget-container>.elementor-spacer>.elementor-spacer-inner{height:var(--container-widget-height,var(--spacer-size))}.e-con-inner>.elementor-widget-spacer.elementor-widget-empty,.e-con>.elementor-widget-spacer.elementor-widget-empty{position:relative;min-height:22px;min-width:22px}.e-con-inner>.elementor-widget-spacer.elementor-widget-empty .elementor-widget-empty-icon,.e-con>.elementor-widget-spacer.elementor-widget-empty .elementor-widget-empty-icon{position:absolute;top:0;bottom:0;left:0;right:0;margin:auto;padding:0;width:22px;height:22px}",
                                        }}
                                      />{" "}
                                      <div className="elementor-spacer">
                                        <div className="elementor-spacer-inner" />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-4539a6b pbmit-text-color-white pbmit-bg-color-over-image"
                                data-id="4539a6b"
                                data-element_type="column"
                              >
                                <div className="elementor-widget-wrap elementor-element-populated">
                                  <div
                                    className="elementor-element elementor-element-436ba0f elementor-widget elementor-widget-pbmit_heading"
                                    data-id="436ba0f"
                                    data-element_type="widget"
                                    data-widget_type="pbmit_heading.default"
                                  >
                                    <div className="elementor-widget-container">
                                      <div className="pbmit-heading-subheading pbmit-reverse-heading-yes animation-style2">
                                        <h2 className="pbmit-element-title">
                                          We provide the solutions
                                          <br /> to grow your portfolio.
                                        </h2>
                                      </div>{" "}
                                    </div>
                                  </div>
                                  <section
                                    className="elementor-section elementor-inner-section elementor-element elementor-element-475033b pbmit-col-stretched-none pbmit-cursor-color-blackish-color pbmit-bg-color-over-image elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                                    data-id="475033b"
                                    data-element_type="section"
                                  >
                                    <div className="elementor-container elementor-column-gap-no">
                                      <div
                                        className="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-033e333 pbmit-bg-color-over-image"
                                        data-id="033e333"
                                        data-element_type="column"
                                      >
                                        <div style={isMobile?moble:deskle}>
                                        <div className="elementor-widget-wrap elementor-element-populated">
                                          <div
                                            className="elementor-element elementor-element-56ae99c elementor-widget elementor-widget-text-editor"
                                            data-id="56ae99c"
                                            data-element_type="widget"
                                            data-widget_type="text-editor.default"
                                          >
                                            <div className="elementor-widget-container">
                                              <style
                                                dangerouslySetInnerHTML={{
                                                  __html:
                                                    "/*! elementor - v3.18.0 - 08-12-2023 */\n.elementor-widget-text-editor.elementor-drop-cap-view-stacked .elementor-drop-cap{background-color:#69727d;color:#fff}.elementor-widget-text-editor.elementor-drop-cap-view-framed .elementor-drop-cap{color:#69727d;border:3px solid;background-color:transparent}.elementor-widget-text-editor:not(.elementor-drop-cap-view-default) .elementor-drop-cap{margin-top:8px}.elementor-widget-text-editor:not(.elementor-drop-cap-view-default) .elementor-drop-cap-letter{width:1em;height:1em}.elementor-widget-text-editor .elementor-drop-cap{float:left;text-align:center;line-height:1;font-size:50px}.elementor-widget-text-editor .elementor-drop-cap-letter{display:inline-block}",
                                                }}
                                              />{" "}
                                            Unlocking the potential of your portfolio is our expertise. Our solutions are crafted to foster substantial growth, tailored to your unique needs. We guide you through strategies and opportunities, empowering your investments to flourish and reach new heights
                                            </div>
                                          </div>
                                          <div
                                            className="elementor-element elementor-element-41f64f0 elementor-widget elementor-widget-pbmit_icon_heading"
                                            data-id="41f64f0"
                                            data-element_type="widget"
                                            data-widget_type="pbmit_icon_heading.default"
                                          >
                                            <div className="elementor-widget-container">
                                              <div className="pbmit-ihbox pbmit-ihbox-style-2">
                                                <div className="pbmit-ihbox-contents">
                                                  <h2 className="pbmit-element-title">
                                                    Market Research
                                                  </h2>
                                                  <div className="pbmit-heading-desc">
                                                  Insightful market research, empowering informed decisions and strategic growth.
                                                  </div>{" "}
                                                </div>
                                              </div>{" "}
                                            </div>
                                          </div>
                                          <div
                                            className="elementor-element elementor-element-9abcd0c elementor-widget elementor-widget-pbmit_icon_heading"
                                            data-id="9abcd0c"
                                            data-element_type="widget"
                                            data-widget_type="pbmit_icon_heading.default"
                                          >
                                            <div className="elementor-widget-container">
                                              <div className="pbmit-ihbox pbmit-ihbox-style-2">
                                                {/* <div className="pbmit-ihbox-icon">
                                                  <div className="pbmit-ihbox-icon-wrapper">
                                                    <div className="pbmit-icon-wrapper pbmit-icon-type-icon">
                                                      <i className="pbmit-cleanfin-icon pbmit-cleanfin-icon-investment" />
                                                    </div>
                                                  </div>
                                                </div> */}
                                                <div className="pbmit-ihbox-contents">
                                                  <h2 className="pbmit-element-title">
                                                    Increase
                                                  </h2>
                                                  <div className="pbmit-heading-desc">
                                                  Experience accelerated portfolio expansion through our specialized solutions.
                                                  </div>{" "}
                                                </div>
                                              </div>{" "}
                                              <div className="mt-3">
                                                <a
                                                  href="../../../Assests/app-debug.apk"
                                                  download
                                                >
                                                  <img
                                                    src={playStore}
                                                    className="cursor-pointer"
                                                    width={200}
                                                  />
                                                </a>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        </div>
                                      </div>
                                    </div>
                                  </section>
                                </div>
                              </div>
                            </div>
                          </section>
                          <div className="p-2 mt-2">
                       <PortfoloioSection/>
                       </div>
                       <div className="p-2">
                          <section 
                            className="mb-3 elementor-section elementor-top-section elementor-element elementor-element-961e6e6 elementor-section-stretched elementor-section-full_width pbmit-col-stretched-none pbmit-cursor-color-blackish-color pbmit-bg-color-over-image elementor-section-height-default elementor-section-height-default"
                            data-id="961e6e6"
                            data-element_type="section"
                            data-settings='{"stretch_section":"section-stretched"}'
                          >
                            <div className="elementor-container elementor-column-gap-no">
                              <div
                                className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-45dd816 pbmit-bg-color-over-image"
                                data-id="45dd816"
                                data-element_type="column"
                              >
                                <div className="elementor-widget-wrap elementor-element-populated">
                                  <div
                                    className="elementor-element elementor-element-ee21c87 pbmit-align-left elementor-widget elementor-widget-pbmit_portfolio_element"
                                    data-id="ee21c87"
                                    data-element_type="widget"
                                    data-widget_type="pbmit_portfolio_element.default"
                                  >
                                    <div className="elementor-widget-container">
                                      <div
                                        className="pbminfotech-element
		pbminfotech-element-portfolio		pbmit-element-portfolio-style-2		pbmit-element-viewtype-carousel		pbmit-element-column-three		pbmit-element-sticky-carousel-false		pbmit-element-caroursel-dot-false		pbmit-infinite-scroll-no		pbmit-infinite-scroll-button-no		pbminfotech-gap-default		"
                                        data-cpt="portfolio"
                                        data-totalpagination={1}
                                        data-style={2}
                                        data-show={-1}
                                        data-columns={3}
                                        data-loop="true"
                                        data-autoplay="true"
                                        data-center="false"
                                        data-nav="false"
                                        data-dots="false"
                                        data-reverse="false"
                                        data-autoplayspeed={4000}
                                        data-margin="default"
                                      >
                                        <div className="pbmit-element-inner">
                                          <div className="pbmit-ele-header-area">
                                            <div className="pbmit-heading-subheading " />
                                          </div>
                                          <div className="pbmit-infinite-scroll-data">
                                            {"{"}
                                            "cpt":"portfolio","style":"2","columns":"3","show":-1,"order":"DESC","orderby":"none"
                                            {"}"}
                                          </div>{" "}
                                          <div className="pbmit-element-posts-wrapper row multi-columns-row swiper-container">
                                            <article className="pbmit-ele pbmit-ele-portfolio pbmit-portfolio-style-2 col-md-4 advice pbmit-term-29 pbmit-odd pbmit-col-odd">
                                              <div className="pbminfotech-post-content">
                                                <div className="pbmit-image-wrapper">
                                                  <div className="pbmit-featured-img-wrapper">
                                                    <div className="pbmit-featured-wrapper">
                                                      <img
                                                        loading="lazy"
                                                        decoding="async"
                                                        // width={1200}
                                                        // height={1000}
                                                        style={{width:'100%',height:'300px'}}
                                                        src="https://img.freepik.com/free-vector/3d-earth-graphic-symbolizing-global-trade-illustration_456031-125.jpg?w=1060&t=st=1702549636~exp=1702550236~hmac=9c134e880cfbe8314d84c0479c0a0918c43be0496d2c16faa1ad26088baef82e"
                                                        className="attachment-pbmit-img-1200x1160 size-pbmit-img-1200x1160 wp-post-image"
                                                        alt=""
                                                        srcSet="https://img.freepik.com/free-vector/3d-earth-graphic-symbolizing-global-trade-illustration_456031-125.jpg?w=1060&t=st=1702549636~exp=1702550236~hmac=9c134e880cfbe8314d84c0479c0a0918c43be0496d2c16faa1ad26088baef82e 1200w, https://cleanfin-demo.pbminfotech.com/demo2/wp-content/uploads/sites/3/2023/07/project-img-01-300x250.jpg 300w, https://cleanfin-demo.pbminfotech.com/demo2/wp-content/uploads/sites/3/2023/07/project-img-01-1024x853.jpg 1024w, https://cleanfin-demo.pbminfotech.com/demo2/wp-content/uploads/sites/3/2023/07/project-img-01-768x640.jpg 768w, https://cleanfin-demo.pbminfotech.com/demo2/wp-content/uploads/sites/3/2023/07/project-img-01-600x500.jpg 600w"
                                                        sizes="(max-width: 1200px) 100vw, 1200px"
                                                      />
                                                    </div>
                                                  </div>{" "}
                                                </div>
                                                <div className="pbminfotech-box-content">
                                                  <div className="pbmit-port-cat">
                                                    <a
                                                      href="#/demo2/portfolio-category/advice/"
                                                      rel="tag"
                                                    >
                                                      Advice
                                                    </a>
                                                  </div>
                                                  <h3 className="pbmit-title">
                                                    Startup Funding
                                                  </h3>
                                                </div>
                                                <a
                                                  href="#/demo2/portfolio/startup-funding/"
                                                  className="pbmit-link"
                                                />
                                              </div>
                                            </article>
                                            <article className="pbmit-ele pbmit-ele-portfolio pbmit-portfolio-style-2 col-md-4 corporate pbmit-term-34 pbmit-even pbmit-col-odd">
                                              <div className="pbminfotech-post-content">
                                                <div className="pbmit-image-wrapper">
                                                  <div className="pbmit-featured-img-wrapper">
                                                    <div className="pbmit-featured-wrapper">
                                                      <img
                                                        loading="lazy"
                                                        decoding="async"
                                                        style={{width:'100%',height:'300px'}}
                                                        src="https://img.freepik.com/premium-photo/market-chart-business-increase-stock-graph-investment-financial-data-profit-growth-money-diagram-background-with-success-diagram-exchange-information_79161-1825.jpg?w=1380"
                                                        className="attachment-pbmit-img-1200x1160 size-pbmit-img-1200x1160 wp-post-image"
                                                        alt=""
                                                        srcSet="https://img.freepik.com/premium-photo/market-chart-business-increase-stock-graph-investment-financial-data-profit-growth-money-diagram-background-with-success-diagram-exchange-information_79161-1825.jpg?w=1380 1200w, https://cleanfin-demo.pbminfotech.com/demo2/wp-content/uploads/sites/3/2023/07/project-img-02-300x250.jpg 300w, https://cleanfin-demo.pbminfotech.com/demo2/wp-content/uploads/sites/3/2023/07/project-img-02-1024x853.jpg 1024w, https://cleanfin-demo.pbminfotech.com/demo2/wp-content/uploads/sites/3/2023/07/project-img-02-768x640.jpg 768w, https://cleanfin-demo.pbminfotech.com/demo2/wp-content/uploads/sites/3/2023/07/project-img-02-600x500.jpg 600w"
                                                        sizes="(max-width: 1200px) 100vw, 1200px"
                                                      />
                                                    </div>
                                                  </div>{" "}
                                                </div>
                                                <div className="pbminfotech-box-content">
                                                  <div className="pbmit-port-cat">
                                                    <a
                                                      href="#/demo2/portfolio-category/corporate/"
                                                      rel="tag"
                                                    >
                                                      Corporate
                                                    </a>
                                                  </div>
                                                  <h3 className="pbmit-title">
                                                    Accounting Advisory
                                                  </h3>
                                                </div>
                                                <a
                                                  href="#/demo2/portfolio/accounting-advisory/"
                                                  className="pbmit-link"
                                                />
                                              </div>
                                            </article>
                                            <article className="pbmit-ele pbmit-ele-portfolio pbmit-portfolio-style-2 col-md-4 finance pbmit-term-36 pbmit-odd pbmit-col-odd">
                                              <div className="pbminfotech-post-content">
                                                <div className="pbmit-image-wrapper">
                                                  <div className="pbmit-featured-img-wrapper">
                                                    <div className="pbmit-featured-wrapper">
                                                      <img
                                                        loading="lazy"
                                                        decoding="async"
                                                        style={{width:'100%',height:'300px'}}
                                                        src="https://img.freepik.com/free-vector/forex-trading-background_52683-41604.jpg?w=996&t=st=1702549677~exp=1702550277~hmac=0d3580dbca96704d24a2427d0e1179479ffa924075fc6033d748fe0d4b6bcc0c"
                                                        className="attachment-pbmit-img-1200x1160 size-pbmit-img-1200x1160 wp-post-image"
                                                        alt=""
                                                        srcSet="https://img.freepik.com/free-vector/forex-trading-background_52683-41604.jpg?w=996&t=st=1702549677~exp=1702550277~hmac=0d3580dbca96704d24a2427d0e1179479ffa924075fc6033d748fe0d4b6bcc0c 1200w, https://cleanfin-demo.pbminfotech.com/demo2/wp-content/uploads/sites/3/2023/07/project-img-03-300x250.jpg 300w, https://cleanfin-demo.pbminfotech.com/demo2/wp-content/uploads/sites/3/2023/07/project-img-03-1024x853.jpg 1024w, https://cleanfin-demo.pbminfotech.com/demo2/wp-content/uploads/sites/3/2023/07/project-img-03-768x640.jpg 768w, https://cleanfin-demo.pbminfotech.com/demo2/wp-content/uploads/sites/3/2023/07/project-img-03-600x500.jpg 600w"
                                                        sizes="(max-width: 1200px) 100vw, 1200px"
                                                      />
                                                    </div>
                                                  </div>{" "}
                                                </div>
                                                <div className="pbminfotech-box-content">
                                                  <div className="pbmit-port-cat">
                                                    <a
                                                      href="#/demo2/portfolio-category/finance/"
                                                      rel="tag"
                                                    >
                                                      Finance
                                                    </a>
                                                  </div>
                                                  <h3 className="pbmit-title">
                                                    Stock Custodian
                                                  </h3>
                                                </div>
                                                <a
                                                  href="#/demo2/portfolio/stock-custodian/"
                                                  className="pbmit-link"
                                                />
                                              </div>
                                            </article>
                                            <article className="pbmit-ele pbmit-ele-portfolio pbmit-portfolio-style-2 col-md-4 marketing pbmit-term-44 pbmit-even pbmit-col-even">
                                              <div className="pbminfotech-post-content">
                                                <div className="pbmit-image-wrapper">
                                                  <div className="pbmit-featured-img-wrapper">
                                                    <div className="pbmit-featured-wrapper">
                                                      <img
                                                        loading="lazy"
                                                        decoding="async"
                                                        style={{width:'100%',height:'300px'}}
                                                        src="https://img.freepik.com/premium-photo/creative-glowing-forex-chart-with-map-dark-blue-background-trade-finance-concept-3d-rendering_670147-11936.jpg?w=996"
                                                        className="attachment-pbmit-img-1200x1160 size-pbmit-img-1200x1160 wp-post-image"
                                                        alt=""
                                                        srcSet="https://img.freepik.com/premium-photo/creative-glowing-forex-chart-with-map-dark-blue-background-trade-finance-concept-3d-rendering_670147-11936.jpg?w=996 1200w, https://cleanfin-demo.pbminfotech.com/demo2/wp-content/uploads/sites/3/2023/07/project-img-04-300x250.jpg 300w, https://cleanfin-demo.pbminfotech.com/demo2/wp-content/uploads/sites/3/2023/07/project-img-04-1024x853.jpg 1024w, https://cleanfin-demo.pbminfotech.com/demo2/wp-content/uploads/sites/3/2023/07/project-img-04-768x640.jpg 768w, https://cleanfin-demo.pbminfotech.com/demo2/wp-content/uploads/sites/3/2023/07/project-img-04-600x500.jpg 600w"
                                                        sizes="(max-width: 1200px) 100vw, 1200px"
                                                      />
                                                    </div>
                                                  </div>{" "}
                                                </div>
                                                <div className="pbminfotech-box-content">
                                                  <div className="pbmit-port-cat">
                                                    <a
                                                      href="#/demo2/portfolio-category/marketing/"
                                                      rel="tag"
                                                    >
                                                      Marketing
                                                    </a>
                                                  </div>
                                                  <h3 className="pbmit-title">
                                                    Business Strategy
                                                  </h3>
                                                </div>
                                                <a
                                                  href="#/demo2/portfolio/business-strategy/"
                                                  className="pbmit-link"
                                                />
                                              </div>
                                            </article>
                                            <article className="pbmit-ele pbmit-ele-portfolio pbmit-portfolio-style-2 col-md-4 strategy pbmit-term-50 pbmit-odd pbmit-col-even">
                                              <div className="pbminfotech-post-content">
                                                <div className="pbmit-image-wrapper">
                                                  <div className="pbmit-featured-img-wrapper">
                                                    <div className="pbmit-featured-wrapper">
                                                      <img
                                                        loading="lazy"
                                                        decoding="async"
                                                        style={{width:'100%',height:'300px'}}
                                                        src="https://img.freepik.com/premium-photo/stock-market-forex-trading-graph_73426-190.jpg?w=1060"
                                                        className="attachment-pbmit-img-1200x1160 size-pbmit-img-1200x1160 wp-post-image"
                                                        alt=""
                                                        srcSet="https://img.freepik.com/premium-photo/stock-market-forex-trading-graph_73426-190.jpg?w=1060 1200w, https://cleanfin-demo.pbminfotech.com/demo2/wp-content/uploads/sites/3/2023/07/project-img-05-300x250.jpg 300w, https://cleanfin-demo.pbminfotech.com/demo2/wp-content/uploads/sites/3/2023/07/project-img-05-1024x853.jpg 1024w, https://cleanfin-demo.pbminfotech.com/demo2/wp-content/uploads/sites/3/2023/07/project-img-05-768x640.jpg 768w, https://cleanfin-demo.pbminfotech.com/demo2/wp-content/uploads/sites/3/2023/07/project-img-05-600x500.jpg 600w"
                                                        sizes="(max-width: 1200px) 100vw, 1200px"
                                                      />
                                                    </div>
                                                  </div>{" "}
                                                </div>
                                                <div className="pbminfotech-box-content">
                                                  <div className="pbmit-port-cat">
                                                    <a
                                                      href="#/demo2/portfolio-category/strategy/"
                                                      rel="tag"
                                                    >
                                                      Strategy
                                                    </a>
                                                  </div>
                                                  <h3 className="pbmit-title">
                                                    Market Research
                                                  </h3>
                                                </div>
                                                <a
                                                  href="#/demo2/portfolio/market-research/"
                                                  className="pbmit-link"
                                                />
                                              </div>
                                            </article>
                                            <article className="pbmit-ele pbmit-ele-portfolio pbmit-portfolio-style-2 col-md-4 trading pbmit-term-52 pbmit-even pbmit-col-even">
                                              <div className="pbminfotech-post-content">
                                                <div className="pbmit-image-wrapper">
                                                  <div className="pbmit-featured-img-wrapper">
                                                    <div className="pbmit-featured-wrapper">
                                                      <img
                                                        loading="lazy"
                                                        decoding="async"
                                                        style={{width:'100%',height:'300px'}}
                                                        src="https://img.freepik.com/free-photo/collage-finance-banner-concept_23-2150608820.jpg?w=996&t=st=1702549449~exp=1702550049~hmac=72b49509d5059fb6716ceb8617c3c79636d60b504e13c814e2a4212434b30e4d"
                                                        className="attachment-pbmit-img-1200x1160 size-pbmit-img-1200x1160 wp-post-image"
                                                        alt=""
                                                        srcSet="https://img.freepik.com/free-photo/collage-finance-banner-concept_23-2150608820.jpg?w=996&t=st=1702549449~exp=1702550049~hmac=72b49509d5059fb6716ceb8617c3c79636d60b504e13c814e2a4212434b30e4d"
                                                        sizes="(max-width: 1200px) 100vw, 1200px"
                                                      />
                                                    </div>
                                                  </div>{" "}
                                                </div>
                                                <div className="pbminfotech-box-content">
                                                  <div className="pbmit-port-cat">
                                                    <a
                                                      href="#/demo2/portfolio-category/trading/"
                                                      rel="tag"
                                                    >
                                                      Trading
                                                    </a>
                                                  </div>
                                                  <h3 className="pbmit-title">
                                                    Corporate Audit
                                                  </h3>
                                                </div>
                                                <a
                                                  href="#/demo2/portfolio/corporate-audit/"
                                                  className="pbmit-link"
                                                />
                                              </div>
                                            </article>
                                            <article className="pbmit-ele pbmit-ele-portfolio pbmit-portfolio-style-2 col-md-4 finance pbmit-term-36 pbmit-odd pbmit-col-odd">
                                              <div className="pbminfotech-post-content">
                                                <div className="pbmit-image-wrapper">
                                                  <div className="pbmit-featured-img-wrapper">
                                                    <div className="pbmit-featured-wrapper">
                                                      <img
                                                        loading="lazy"
                                                        decoding="async"
                                                        style={{width:'100%',height:'300px'}}
                                                        src="https://img.freepik.com/free-vector/gradient-cryptocurrency-concept_23-2149215736.jpg?w=996&t=st=1702549541~exp=1702550141~hmac=0744e44a75f4ea4027b74bd8e0c73dbc1f3e295665366db1309f6d6d5d76fabe"
                                                        className="attachment-pbmit-img-1200x1160 size-pbmit-img-1200x1160 wp-post-image"
                                                        alt=""
                                                        srcSet="https://img.freepik.com/free-vector/gradient-cryptocurrency-concept_23-2149215736.jpg?w=996&t=st=1702549541~exp=1702550141~hmac=0744e44a75f4ea4027b74bd8e0c73dbc1f3e295665366db1309f6d6d5d76fabe 1200w, https://cleanfin-demo.pbminfotech.com/demo2/wp-content/uploads/sites/3/2023/07/project-img-07-300x250.jpg 300w, https://cleanfin-demo.pbminfotech.com/demo2/wp-content/uploads/sites/3/2023/07/project-img-07-1024x853.jpg 1024w, https://cleanfin-demo.pbminfotech.com/demo2/wp-content/uploads/sites/3/2023/07/project-img-07-768x640.jpg 768w, https://cleanfin-demo.pbminfotech.com/demo2/wp-content/uploads/sites/3/2023/07/project-img-07-600x500.jpg 600w"
                                                        sizes="(max-width: 1200px) 100vw, 1200px"
                                                      />
                                                    </div>
                                                  </div>{" "}
                                                </div>
                                                <div className="pbminfotech-box-content">
                                                  <div className="pbmit-port-cat">
                                                    <a
                                                      href="#/demo2/portfolio-category/finance/"
                                                      rel="tag"
                                                    >
                                                      Finance
                                                    </a>
                                                  </div>
                                                  <h3 className="pbmit-title">
                                                    Digital Analytic
                                                  </h3>
                                                </div>
                                                <a
                                                  href="#/demo2/portfolio/digital-analytic/"
                                                  className="pbmit-link"
                                                />
                                              </div>
                                            </article>
                                            <article className="pbmit-ele pbmit-ele-portfolio pbmit-portfolio-style-2 col-md-4 strategy pbmit-term-50 pbmit-even pbmit-col-odd">
                                              <div className="pbminfotech-post-content">
                                                <div className="pbmit-image-wrapper">
                                                  <div className="pbmit-featured-img-wrapper">
                                                    <div className="pbmit-featured-wrapper">
                                                      <img
                                                        loading="lazy"
                                                        decoding="async"
                                                        style={{width:'100%',height:'300px'}}
                                                        src="https://img.freepik.com/free-vector/graph-chart-with-moving-up-arrow-stock-market-financial-investment-diagram-blue-background_56104-1814.jpg?w=1060&t=st=1702549740~exp=1702550340~hmac=c518f0f85173746a2678b63f3fffdaf6ccd9d9e34758c1392f95be01bc993a71"
                                                        className="attachment-pbmit-img-1200x1160 size-pbmit-img-1200x1160 wp-post-image"
                                                        alt=""
                                                        srcSet="https://img.freepik.com/free-vector/graph-chart-with-moving-up-arrow-stock-market-financial-investment-diagram-blue-background_56104-1814.jpg?w=1060&t=st=1702549740~exp=1702550340~hmac=c518f0f85173746a2678b63f3fffdaf6ccd9d9e34758c1392f95be01bc993a71 1200w, https://cleanfin-demo.pbminfotech.com/demo2/wp-content/uploads/sites/3/2023/07/project-img-08-300x250.jpg 300w, https://cleanfin-demo.pbminfotech.com/demo2/wp-content/uploads/sites/3/2023/07/project-img-08-1024x853.jpg 1024w, https://cleanfin-demo.pbminfotech.com/demo2/wp-content/uploads/sites/3/2023/07/project-img-08-768x640.jpg 768w, https://cleanfin-demo.pbminfotech.com/demo2/wp-content/uploads/sites/3/2023/07/project-img-08-600x500.jpg 600w"
                                                        sizes="(max-width: 1200px) 100vw, 1200px"
                                                      />
                                                    </div>
                                                  </div>{" "}
                                                </div>
                                                <div className="pbminfotech-box-content">
                                                  <div className="pbmit-port-cat">
                                                    <a
                                                      href="#/demo2/portfolio-category/strategy/"
                                                      rel="tag"
                                                    >
                                                      Strategy
                                                    </a>
                                                  </div>
                                                  <h3 className="pbmit-title">
                                                    Bitcoin Farming
                                                  </h3>
                                                </div>
                                                <a
                                                  href="#/demo2/portfolio/bitcoin-farming/"
                                                  className="pbmit-link"
                                                />
                                              </div>
                                            </article>
                                            <article className="pbmit-ele pbmit-ele-portfolio pbmit-portfolio-style-2 col-md-4 corporate pbmit-term-34 pbmit-odd pbmit-col-odd">
                                              <div className="pbminfotech-post-content">
                                                <div className="pbmit-image-wrapper">
                                                  <div className="pbmit-featured-img-wrapper">
                                                    <div className="pbmit-featured-wrapper">
                                                      <img
                                                        loading="lazy"
                                                        decoding="async"
                                                        style={{width:'100%',height:'300px'}}
                                                        src="https://img.freepik.com/free-vector/forex-trading-stock-market-background_1017-31713.jpg?w=996&t=st=1702549570~exp=1702550170~hmac=fb1307846fbab932b472c60683d3b1e3b712cb4c64fc33bb39a32d799ee6959b"
                                                        className="attachment-pbmit-img-1200x1160 size-pbmit-img-1200x1160 wp-post-image"
                                                        alt=""
                                                        srcSet="https://img.freepik.com/free-vector/forex-trading-stock-market-background_1017-31713.jpg?w=996&t=st=1702549570~exp=1702550170~hmac=fb1307846fbab932b472c60683d3b1e3b712cb4c64fc33bb39a32d799ee6959b 1200w, https://cleanfin-demo.pbminfotech.com/demo2/wp-content/uploads/sites/3/2023/07/project-img-09-300x250.jpg 300w, https://cleanfin-demo.pbminfotech.com/demo2/wp-content/uploads/sites/3/2023/07/project-img-09-1024x853.jpg 1024w, https://cleanfin-demo.pbminfotech.com/demo2/wp-content/uploads/sites/3/2023/07/project-img-09-768x640.jpg 768w, https://cleanfin-demo.pbminfotech.com/demo2/wp-content/uploads/sites/3/2023/07/project-img-09-600x500.jpg 600w"
                                                        sizes="(max-width: 1200px) 100vw, 1200px"
                                                      />
                                                    </div>
                                                  </div>{" "}
                                                </div>
                                                <div className="pbminfotech-box-content">
                                                  <div className="pbmit-port-cat">
                                                    <a
                                                      href="#/demo2/portfolio-category/corporate/"
                                                      rel="tag"
                                                    >
                                                      Corporate
                                                    </a>
                                                  </div>
                                                  <h3 className="pbmit-title">
                                                    Trade Coaching
                                                  </h3>
                                                </div>
                                                <a
                                                  href="#/demo2/portfolio/trade-coaching/"
                                                  className="pbmit-link"
                                                />
                                              </div>
                                            </article>{" "}
                                          </div>
                                          {/* .pbmit-element-posts-wrapper */}
                                        </div>
                                        {/* .pbmit-element-inner */}
                                      </div>
                                      {/* .pbminfotech-element */}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </section>
                          </div>

                          <section
                            className="elementor-section elementor-top-section elementor-element elementor-element-667f094 elementor-section-stretched pbmit-bg-color-yes pbmit-elementor-bg-color-blackish pbmit-text-color-white pbmit-col-stretched-none pbmit-cursor-color-blackish-color pbmit-bg-color-over-image elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                            data-id="667f094"
                            data-element_type="section"
                            data-settings='{"stretch_section":"section-stretched"}'
                          >
                            <div className="elementor-container elementor-column-gap-no">
                              <div
                                className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-cf876f2 pbmit-bg-color-over-image"
                                data-id="cf876f2"
                                data-element_type="column"
                              >
                                <div className="elementor-widget-wrap elementor-element-populated">
                                  <div
                                    className="elementor-element elementor-element-156d8f7 elementor-widget elementor-widget-pbmit_testimonial_element"
                                    data-id="156d8f7"
                                    data-element_type="widget"
                                    data-widget_type="pbmit_testimonial_element.default"
                                  >
                                    <div className="elementor-widget-container">
                                      <div
                                        className="pbminfotech-element
		pbminfotech-element-testimonial		pbmit-element-testimonial-style-2		pbmit-element-viewtype-carousel		pbmit-element-column-one		pbmit-element-sticky-carousel-false		pbmit-element-caroursel-dot-true		pbmit-infinite-scroll-no		pbmit-infinite-scroll-button-no		pbminfotech-gap-default		"
                                        data-cpt="testimonial"
                                        data-totalpagination={1}
                                        data-style={2}
                                        data-show={6}
                                        data-columns={1}
                                        data-loop="false"
                                        data-autoplay="false"
                                        data-center="false"
                                        data-nav="above"
                                        data-dots="true"
                                        data-reverse="false"
                                        data-autoplayspeed={4000}
                                        data-margin="default"
                                      >
                                        <div className="pbmit-element-inner">
                                          <div className="row">
                                            <div className="pbmit-testimonialbox-left col-lg-3 col-md-12 pbmit-column">
                                              <div className="pbmit-ele-header-area">
                                                <div className="pbmit-heading-subheading pbmit-reverse-heading-yes animation-style2">
                                                  <h4 className="pbmit-element-subtitle">
                                                    <span></span>
                                                    Testimonials
                                                  </h4>
                                                  <h2 className="pbmit-element-title">
                                                    What our clients say
                                                  </h2>
                                                </div>{" "}
                                              </div>
                                            </div>
                                            <div className="pbmit-testimonialbox-right col-lg-9 col-md-12 pbmit-column">
                                              <div className="pbmit-element-posts-wrapper row multi-columns-row swiper-container">
                                                <article className="pbmit-ele pbmit-ele-testimonial pbmit-testimonial-style-2 col-md-12  pbmit-odd pbmit-col-odd">
                                                  <div className="pbminfotech-post-item">
                                                    <div className="pbminfotech-box-content">
                                                      <blockquote className="pbminfotech-testimonial-text">
                                                        <p>
                                                          “The most important
                                                          single thing is to
                                                          focus obsessively on
                                                          the customer. Our goal
                                                          is to be earth’s most
                                                          customer-centric
                                                          company.”
                                                        </p>
                                                      </blockquote>
                                                      <div className="pbminfotech-box-star-ratings">
                                                        <i className="pbmit-base-icon-star pbmit-active" />
                                                        <i className="pbmit-base-icon-star pbmit-active" />
                                                        <i className="pbmit-base-icon-star pbmit-active" />
                                                        <i className="pbmit-base-icon-star pbmit-active" />
                                                        <i className="pbmit-base-icon-star pbmit-active" />
                                                      </div>{" "}
                                                      <div className="pbminfotech-box-content-inner">
                                                        <div className="pbmit-featured-img-wrapper">
                                                          <div className="pbmit-featured-wrapper">
                                                            <img
                                                              loading="lazy"
                                                              decoding="async"
                                                              width={300}
                                                              height={300}
                                                              src="https://cleanfin-demo.pbminfotech.com/demo2/wp-content/uploads/sites/3/2023/07/testimonial-01.jpg"
                                                              className="attachment-pbmit-img-300x300 size-pbmit-img-300x300 wp-post-image"
                                                              alt=""
                                                              srcSet="https://cleanfin-demo.pbminfotech.com/demo2/wp-content/uploads/sites/3/2023/07/testimonial-01.jpg 300w, https://cleanfin-demo.pbminfotech.com/demo2/wp-content/uploads/sites/3/2023/07/testimonial-01-150x150.jpg 150w, https://cleanfin-demo.pbminfotech.com/demo2/wp-content/uploads/sites/3/2023/07/testimonial-01-100x100.jpg 100w"
                                                              sizes="(max-width: 300px) 100vw, 300px"
                                                            />
                                                          </div>
                                                        </div>{" "}
                                                        <div className="pbminfotech-box-author">
                                                          <h3 className="pbminfotech-box-title">
                                                            Stephen Welch
                                                          </h3>
                                                          <div className="pbminfotech-testimonial-detail">
                                                            Satisfied Client
                                                          </div>{" "}
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </article>
                                                <article className="pbmit-ele pbmit-ele-testimonial pbmit-testimonial-style-2 col-md-12  pbmit-even pbmit-col-even">
                                                  <div className="pbminfotech-post-item">
                                                    <div className="pbminfotech-box-content">
                                                      <blockquote className="pbminfotech-testimonial-text">
                                                        <p>
                                                          I express my deep
                                                          gratitude to the team
                                                          for the impeccable and
                                                          productive service to
                                                          the company activities
                                                          based on the results
                                                          of seven years of
                                                          joint work I recommend
                                                          the services
                                                        </p>
                                                      </blockquote>
                                                      <div className="pbminfotech-box-star-ratings">
                                                        <i className="pbmit-base-icon-star pbmit-active" />
                                                        <i className="pbmit-base-icon-star pbmit-active" />
                                                        <i className="pbmit-base-icon-star pbmit-active" />
                                                        <i className="pbmit-base-icon-star pbmit-active" />
                                                        <i className="pbmit-base-icon-star" />
                                                      </div>{" "}
                                                      <div className="pbminfotech-box-content-inner">
                                                        <div className="pbmit-featured-img-wrapper">
                                                          <div className="pbmit-featured-wrapper">
                                                            <img
                                                              loading="lazy"
                                                              decoding="async"
                                                              width={300}
                                                              height={300}
                                                              src="https://cleanfin-demo.pbminfotech.com/demo2/wp-content/uploads/sites/3/2023/07/testimonial-02.jpg"
                                                              className="attachment-pbmit-img-300x300 size-pbmit-img-300x300 wp-post-image"
                                                              alt=""
                                                              srcSet="https://cleanfin-demo.pbminfotech.com/demo2/wp-content/uploads/sites/3/2023/07/testimonial-02.jpg 300w, https://cleanfin-demo.pbminfotech.com/demo2/wp-content/uploads/sites/3/2023/07/testimonial-02-150x150.jpg 150w, https://cleanfin-demo.pbminfotech.com/demo2/wp-content/uploads/sites/3/2023/07/testimonial-02-100x100.jpg 100w"
                                                              sizes="(max-width: 300px) 100vw, 300px"
                                                            />
                                                          </div>
                                                        </div>{" "}
                                                        <div className="pbminfotech-box-author">
                                                          <h3 className="pbminfotech-box-title">
                                                            Martin Bailey
                                                          </h3>
                                                          <div className="pbminfotech-testimonial-detail">
                                                            Chief Finance
                                                          </div>{" "}
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </article>
                                                <article className="pbmit-ele pbmit-ele-testimonial pbmit-testimonial-style-2 col-md-12  pbmit-odd pbmit-col-odd">
                                                  <div className="pbminfotech-post-item">
                                                    <div className="pbminfotech-box-content">
                                                      <blockquote className="pbminfotech-testimonial-text">
                                                        <p>
                                                          I express my deep
                                                          gratitude to the team
                                                          for the impeccable and
                                                          productive service to
                                                          the company activities
                                                          based on the results
                                                          of seven years of
                                                          joint work I recommend
                                                          the services
                                                        </p>
                                                      </blockquote>
                                                      <div className="pbminfotech-box-star-ratings">
                                                        <i className="pbmit-base-icon-star pbmit-active" />
                                                        <i className="pbmit-base-icon-star pbmit-active" />
                                                        <i className="pbmit-base-icon-star pbmit-active" />
                                                        <i className="pbmit-base-icon-star" />
                                                        <i className="pbmit-base-icon-star" />
                                                      </div>{" "}
                                                      <div className="pbminfotech-box-content-inner">
                                                        <div className="pbmit-featured-img-wrapper">
                                                          <div className="pbmit-featured-wrapper">
                                                            <img
                                                              loading="lazy"
                                                              decoding="async"
                                                              width={300}
                                                              height={300}
                                                              src="https://cleanfin-demo.pbminfotech.com/demo2/wp-content/uploads/sites/3/2023/07/testimonial-03.jpg"
                                                              className="attachment-pbmit-img-300x300 size-pbmit-img-300x300 wp-post-image"
                                                              alt=""
                                                              srcSet="https://cleanfin-demo.pbminfotech.com/demo2/wp-content/uploads/sites/3/2023/07/testimonial-03.jpg 300w, https://cleanfin-demo.pbminfotech.com/demo2/wp-content/uploads/sites/3/2023/07/testimonial-03-150x150.jpg 150w, https://cleanfin-demo.pbminfotech.com/demo2/wp-content/uploads/sites/3/2023/07/testimonial-03-100x100.jpg 100w"
                                                              sizes="(max-width: 300px) 100vw, 300px"
                                                            />
                                                          </div>
                                                        </div>{" "}
                                                        <div className="pbminfotech-box-author">
                                                          <h3 className="pbminfotech-box-title">
                                                            Emma Greed
                                                          </h3>
                                                          <div className="pbminfotech-testimonial-detail">
                                                            Legal Advisor
                                                          </div>{" "}
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </article>
                                                <article className="pbmit-ele pbmit-ele-testimonial pbmit-testimonial-style-2 col-md-12  pbmit-even pbmit-col-even">
                                                  <div className="pbminfotech-post-item">
                                                    <div className="pbminfotech-box-content">
                                                      <blockquote className="pbminfotech-testimonial-text">
                                                        <p>
                                                          I express my deep
                                                          gratitude to the team
                                                          for the impeccable and
                                                          productive service to
                                                          the company activities
                                                          based on the results
                                                          of seven years of
                                                          joint work I recommend
                                                          the services
                                                        </p>
                                                      </blockquote>
                                                      <div className="pbminfotech-box-star-ratings">
                                                        <i className="pbmit-base-icon-star pbmit-active" />
                                                        <i className="pbmit-base-icon-star pbmit-active" />
                                                        <i className="pbmit-base-icon-star pbmit-active" />
                                                        <i className="pbmit-base-icon-star pbmit-active" />
                                                        <i className="pbmit-base-icon-star pbmit-active" />
                                                      </div>{" "}
                                                      <div className="pbminfotech-box-content-inner">
                                                        <div className="pbmit-featured-img-wrapper">
                                                          <div className="pbmit-featured-wrapper">
                                                            <img
                                                              loading="lazy"
                                                              decoding="async"
                                                              width={300}
                                                              height={300}
                                                              src="https://cleanfin-demo.pbminfotech.com/demo2/wp-content/uploads/sites/3/2023/07/testimonial-04.jpg"
                                                              className="attachment-pbmit-img-300x300 size-pbmit-img-300x300 wp-post-image"
                                                              alt=""
                                                              srcSet="https://cleanfin-demo.pbminfotech.com/demo2/wp-content/uploads/sites/3/2023/07/testimonial-04.jpg 300w, https://cleanfin-demo.pbminfotech.com/demo2/wp-content/uploads/sites/3/2023/07/testimonial-04-150x150.jpg 150w, https://cleanfin-demo.pbminfotech.com/demo2/wp-content/uploads/sites/3/2023/07/testimonial-04-100x100.jpg 100w"
                                                              sizes="(max-width: 300px) 100vw, 300px"
                                                            />
                                                          </div>
                                                        </div>{" "}
                                                        <div className="pbminfotech-box-author">
                                                          <h3 className="pbminfotech-box-title">
                                                            Daniel Craig
                                                          </h3>
                                                          <div className="pbminfotech-testimonial-detail">
                                                            Tax Manager
                                                          </div>{" "}
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </article>
                                                <article className="pbmit-ele pbmit-ele-testimonial pbmit-testimonial-style-2 col-md-12  pbmit-odd pbmit-col-odd">
                                                  <div className="pbminfotech-post-item">
                                                    <div className="pbminfotech-box-content">
                                                      <blockquote className="pbminfotech-testimonial-text">
                                                        <p>
                                                          I express my deep
                                                          gratitude to the team
                                                          for the impeccable and
                                                          productive service to
                                                          the company activities
                                                          based on the results
                                                          of seven years of
                                                          joint work I recommend
                                                          the services
                                                        </p>
                                                      </blockquote>
                                                      <div className="pbminfotech-box-star-ratings">
                                                        <i className="pbmit-base-icon-star pbmit-active" />
                                                        <i className="pbmit-base-icon-star pbmit-active" />
                                                        <i className="pbmit-base-icon-star pbmit-active" />
                                                        <i className="pbmit-base-icon-star pbmit-active" />
                                                        <i className="pbmit-base-icon-star" />
                                                      </div>{" "}
                                                      <div className="pbminfotech-box-content-inner">
                                                        <div className="pbmit-featured-img-wrapper">
                                                          <div className="pbmit-featured-wrapper">
                                                            <img
                                                              loading="lazy"
                                                              decoding="async"
                                                              width={500}
                                                              height={500}
                                                              src="https://cleanfin-demo.pbminfotech.com/demo2/wp-content/uploads/sites/3/2023/07/testimonial-05.jpg"
                                                              className="attachment-pbmit-img-300x300 size-pbmit-img-300x300 wp-post-image"
                                                              alt=""
                                                              srcSet="https://cleanfin-demo.pbminfotech.com/demo2/wp-content/uploads/sites/3/2023/07/testimonial-05.jpg 500w, https://cleanfin-demo.pbminfotech.com/demo2/wp-content/uploads/sites/3/2023/07/testimonial-05-300x300.jpg 300w, https://cleanfin-demo.pbminfotech.com/demo2/wp-content/uploads/sites/3/2023/07/testimonial-05-150x150.jpg 150w, https://cleanfin-demo.pbminfotech.com/demo2/wp-content/uploads/sites/3/2023/07/testimonial-05-100x100.jpg 100w"
                                                              sizes="(max-width: 500px) 100vw, 500px"
                                                            />
                                                          </div>
                                                        </div>{" "}
                                                        <div className="pbminfotech-box-author">
                                                          <h3 className="pbminfotech-box-title">
                                                            Amelia Dyer
                                                          </h3>
                                                          <div className="pbminfotech-testimonial-detail">
                                                            Stockbroker
                                                          </div>{" "}
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </article>
                                                <article className="pbmit-ele pbmit-ele-testimonial pbmit-testimonial-style-2 col-md-12  pbmit-even pbmit-col-even">
                                                  <div className="pbminfotech-post-item">
                                                    <div className="pbminfotech-box-content">
                                                      <blockquote className="pbminfotech-testimonial-text">
                                                        <p>
                                                          I express my deep
                                                          gratitude to the team
                                                          for the impeccable and
                                                          productive service to
                                                          the company activities
                                                          based on the results
                                                          of seven years of
                                                          joint work I recommend
                                                          the services
                                                        </p>
                                                      </blockquote>
                                                      <div className="pbminfotech-box-star-ratings">
                                                        <i className="pbmit-base-icon-star pbmit-active" />
                                                        <i className="pbmit-base-icon-star pbmit-active" />
                                                        <i className="pbmit-base-icon-star pbmit-active" />
                                                        <i className="pbmit-base-icon-star pbmit-active" />
                                                        <i className="pbmit-base-icon-star pbmit-active" />
                                                      </div>{" "}
                                                      <div className="pbminfotech-box-content-inner">
                                                        <div className="pbmit-featured-img-wrapper">
                                                          <div className="pbmit-featured-wrapper">
                                                            <img
                                                              loading="lazy"
                                                              decoding="async"
                                                              width={300}
                                                              height={300}
                                                              src="https://cleanfin-demo.pbminfotech.com/demo2/wp-content/uploads/sites/3/2023/07/testimonial-06.jpg"
                                                              className="attachment-pbmit-img-300x300 size-pbmit-img-300x300 wp-post-image"
                                                              alt=""
                                                              srcSet="https://cleanfin-demo.pbminfotech.com/demo2/wp-content/uploads/sites/3/2023/07/testimonial-06.jpg 300w, https://cleanfin-demo.pbminfotech.com/demo2/wp-content/uploads/sites/3/2023/07/testimonial-06-150x150.jpg 150w, https://cleanfin-demo.pbminfotech.com/demo2/wp-content/uploads/sites/3/2023/07/testimonial-06-100x100.jpg 100w"
                                                              sizes="(max-width: 300px) 100vw, 300px"
                                                            />
                                                          </div>
                                                        </div>{" "}
                                                        <div className="pbminfotech-box-author">
                                                          <h3 className="pbminfotech-box-title">
                                                            Henry Cavil
                                                          </h3>
                                                          <div className="pbminfotech-testimonial-detail">
                                                            Cost Marketing
                                                          </div>{" "}
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </article>{" "}
                                              </div>{" "}
                                              {/* .pbmit-element-posts-wrapper */}
                                            </div>{" "}
                                            {/* .pbmit-testimonialbox-right */}
                                          </div>{" "}
                                          {/* .row */}
                                        </div>
                                        {/* .pbmit-element-inner */}
                                      </div>
                                      {/* .pbminfotech-element */}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </section>
                          <section
                            className="elementor-section elementor-top-section elementor-element elementor-element-d3171ce pbmit-col-stretched-right pbmit-right-col-stretched-content-yes pbmit-cursor-color-blackish-color pbmit-bg-color-over-image elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                            data-id="d3171ce"
                            data-element_type="section"
                          >
                            <div className="elementor-container elementor-column-gap-default">
                              <div
                                className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-657b524 pbmit-text-color-white pbmit-bg-color-over-image"
                                data-id="657b524"
                                data-element_type="column"
                                data-settings='{"background_background":"classic"}'
                              >
                                <video
                                  className="video-z5YSpCnx"
                                  autoPlay
                                  loop
                                  playsInline
                                  disableRemotePlayback
                                >
                                  <source
                                    src="https://static.tradingview.com/static/bundles/chart-big.hvc1.6af4110d38611a03c3a4.mp4"
                                    type="video/mp4;codecs=hvc1.1.0.L150.b0"
                                  />
                                  <source
                                    src="https://static.tradingview.com/static/bundles/chart-big.fb88521d9cf80be23da7.webm"
                                    type="video/webm"
                                  />
                                  <source
                                    src="https://static.tradingview.com/static/bundles/chart-big.avc1.e7da14709759f81c9e4b.mp4"
                                    type="video/webm;codecs=avc1"
                                  />
                                  Your browser does not support the video tag.
                                </video>
                              </div>
                            </div>
                          </section>
                          <div style={{marginTop:'-30px',marginBottom:'-50px'}}>
                          <section
                            className="elementor-section elementor-top-section elementor-element elementor-element-275bb84 pbmit-col-stretched-right pbmit-right-col-stretched-content-yes pbmit-cursor-color-blackish-color pbmit-bg-color-over-image elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                            data-id="275bb84"
                            data-element_type="section"
                          >
                            <div className="elementor-container elementor-column-gap-no">
                              <div
                                className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-d15804d pbmit-bg-color-over-image"
                                data-id="d15804d"
                                data-element_type="column"
                              >
                                <div className="elementor-widget-wrap elementor-element-populated">
                                  <div
                                    className="elementor-element elementor-element-87feb4e pbmit-align-left elementor-widget elementor-widget-pbmit_client_element"
                                    data-id="87feb4e"
                                    data-element_type="widget"
                                    data-widget_type="pbmit_client_element.default"
                                  >
                                    <div className="elementor-widget-container">
                                      <div
                                        className="pbminfotech-element
		pbminfotech-element-client		pbmit-element-client-style-1		pbmit-element-viewtype-carousel		pbmit-element-column-six		pbmit-element-sticky-carousel-false		pbmit-element-caroursel-dot-false		pbmit-infinite-scroll-no		pbmit-infinite-scroll-button-no		pbminfotech-gap-default		"
                                        data-cpt="client"
                                        data-totalpagination={1}
                                        data-style={1}
                                        data-show={8}
                                        data-columns={6}
                                        data-loop="true"
                                        data-autoplay="false"
                                        data-center="false"
                                        data-nav="false"
                                        data-dots="false"
                                        data-reverse="false"
                                        data-autoplayspeed={4000}
                                        data-margin="default"
                                      >
                                        <div className="pbmit-element-inner">
                                          <div className="pbmit-ele-header-area">
                                            <div className="pbmit-heading-subheading  animation-style4" />
                                          </div>
                                          <div className="pbmit-infinite-scroll-data">
                                            {"{"}
                                            "cpt":"client","style":"1","columns":"6","show":8,"order":"DESC","orderby":"DESC"
                                            {"}"}
                                          </div>{" "}
                                          <div className="p-3 pbmit-element-posts-wrapper swiper-container row multi-columns-row">
                                            <article className="pbmit-ele pbmit-ele-client pbmit-client-style-1 col-md-2   ">
                                              <div className="pbmit-client-content" style={{boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px'}}>
                                                <div className="pbmit-client-wrapper pbmit-client-with-hover-img">
                                                  <h4 className="pbmit-hide">
                                                    Client 06
                                                  </h4>
                                                  <div className="pbmit-client-hover-img">
                                                    <img
                                                      decoding="async"
                                                      src="https://cleanfin-demo.pbminfotech.com/demo2/wp-content/uploads/sites/3/2023/08/client-global-06.png"
                                                      alt=""
                                                    />
                                                  </div>{" "}
                                                  <div className="pbmit-featured-img-wrapper">
                                                    <div className="pbmit-featured-wrapper">
                                                      <img
                                                        loading="lazy"
                                                        decoding="async"
                                                        width={130}
                                                        height={35}
                                                        style={{backgroundColor:'white'}}
                                                        src="https://cleanfin-demo.pbminfotech.com/demo2/wp-content/uploads/sites/3/2023/08/client-dark-06.png"
                                                        className="attachment-pbmit-img-770x9999 size-pbmit-img-770x9999 wp-post-image"
                                                        alt=""
                                                      />
                                                    </div>
                                                  </div>{" "}
                                                </div>
                                              </div>
                                            </article>
                                            <article className="pbmit-ele pbmit-ele-client pbmit-client-style-1 col-md-2   " >
                                              <div className="pbmit-client-content" style={{boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px'}}>
                                                <div className="pbmit-client-wrapper pbmit-client-with-hover-img">
                                                  <h4 className="pbmit-hide">
                                                    Client 05
                                                  </h4>
                                                  <div className="pbmit-client-hover-img">
                                                    <img
                                                      decoding="async"
                                                      src="https://cleanfin-demo.pbminfotech.com/demo2/wp-content/uploads/sites/3/2023/08/client-global-05.png"
                                                      alt=""
                                                    />
                                                  </div>{" "}
                                                  <div className="pbmit-featured-img-wrapper">
                                                    <div className="pbmit-featured-wrapper">
                                                      <img
                                                        loading="lazy"
                                                        decoding="async"
                                                        width={130}
                                                        height={35}
                                                        src="https://cleanfin-demo.pbminfotech.com/demo2/wp-content/uploads/sites/3/2023/08/client-dark-05.png"
                                                        className="attachment-pbmit-img-770x9999 size-pbmit-img-770x9999 wp-post-image"
                                                        alt=""
                                                      />
                                                    </div>
                                                  </div>{" "}
                                                </div>
                                              </div>
                                            </article>
                                            <article className="pbmit-ele pbmit-ele-client pbmit-client-style-1 col-md-2   ">
                                              <div className="pbmit-client-content" style={{boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px'}}>
                                                <div className="pbmit-client-wrapper pbmit-client-with-hover-img">
                                                  <h4 className="pbmit-hide">
                                                    Client 04
                                                  </h4>
                                                  <div className="pbmit-client-hover-img">
                                                    <img
                                                      decoding="async"
                                                      src="https://cleanfin-demo.pbminfotech.com/demo2/wp-content/uploads/sites/3/2023/08/client-global-04.png"
                                                      alt=""
                                                    />
                                                  </div>{" "}
                                                  <div className="pbmit-featured-img-wrapper">
                                                    <div className="pbmit-featured-wrapper">
                                                      <img
                                                        loading="lazy"
                                                        decoding="async"
                                                        width={130}
                                                        height={35}
                                                        src="https://cleanfin-demo.pbminfotech.com/demo2/wp-content/uploads/sites/3/2023/08/client-dark-04.png"
                                                        className="attachment-pbmit-img-770x9999 size-pbmit-img-770x9999 wp-post-image"
                                                        alt=""
                                                      />
                                                    </div>
                                                  </div>{" "}
                                                </div>
                                              </div>
                                            </article>
                                            <article className="pbmit-ele pbmit-ele-client pbmit-client-style-1 col-md-2   ">
                                              <div className="pbmit-client-content" style={{boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px'}}>
                                                <div className="pbmit-client-wrapper pbmit-client-with-hover-img">
                                                  <h4 className="pbmit-hide">
                                                    Client 03
                                                  </h4>
                                                  <div className="pbmit-client-hover-img">
                                                    <img
                                                      decoding="async"
                                                      src="https://cleanfin-demo.pbminfotech.com/demo2/wp-content/uploads/sites/3/2023/08/client-global-03.png"
                                                      alt=""
                                                    />
                                                  </div>{" "}
                                                  <div className="pbmit-featured-img-wrapper">
                                                    <div className="pbmit-featured-wrapper">
                                                      <img
                                                        loading="lazy"
                                                        decoding="async"
                                                        width={130}
                                                        height={35}
                                                        src="https://cleanfin-demo.pbminfotech.com/demo2/wp-content/uploads/sites/3/2023/08/client-dark-03.png"
                                                        className="attachment-pbmit-img-770x9999 size-pbmit-img-770x9999 wp-post-image"
                                                        alt=""
                                                      />
                                                    </div>
                                                  </div>{" "}
                                                </div>
                                              </div>
                                            </article>
                                            <article className="pbmit-ele pbmit-ele-client pbmit-client-style-1 col-md-2   ">
                                              <div className="pbmit-client-content" style={{boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px'}}>
                                                <div className="pbmit-client-wrapper pbmit-client-with-hover-img">
                                                  <h4 className="pbmit-hide">
                                                    Client 02
                                                  </h4>
                                                  <div className="pbmit-client-hover-img">
                                                    <img
                                                      decoding="async"
                                                      src="https://cleanfin-demo.pbminfotech.com/demo2/wp-content/uploads/sites/3/2023/08/client-global-02.png"
                                                      alt=""
                                                    />
                                                  </div>{" "}
                                                  <div className="pbmit-featured-img-wrapper">
                                                    <div className="pbmit-featured-wrapper">
                                                      <img
                                                        loading="lazy"
                                                        decoding="async"
                                                        width={130}
                                                        height={35}
                                                        src="https://cleanfin-demo.pbminfotech.com/demo2/wp-content/uploads/sites/3/2023/08/client-dark-02.png"
                                                        className="attachment-pbmit-img-770x9999 size-pbmit-img-770x9999 wp-post-image"
                                                        alt=""
                                                      />
                                                    </div>
                                                  </div>{" "}
                                                </div>
                                              </div>
                                            </article>
                                            <article className="pbmit-ele pbmit-ele-client pbmit-client-style-1 col-md-2   ">
                                              <div className="pbmit-client-content" style={{boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px'}}>
                                                <div className="pbmit-client-wrapper pbmit-client-with-hover-img">
                                                  <h4 className="pbmit-hide">
                                                    Client 01
                                                  </h4>
                                                  <div className="pbmit-client-hover-img">
                                                    <img
                                                      decoding="async"
                                                      src="https://cleanfin-demo.pbminfotech.com/demo2/wp-content/uploads/sites/3/2023/08/client-global-01.png"
                                                      alt=""
                                                    />
                                                  </div>{" "}
                                                  <div className="pbmit-featured-img-wrapper">
                                                    <div className="pbmit-featured-wrapper">
                                                      <img
                                                        loading="lazy"
                                                        decoding="async"
                                                        width={130}
                                                        height={35}
                                                        src="https://cleanfin-demo.pbminfotech.com/demo2/wp-content/uploads/sites/3/2023/08/client-dark-01.png"
                                                        className="attachment-pbmit-img-770x9999 size-pbmit-img-770x9999 wp-post-image"
                                                        alt=""
                                                      />
                                                    </div>
                                                  </div>{" "}
                                                </div>
                                              </div>
                                            </article>{" "}
                                          </div>{" "}
                                          {/* .pbmit-element-posts-wrapper & marquee-container */}
                                        </div>
                                        {/* .pbmit-element-inner */}
                                      </div>
                                      {/* .pbminfotech-element */}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </section>
                          </div>
                          <section
                            className="elementor-section px-3 elementor-top-section elementor-element elementor-element-7f56520 pbmit-col-stretched-none pbmit-cursor-color-blackish-color pbmit-bg-color-over-image elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                            data-id="7f56520"
                            data-element_type="section"
                          >
                            <div className="elementor-container elementor-column-gap-no">
                              <div
                                className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-c284a83 pbmit-bg-color-over-image"
                                data-id="c284a83"
                                data-element_type="column"
                              >
                                <div className="elementor-widget-wrap elementor-element-populated">
                                  <section
                                    className="elementor-section elementor-inner-section elementor-element elementor-element-8f266e6 elementor-section-content-middle pbmit-col-stretched-none pbmit-cursor-color-blackish-color pbmit-bg-color-over-image elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                                    data-id="8f266e6"
                                    data-element_type="section"
                                  >
                                    <div className="elementor-container elementor-column-gap-no">
                                      <div
                                        className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-4856300 pbmit-bg-color-over-image"
                                        data-id={4856300}
                                        data-element_type="column"
                                      >
                                        <div className="elementor-widget-wrap elementor-element-populated">
                                          <div
                                            className="elementor-element elementor-element-b09190e pbmit-align-left elementor-widget elementor-widget-pbmit_heading"
                                            data-id="b09190e"
                                            data-element_type="widget"
                                            data-widget_type="pbmit_heading.default"
                                          >
                                            <div className="elementor-widget-container">
                                              <div className="pbmit-heading-subheading pbmit-reverse-heading-yes animation-style2">
                                                <h4 className="pbmit-element-subtitle">
                                                  <span></span>
                                                  Latest Blog
                                                </h4>
                                                <h2 className="pbmit-element-title">
                                                  Latest news coming
                                                </h2>
                                              </div>{" "}
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div
                                        className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-1a0039c pbmit-bg-color-over-image"
                                        data-id="1a0039c"
                                        data-element_type="column"
                                      >
                                        <div className="elementor-widget-wrap elementor-element-populated">
                                          <div
                                            className="elementor-element elementor-element-a0566a1 elementor-widget elementor-widget-text-editor"
                                            data-id="a0566a1"
                                            data-element_type="widget"
                                            data-widget_type="text-editor.default"
                                          >
                                            <div className="elementor-widget-container">
                                              “The most important adage and the
                                              only adage is, the customer comes
                                              first, whatever the business, the
                                              customer comes first.”
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </section>
                                  <div
                                    className="elementor-element elementor-element-9f2c044 pbmit-align-left elementor-widget elementor-widget-pbmit_blog_element"
                                    data-id="9f2c044"
                                    data-element_type="widget"
                                    data-widget_type="pbmit_blog_element.default"
                                  >
                                    <div className="elementor-widget-container">
                                      <div
                                        className="pbminfotech-element
		pbminfotech-element-blog		pbmit-element-blog-style-1		pbmit-element-viewtype-carousel		pbmit-element-column-three		pbmit-element-sticky-carousel-false		pbmit-element-caroursel-dot-false		pbmit-infinite-scroll-no		pbmit-infinite-scroll-button-no		pbminfotech-gap-default		"
                                        data-cpt="blog"
                                        data-totalpagination={1}
                                        data-style={1}
                                        data-show={-1}
                                        data-columns={3}
                                        data-loop="false"
                                        data-autoplay="false"
                                        data-center="false"
                                        data-nav="false"
                                        data-dots="false"
                                        data-reverse="false"
                                        data-autoplayspeed={4000}
                                        data-margin="default"
                                      >
                                        <div className="pbmit-element-inner">
                                          <div className="pbmit-ele-header-area">
                                            <div className="pbmit-heading-subheading " />{" "}
                                          </div>
                                          <div className="pbmit-infinite-scroll-data">
                                            {"{"}
                                            "cpt":"blog","style":"1","columns":"3","show":-1,"order":"DESC","orderby":"none"
                                            {"}"}
                                          </div>
                                          <div className="pbmit-element-posts-wrapper row multi-columns-row swiper-container">
                                            <article className="pbmit-ele pbmit-ele-blog pbmit-blog-style-1 col-md-4 business pbmit-term-17 pbmit-odd pbmit-col-odd">
                                              <div className="post-item">
                                                <div className="pbmit-featured-container">
                                                  <div className="pbmit-featured-img-wrapper">
                                                    <div className="pbmit-featured-wrapper">
                                                      <img
                                                        loading="lazy"
                                                        decoding="async"
                                                                                                               style={{width:'100%',height:'300px'}}

                                                        src="https://demo.getonlinetrader.pro/storage/app/public/photos/9TR54rBf8hTJBkpfMCaUFcVtW8NE892AoWaVqaII.jpg"
                                                        className="attachment-pbmit-img-950x700 size-pbmit-img-950x700 wp-post-image"
                                                        alt=""
                                                      />
                                                    </div>
                                                  </div>{" "}
                                                </div>
                                                <div className="pbminfotech-box-content">
                                                  <h3 className="pbmit-post-title">
                                                    <a href="#/demo2/2023/07/14/making-innovative-strategies-for-outstanding/">
                                                      Making innovative
                                                      strategies for
                                                      outstanding.
                                                    </a>
                                                  </h3>
                                                  <div className="pbmit-svg-btn">
                                                    <a
                                                      className="btn-arrow"
                                                      href="#/demo2/2023/07/14/making-innovative-strategies-for-outstanding/"
                                                    >
                                                      <div className="d-flex align-items-center justify-content-center">
                                                        Read More{" "}
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
                                                          <line
                                                            x1={1}
                                                            y1={18}
                                                            x2="17.8"
                                                            y2="1.2"
                                                          />
                                                          <line
                                                            x1="1.2"
                                                            y1={1}
                                                            x2={18}
                                                            y2={1}
                                                          />
                                                          <line
                                                            x1={18}
                                                            y1="17.8"
                                                            x2={18}
                                                            y2={1}
                                                          />
                                                        </svg>
                                                      </div>
                                                    </a>
                                                  </div>
                                                </div>
                                                <a
                                                  href="https://img.freepik.com/free-vector/forex-trading-background_52683-41604.jpg?w=996&t=st=1702553016~exp=1702553616~hmac=52ee6a83e1d8ea937850f812b9aaeb782fa67a0e1b49b76eceb69e210bd56dea"
                                                  className="pbmit-link"
                                                />
                                              </div>
                                            </article>
                                            <article className="pbmit-ele pbmit-ele-blog pbmit-blog-style-1 col-md-4 economy pbmit-term-18 pbmit-even pbmit-col-odd">
                                              <div className="post-item">
                                                <div className="pbmit-featured-container">
                                                  <div className="pbmit-featured-img-wrapper">
                                                    <div className="pbmit-featured-wrapper">
                                                      <img
                                                        loading="lazy"
                                                        decoding="async"
                                                                                                               style={{width:'100%',height:'300px'}}

                                                        src="https://img.freepik.com/free-vector/forex-trading-background_52683-41604.jpg?w=996&t=st=1702553016~exp=1702553616~hmac=52ee6a83e1d8ea937850f812b9aaeb782fa67a0e1b49b76eceb69e210bd56dea"
                                                        className="attachment-pbmit-img-950x700 size-pbmit-img-950x700 wp-post-image"
                                                        alt=""
                                                      />
                                                    </div>
                                                  </div>{" "}
                                                </div>
                                                <div className="pbminfotech-box-content">
                                                  <h3 className="pbmit-post-title">
                                                    <a href="https://img.freepik.com/free-vector/forex-trading-stock-market-candle-graph-background_1017-38065.jpg?w=996&t=st=1702552913~exp=1702553513~hmac=6bc13743bb13abcbe1e9246b70551e0d53a9218532ab19eb0f54ca1879341c20">
                                                      What Are The Other Roles
                                                      Of Financial Advisor?
                                                    </a>
                                                  </h3>
                                                  <div className="pbmit-svg-btn">
                                                    <a
                                                      className="btn-arrow"
                                                      href="https://img.freepik.com/free-vector/forex-trading-stock-market-candle-graph-background_1017-38065.jpg?w=996&t=st=1702552913~exp=1702553513~hmac=6bc13743bb13abcbe1e9246b70551e0d53a9218532ab19eb0f54ca1879341c20"
                                                    >
                                                      <div className="d-flex align-items-center justify-content-center">
                                                        Read More{" "}
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
                                                          <line
                                                            x1={1}
                                                            y1={18}
                                                            x2="17.8"
                                                            y2="1.2"
                                                          />
                                                          <line
                                                            x1="1.2"
                                                            y1={1}
                                                            x2={18}
                                                            y2={1}
                                                          />
                                                          <line
                                                            x1={18}
                                                            y1="17.8"
                                                            x2={18}
                                                            y2={1}
                                                          />
                                                        </svg>
                                                      </div>
                                                    </a>
                                                  </div>
                                                </div>
                                                <a
                                                  href="#/demo2/2023/07/14/what-are-the-other-roles-of-financial-advisor/"
                                                  className="pbmit-link"
                                                />
                                              </div>
                                            </article>
                                            <article className="pbmit-ele pbmit-ele-blog pbmit-blog-style-1 col-md-4 finance pbmit-term-19 pbmit-odd pbmit-col-odd">
                                              <div className="post-item">
                                                <div className="pbmit-featured-container">
                                                  <div className="pbmit-featured-img-wrapper">
                                                    <div className="pbmit-featured-wrapper">
                                                      <img
                                                        loading="lazy"
                                                        decoding="async"
                                                                                                               style={{width:'100%',height:'300px'}}

                                                        src="https://img.freepik.com/free-vector/forex-trading-stock-market-background_1017-31713.jpg?w=996&t=st=1702552957~exp=1702553557~hmac=7e76e695342e4f4b34feab2d146a75d0a7fbe37708f01574822dc5d98aad66f7"
                                                        className="attachment-pbmit-img-950x700 size-pbmit-img-950x700 wp-post-image"
                                                        alt=""
                                                      />
                                                    </div>
                                                  </div>{" "}
                                                </div>
                                                <div className="pbminfotech-box-content">
                                                  <h3 className="pbmit-post-title">
                                                    <a href="https://img.freepik.com/free-vector/forex-trading-background_52683-41604.jpg?w=996&t=st=1702553016~exp=1702553616~hmac=52ee6a83e1d8ea937850f812b9aaeb782fa67a0e1b49b76eceb69e210bd56dea">
                                                      How to Use the Investment
                                                      Growth Calculator
                                                    </a>
                                                  </h3>
                                                  <div className="pbmit-svg-btn">
                                                    <a
                                                      className="btn-arrow"
                                                      href="https://img.freepik.com/free-vector/forex-trading-background_52683-41604.jpg?w=996&t=st=1702553016~exp=1702553616~hmac=52ee6a83e1d8ea937850f812b9aaeb782fa67a0e1b49b76eceb69e210bd56dea"
                                                    >
                                                      <div className="d-flex align-items-center justify-content-center">
                                                        Read More{" "}
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
                                                          <line
                                                            x1={1}
                                                            y1={18}
                                                            x2="17.8"
                                                            y2="1.2"
                                                          />
                                                          <line
                                                            x1="1.2"
                                                            y1={1}
                                                            x2={18}
                                                            y2={1}
                                                          />
                                                          <line
                                                            x1={18}
                                                            y1="17.8"
                                                            x2={18}
                                                            y2={1}
                                                          />
                                                        </svg>
                                                      </div>
                                                    </a>
                                                  </div>
                                                </div>
                                                <a
                                                  href="#/demo2/2023/07/14/how-to-use-the-investment-growth-calculator/"
                                                  className="pbmit-link"
                                                />
                                              </div>
                                            </article>
                                          </div>{" "}
                                          {/* .pbmit-element-posts-wrapper */}
                                        </div>
                                        {/* .pbmit-element-inner */}
                                      </div>
                                      {/* .pbminfotech-element */}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </section>
                        </div>
                        <h3 className="pbmit-hide">Homepage 02</h3>
                      </div>
                      {/* .entry-content */}
                    </div>
                    {/* #post-## */}
                  </main>
                  {/* #main */}
                </div>
                {/* #primary */}
              </div>
              {/* #content */}
            </div>
            {/* .site-content-wrap */}

            {/* #colophon */}
          </div>
          {/* .site-content-contain */}
        </div>
        {/* #page */}
      </>
    </>
  );
};

export default NewHome;
