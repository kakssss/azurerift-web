import React from 'react';
import Navbar from "../components/Layouts/Navbar";
import PageBanner from "../components/Common/PageBanner";
import Footer from "../components/Layouts/Footer";
import About from "../components/AboutOne/About";
import WhyChooseUs from "../components/AboutTwo/WhyChooseUs";
import TeamTwo from "../components/Common/TeamTwo";

const AboutPage = () => {
    return (
        <>
            <Navbar />

            <PageBanner
                pageTitle="About Sahel Law Firm"
                homePageUrl="/"
                homePageText="Home"
                activePageText="About Us"
            />

            <About
                title="Building Trust and Credibility"
                description="Sahel Law Firm has been providing top-tier legal services in Saudi Arabia for over a decade. Our dedication to legal excellence and client satisfaction has established us as a trusted firm in the region."
                valuesTitle="Our Values"
                teamDescription="We have a dedicated team of highly experienced legal professionals specializing in various fields, including corporate law, litigation, real estate, and more."
            />
             <WhyChooseUs
              title="Why Choose Us?"
             />
            <TeamTwo />

            

            <Footer 
                footerText="© 2025 Sahel Law Firm. All Rights Reserved."
            />
        </>
    );
};

export default AboutPage;