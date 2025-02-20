import React from "react";
import Navbar from "../components/Layouts/Navbar";
import MainBanner from "../components/HomeFour/MainBanner";
import PartnerSliderTwo from "../components/Common/PartnerSliderTwo";
import About from "../components/HomeFour/About";
import Services from "../components/HomeFour/Services";
import WhyChooseUs from "../components/HomeFour/WhyChooseUs";
import MakeYourBusiness from "../components/Common/MakeYourBusiness";
import WhatWeOffer from "../components/HomeFour/WhatWeOffer";
import Team from "../components/Common/Team";
import CaseStudies from "../components/HomeFour/CaseStudies";
import Testimonials from "../components/Common/Testimonials";
import Faq from "../components/HomeFour/Faq";
import Newsletter from "../components/Common/Newsletter";
import News from "../components/HomeFour/News";
import Footer from "../components/Layouts/Footer";

export default function Index4Page() {
  return (
    <>
      <div className="body-bg-color">
        <Navbar />

        <MainBanner 
            title = "Welcome to Sahel Law Firm"
            description = "Your Trusted Legal Partner in Saudi Arabia"
            buttonText1 = "About Us"
            buttonText2 = "Contact Us"
        />

        <PartnerSliderTwo />

        <About
            title = "About Us"
            description = "To provide expert legal services and guidance to individuals, businesses, and investors navigating the Saudi Arabian legal landscape."
        />

        <Services
            title = "Our Main Services"
        />

        <WhyChooseUs
             title ="Why Choose Sahel Law Firm?"
        />

        <MakeYourBusiness
            title = "Our Mission"
            description = "To provide expert legal services and guidance to individuals, businesses, and investors navigating the Saudi Arabian legal landscape."
        />

        <WhatWeOffer 
             title="Our Services"
        />

        <CaseStudies />

        <Team />

        <Testimonials />

        <Faq />

        <Newsletter />

        <News />

        <Footer 
            footerText = "© 2025 Sahel Law Firm. All Rights Reserved."
        />
      </div>
    </>
  );
}