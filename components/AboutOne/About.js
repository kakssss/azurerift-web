import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import aboutImg from '../../public/images/about-img.png';

const About = ({ title, description, valuesTitle, teamDescription }) => {
  return (
    <section className="about-area pb-100">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="about-img" data-aos="fade-in" data-aos-duration="1200" data-aos-delay="100">
              <Image src={aboutImg} alt="Image" width={490} height={420} />
            </div>
          </div>

          <div className="col-lg-6">
            <div className="about-content" data-aos="fade-in" data-aos-duration="1200" data-aos-delay="200">
              <span>Our History</span>
              <h2>{title}</h2>
              <p>{description}</p>

              <div className="row">
                <div className="col-lg-6 col-sm-6">
                  <ul>
                    <li>
                      <i className="flaticon-checked"></i> Litigation Services
                    </li>
                    <li>
                      <i className="flaticon-checked"></i> Real Estate Law
                    </li>
                    <li>
                      <i className="flaticon-checked"></i> Corporate Law
                    </li>
                  </ul>
                </div>

                <div className="col-lg-6 col-sm-6">
                  <ul>
                    <li>
                      <i className="flaticon-checked"></i> Debt Collection
                    </li>
                    <li>
                      <i className="flaticon-checked"></i> Legal Consultation
                    </li>
                  </ul>
                </div>
              </div>

              

              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;