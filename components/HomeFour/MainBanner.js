import React from 'react';
import Link from 'next/link';

const MainBanner = ({ title, description, buttonText1, buttonText2 }) => {
    return (
        <div className="main-banner-area main-banner-area-four">
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="banner-text">
                            <h1 className="text-4xl font-bold mb-6">
                                {title}
                            </h1>
                            <p className="text-lg mb-8">
                                {description}
                            </p>
                            <div className="banner-btn">
                                <Link href="/about" className="default-btn">
                                    {buttonText1}
                                </Link>
                                <Link href="/contact" className="default-btn">
                                    {buttonText2}
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 w-full h-full">
                        <img
                            src="/images/robot.webp"
                            alt="Law Firm Image"
                            className="w-full h-auto pr-20"
                            style={{ maxWidth: '500px', maxHeight: '500px', marginLeft: '80px' }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainBanner;