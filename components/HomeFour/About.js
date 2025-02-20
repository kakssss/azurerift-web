import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import aboutImg from '../../public/images/about-img.png';

const About = ({ title, description }) => {
    return (
        <div className="about-area about-area-four pb-100">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="about-img"
                             data-aos="fade-in"
                             data-aos-duration="1200"
                             data-aos-delay="300">
                            <Image src={aboutImg} alt="Image" width={490} height={420}/>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="about-content"
                             data-aos="fade-in"
                             data-aos-duration="1200"
                             data-aos-delay="500">
                            <span>About Us</span>
                            <h2>{title}</h2>
                            <p>{description}</p>

                            <div className="row">
                                <div className="col-lg-6 col-sm-6">
                                    <ul>
                                        <li><i className="flaticon-checked"></i> Expert Legal Services</li>
                                        <li><i className="flaticon-checked"></i> Saudi Arabian Law Specialists</li>
                                        <li><i className="flaticon-checked"></i> Client-Focused Approach</li>
                                    </ul>
                                </div>
                                <div className="col-lg-6 col-sm-6">
                                    <ul>
                                        <li><i className="flaticon-checked"></i> Local Market Knowledge</li>
                                        <li><i className="flaticon-checked"></i> Proven Success</li>
                                        <li><i className="flaticon-checked"></i> Ethical Practices</li>
                                    </ul>
                                </div>
                            </div>

                            <Link href="/about" className="default-btn">
                                Learn More
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;