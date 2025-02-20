import React from 'react';

const WhyChooseUs = ({ title }) => {
    return (
        <section className="choose-ue-area pt-100 pb-70">
            <div className="container">
                <div className="section-title">
                    <span>Why Choose Us</span>
                    <h2>{title}</h2>
                    <p>
                        Sahel Law Firm stands out due to our extensive experience, client-first approach, and deep knowledge of Saudi Arabian law.
                    </p>
                </div>

                <div className="row align-items-center">
                    <div
                        className="col-lg-6"
                        data-aos="fade-in"
                        data-aos-duration="1200"
                        data-aos-delay="200"
                    >
                        <div className="choose-card">
                            <span>
                                01 <i className="flaticon-technical-support"></i>
                            </span>
                            <h3>Experienced Legal Professionals</h3>
                            <p>
                                Our team comprises seasoned lawyers with extensive experience in Saudi Arabian law.
                            </p>
                        </div>
                    </div>

                    <div
                        className="col-lg-6"
                        data-aos="fade-in"
                        data-aos-duration="1200"
                        data-aos-delay="300"
                    >
                        <div className="choose-card">
                            <span>
                                02 <i className="flaticon-shield"></i>
                            </span>
                            <h3>Client-Centric Approach</h3>
                            <p>
                                We prioritize our clients' needs, offering personalized and dedicated legal services.
                            </p>
                        </div>
                    </div>

                    <div
                        className="col-lg-6"
                        data-aos="fade-in"
                        data-aos-duration="1200"
                        data-aos-delay="400"
                    >
                        <div className="choose-card">
                            <span>
                                03 <i className="flaticon-support"></i>
                            </span>
                            <h3>Deep Knowledge of Saudi Arabian Law</h3>
                            <p>
                                We offer a deep and understanding of the saudi arabian law.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;