import React from 'react';

const WhyChooseUs = ({ title }) => {
    return (
        <section className="choose-ue-area azure-theme pt-100 pb-100">
            <div className="container">
                <div className="row">
                    <div className="col-8">
                        <div className="choose-title home-four-section-title">
                            <span className="azure-highlight">Why Choose Us</span>
                            <h2>{title}</h2>
                        </div>
                    </div>
                </div>

                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="choose-card azure-card rounded-3"
                             data-aos="fade-in"
                             data-aos-duration="1200"
                             data-aos-delay="200">
                            <span>
                                01 <i className="flaticon-cloud"></i>
                            </span>
                            <h3>Experienced Legal Professionals</h3>
                            <p>Our team comprises seasoned lawyers with extensive experience in Saudi Arabian law.</p>
                        </div>

                        <div className="choose-card azure-card rounded-3"
                             data-aos="fade-in"
                             data-aos-duration="1200"
                             data-aos-delay="300">
                            <span>
                                02 <i className="flaticon-cloud-computing"></i>
                            </span>
                            <h3>Client-Centric Approach</h3>
                            <p>We prioritize our clients' needs, offering personalized and dedicated legal services.</p>
                        </div>

                        <div className="choose-card azure-card rounded-3"
                             data-aos="fade-in"
                             data-aos-duration="1200"
                             data-aos-delay="400">
                            <span>
                                03 <i className="flaticon-support"></i>
                            </span>
                            <h3>Proven Track Record of Success</h3>
                            <p>We have a history of achieving favorable outcomes for our clients in a wide range of legal matters.</p>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="choose-card azure-card rounded-3"
                             data-aos="fade-in"
                             data-aos-duration="1200"
                             data-aos-delay="400">
                            <span>
                                04 <i className="flaticon-support"></i>
                            </span>
                            <h3>Specialized Knowledge in Saudi Arabian Law</h3>
                            <p>Our expertise in local laws and regulations ensures effective legal solutions tailored to the region.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;