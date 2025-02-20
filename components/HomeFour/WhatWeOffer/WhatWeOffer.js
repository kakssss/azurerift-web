import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import offerImg from '../../../public/images/offer1.png';

const HealthCare = () => {
    return (
        <>
            <div className="row align-items-center">
                <div className="col-lg-6">
                    <div className="industries-img left-img">
                        <Image src={offerImg} alt="Image" width={620} height={445} />
                    </div>
                </div>

                <div className="col-lg-6">
                    <div className="industries-content">
                        <h3>Health Care Law</h3>
                        <p>
                            We serve hospitals, clinics, pharmaceutical companies, and healthcare professionals, providing legal counsel on compliance, regulatory issues, and patient care matters.
                        </p>
                        <p>
                            Our team ensures that healthcare providers stay updated with the latest laws and regulations, offering solutions that align with ethical practices and business goals.
                        </p>

                        <div className="row">
                            <div className="col-lg-6 col-sm-6">
                                <ul className="industries-item">
                                    <li><i className="flaticon-checked"></i>Regulatory Compliance</li>
                                    <li><i className="flaticon-checked"></i>Patient Rights</li>
                                    <li><i className="flaticon-checked"></i>Ethical Practices</li>
                                </ul>
                            </div>

                            <div className="col-lg-6 col-sm-6">
                                <ul className="industries-item">
                                    <li><i className="flaticon-checked"></i>Medication Regulation</li>
                                    <li><i className="flaticon-checked"></i>Technology Compliance</li>
                                    <li><i className="flaticon-checked"></i>Data Privacy</li>
                                </ul>
                            </div>
                        </div>

                        <div className="text-center">
                            <Link href="/services" className="default-btn">
                                Discover More
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

const HeavyIndustry = () => {
    return (
        <>
            <div className="row align-items-center">
                <div className="col-lg-6">
                    <div className="industries-img left-img">
                        <Image src={offerImg} alt="Image" width={370} height={390} />
                    </div>
                </div>

                <div className="col-lg-6">
                    <div className="industries-content">
                        <h3>Heavy Industry Law</h3>
                        <p>
                            Our firm offers comprehensive legal services for businesses in heavy industry sectors such as construction, manufacturing, energy, and mining.
                        </p>
                        <p>
                            We specialize in regulatory compliance, dispute resolution, contract drafting, and environmental law, supporting sustainable growth and success in these sectors.
                        </p>

                        <div className="row">
                            <div className="col-lg-6 col-sm-6">
                                <ul className="industries-item">
                                    <li><i className="flaticon-checked"></i>Regulatory Compliance</li>
                                    <li><i className="flaticon-checked"></i>Contract Drafting</li>
                                    <li><i className="flaticon-checked"></i>Labor Issues</li>
                                </ul>
                            </div>

                            <div className="col-lg-6 col-sm-6">
                                <ul className="industries-item">
                                    <li><i className="flaticon-checked"></i>Environmental Law</li>
                                    <li><i className="flaticon-checked"></i>Dispute Resolution</li>
                                    <li><i className="flaticon-checked"></i>Government Regulation</li>
                                </ul>
                            </div>
                        </div>

                        <div className="text-center">
                            <Link href="/services" className="default-btn">
                                Discover More
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

const Manufacturing = () => {
    return (
        <>
            <div className="row align-items-center">
                <div className="col-lg-6">
                    <div className="industries-content">
                        <h3>Manufacturing Law</h3>
                        <p>
                            We provide legal support to Saudi-based manufacturing companies, assisting them in navigating the regulatory landscape.
                        </p>
                        <p>
                            Our expertise covers contract negotiations, supply chain management, intellectual property rights, and dispute resolution, ensuring a compliant and thriving manufacturing sector.
                        </p>

                        <div className="row">
                            <div className="col-lg-6 col-sm-6">
                                <ul className="industries-item">
                                    <li><i className="flaticon-checked"></i>Contract Negotiation</li>
                                    <li><i className="flaticon-checked"></i>Intellectual Property</li>
                                    <li><i className="flaticon-checked"></i>International Trade</li>
                                </ul>
                            </div>

                            <div className="col-lg-6 col-sm-6">
                                <ul className="industries-item">
                                    <li><i className="flaticon-checked"></i>Supply Chain</li>
                                    <li><i className="flaticon-checked"></i>Product Liability</li>
                                    <li><i className="flaticon-checked"></i>Custom Regulations</li>
                                </ul>
                            </div>
                        </div>

                        <div className="text-center">
                            <Link href="/services" className="default-btn">
                                Discover More
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="col-lg-6">
                    <div className="industries-img right-img">
                        <Image src={offerImg} alt="Image" width={526} height={445} />
                    </div>
                </div>
            </div>
        </>
    );
};

const Transportation = () => {
    return (
        <>
            <div className="row align-items-center">
                <div className="col-lg-6">
                    <div className="industries-content">
                        <h3>Transportation Law</h3>
                        <p>
                            Our legal team provides guidance to businesses in the transportation sector of Saudi Arabia, focusing on aviation, maritime, and land transport.
                        </p>
                        <p>
                            We handle regulatory compliance, liability issues, contract disputes, and logistics agreements, ensuring smooth and efficient operations across the Kingdom.
                        </p>

                        <div className="row">
                            <div className="col-lg-6 col-sm-6">
                                <ul className="industries-item">
                                    <li><i className="flaticon-checked"></i>Regulatory Compliance</li>
                                    <li><i className="flaticon-checked"></i>Contract Disputes</li>
                                    <li><i className="flaticon-checked"></i>Aviation Law</li>
                                </ul>
                            </div>

                            <div className="col-lg-6 col-sm-6">
                                <ul className="industries-item">
                                    <li><i className="flaticon-checked"></i>Maritime Law</li>
                                    <li><i className="flaticon-checked"></i>Logistics Agreements</li>
                                    <li><i className="flaticon-checked"></i>Land Transport Regulation</li>
                                </ul>
                            </div>
                        </div>

                        <div className="text-center">
                            <Link href="/services" className="default-btn">
                                Discover More
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="col-lg-6">
                    <div className="industries-img right-img">
                        <Image src={offerImg} alt="Image" width={644} height={445} />
                    </div>
                </div>
            </div>
        </>
    );
};

const WhatWeOffer = ({ title }) => {
  const openTabSection = (evt, tabNmae) => {
    let i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabs_item");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByTagName("li");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace("current", "");
    }

    document.getElementById(tabNmae).style.display = "block";
    evt.currentTarget.className += "current";
  };

  return (
    <>
      <div className="industries-area industries-area-four pb-100">
        <div className="container">
          <div className="section-title home-four-section-title">
            <span >Industries We Transform</span>
            <h2>Industries We Transform</h2>
            <p>
              We specialize in delivering impactful solutions across various sectors, leveraging advanced technology to drive success and growth.
            </p>
          </div>

          <div className="tab industries-list-tab">
            <div className="row align-items-center">
              <div className="col-lg-3">
                {/* Tabs navs */}
                <ul className="tabs">
                  <li
                    className="current"
                    onClick={(e) => openTabSection(e, "tab1")}
                  >
                    <span>
                      <i className="flaticon-machine-learning"></i>
                      <h3>Heavy Industry</h3>
                      <p>Innovative solutions for large-scale industries</p>
                    </span>
                  </li>

                  <li onClick={(e) => openTabSection(e, "tab2")}>
                    <span>
                      <i className="flaticon-artificial-intelligence"></i>
                      <h3>Transportation</h3>
                      <p>Revolutionizing logistics and mobility</p>
                    </span>
                  </li>

                  <li onClick={(e) => openTabSection(e, "tab3")}>
                    <span>
                      <i className="flaticon-health"></i>
                      <h3>Health Care</h3>
                      <p>Transforming patient care and medical services</p>
                    </span>
                  </li>

                  <li onClick={(e) => openTabSection(e, "tab4")}>
                    <span>
                      <i className="flaticon-automation"></i>
                      <h3>Manufacturing</h3>
                      <p>Enhancing productivity and efficiency</p>
                    </span>
                  </li>
                </ul>
              </div>

              <div className="col-lg-9">
                <div className="tab_content">
                  {/* Tab item #1 */}
                  <div id="tab1" className="tabs_item">
                    <HeavyIndustry />
                  </div>

                  {/* Tab item #2 */}
                  <div id="tab2" className="tabs_item">
                    <Transportation />
                  </div>

                  {/* Tab item #3 */}
                  <div id="tab3" className="tabs_item">
                    <HealthCare />
                  </div>

                  {/* Tab item #4 */}
                  <div id="tab4" className="tabs_item">
                    <Manufacturing />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhatWeOffer;