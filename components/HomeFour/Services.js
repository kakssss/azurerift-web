import React from "react";
import Link from "next/link";
import Image from "next/image";

import shapeImg1 from "../../public/images/shape/services-shape/1.png";
import shapeImg2 from "../../public/images/shape/services-shape/2.png";
import shapeImg3 from "../../public/images/shape/services-shape/3.png";
import shapeImg4 from "../../public/images/shape/services-shape/4.png";
import shapeImg5 from "../../public/images/shape/services-shape/5.png";
import shapeImg6 from "../../public/images/shape/services-shape/6.png";

const Services = ({title}) => {
  return (
    <>
      <div className="offer-area offer-area-two offer-area-four pt-100 pb-70">
        <div className="container">
          <div className="section-title home-four-section-title">
            <span>Services</span>
            <h2>{title}</h2>
            <p>
            Explore a range of AI-driven solutions designed to automate, optimize, and scale your business. Our innovative services are tailored to meet the evolving needs of modern enterprises.
            </p>
          </div>

          <div className="row justify-content-center">
            
              <div
                className="col-lg-4 col-sm-6"
                key="0"
                data-aos="fade-in"
                data-aos-duration="1200"
                data-aos-delay="100"
              >
                <div className="service-card">
                  <i className="flaticon-chip"></i>
                  <h3>
                    <Link href="/services/service-details/">
                    Litigation Services
                    </Link>
                  </h3>
                  <p>
                  Expert representation and support for legal disputes in Saudi courts.
                  </p>
                </div>
              </div>
           
              <div
                className="col-lg-4 col-sm-6"
                key="1"
                data-aos="fade-in"
                data-aos-duration="1200"
                data-aos-delay="200"
              >
                <div className="service-card">
                  <i className="flaticon-vr"></i>
                  <h3>
                    <Link href="/services/service-details/">
                     Corporate Law
                    </Link>
                  </h3>
                  <p>
                  Legal assistance for business establishment, compliance, and governance.
                  </p>
                </div>
              </div>
           
              <div
                className="col-lg-4 col-sm-6"
                key="2"
                data-aos="fade-in"
                data-aos-duration="1200"
                data-aos-delay="300"
              >
                <div className="service-card">
                  <i className="flaticon-blockchain"></i>
                  <h3>
                    <Link href="/services/service-details/">
                    Real Estate Law
                    </Link>
                  </h3>
                  <p>
                    Guidance for property transactions, development, and dispute resolution.
                  </p>
                </div>
              </div>
            
              <div
                className="col-lg-4 col-sm-6"
                key="3"
                data-aos="fade-in"
                data-aos-duration="1200"
                data-aos-delay="400"
              >
                <div className="service-card">
                  <i className="flaticon-target"></i>
                  <h3>
                    <Link href="/services/service-details/">
                    Debt Collection
                    </Link>
                  </h3>
                  <p>
                  Efficient and ethical debt recovery services for individuals and businesses.
                  </p>
                </div>
              </div>
           
              <div
                className="col-lg-4 col-sm-6"
                key="4"
                data-aos="fade-in"
                data-aos-duration="1200"
                data-aos-delay="500"
              >
                <div className="service-card">
                  <i className="flaticon-choice"></i>
                  <h3>
                    <Link href="/services/service-details/">
                    Legal Consultation
                    </Link>
                  </h3>
                  <p>
                   Expert advisory services to address your specific legal questions and needs.
                  </p>
                </div>
              </div>
          </div>
        </div>

        {/* Shape Images */}
        <div className="offer-shape">
          <Image src={shapeImg1} alt="Image" width={300} height={375} />
          <Image src={shapeImg2} alt="Image" width={300} height={375} />
          <Image src={shapeImg3} alt="Image" width={41} height={36} />
          <Image src={shapeImg4} alt="Image" width={20} height={20} />
          <Image src={shapeImg5} alt="Image" width={28} height={30} />
          <Image src={shapeImg6} alt="Image" width={25} height={25} />
        </div>
      </div>
    </>
  );
};

export default Services;