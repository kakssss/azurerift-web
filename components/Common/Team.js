import React, { useState } from "react";
import Image from "next/image";

import teamShape from "../../public/images/team/team-shape.png";

const teamData = [
  {
    image: "/images/team/neelanjan.png",
    webpImage: "/images/team/neelanjan.webp",
    name: "Neelanjan Chakraborty",
    designation: "CEO & Founder",
    aosDelay: "100",
    socialLinks: [
      {
        iconName: "bx bxl-linkedin",
        url: "https://linkedin.com/",
      },
    ],
  },
  {
    image: "/images/team/anurag.png",
    webpImage: "/images/team/anurag.webp",
    name: "Anurag Moharana",
    designation: "DevOps Architect",
    aosDelay: "200",
    socialLinks: [
      {
        iconName: "bx bxl-linkedin",
        url: "https://linkedin.com/",
      },
    ],
  },
  {
    image: "/images/team/alok.png",
    webpImage: "/images/team/alok.webp",
    name: "Aloknath",
    designation: "Software Developer",
    aosDelay: "300",
    socialLinks: [
      {
        iconName: "bx bxl-linkedin",
        url: "https://linkedin.com/",
      },
    ],
  },
  {
    image: "/images/team/satyajit.png",
    webpImage: "/images/team/satyajit.webp",
    name: "Satyajit Sahoo",
    designation: "Backend Developer",
    aosDelay: "400",
    socialLinks: [
      {
        iconName: "bx bxl-linkedin",
        url: "https://linkedin.com/",
      },
    ],
  },
  {
    image: "/images/team/deb.png",
    webpImage: "/images/team/deb.webp",
    name: "Debashsih Mohapatra",
    designation: "Data Scientist",
    aosDelay: "400",
    socialLinks: [
      {
        iconName: "bx bxl-linkedin",
        url: "https://linkedin.com/",
      },
    ],
  },
  {
    image: "/images/team/team1.png",
    webpImage: "/images/team/team1.webp",
    name: "Omar Faruq",
    designation: "Frontend Devloper ( React)",
    aosDelay: "400",
    socialLinks: [
      {
        iconName: "bx bxl-linkedin",
        url: "https://linkedin.com/",
      },
    ],
  },
  {
    image: "/images/team/team2.png",
    webpImage: "/images/team/team2.webp",
    name: "Javier Castillo",
    designation: "UI UX Designer",
    aosDelay: "400",
    socialLinks: [
      {
        iconName: "bx bxl-linkedin",
        url: "https://linkedin.com/",
      },
    ],
  },
  {
    image: "/images/team/team3.png",
    webpImage: "/images/team/team3.webp",
    name: "Helen S. Guzman",
    designation: "Backend Devloper ( Node.js)",
    aosDelay: "400",
    socialLinks: [
      {
        iconName: "bx bxl-linkedin",
        url: "https://linkedin.com/",
      },
    ],
  },
];

const Team = () => {
  const [imageSrc, setImageSrc] = useState(null);

  const handleImageClick = (webpImage) => {
    setImageSrc(webpImage);
  };

  return (
    <section className="team-area pb-70">
      <div className="container">
        <div className="section-title home-four-section-title">
          <span>Team</span>
          <h2>Meet Our Expert Team</h2>
          <p>
            Our team consists of highly skilled professionals dedicated to delivering the best results for our clients.
          </p>
        </div>

        <div className="row justify-content-center">
          {teamData &&
            teamData.slice(0, 5).map((value, i) => (
              <div
                className="col-lg-3 col-sm-6"
                data-aos="fade-in"
                data-aos-duration="1200"
                data-aos-delay={value.aosDelay}
                key={i}
              >
                <div className="single-team active" 
                                       onMouseEnter={() => handleImageClick(value.webpImage)}
                                       onMouseLeave={() => setImageSrc(value.image)}
                                       >
                  <div className="team-single-img" >
                    <Image
                      src={imageSrc === value.webpImage ? value.webpImage : value.image}
                      alt={value.name}
                      width={200}
                      height={180}
                    />
                    <div className="team-img">
                      <Image
                        src={teamShape}
                        alt="Image"
                        width={400}
                        height={208}
                      />
                    </div>
                  </div>

                  <div className="team-content">
                    <h3>{value.name}</h3>
                    <span>{value.designation}</span>

                    <ul>
                      {value.socialLinks.map((link, i) => (
                        <li key={i}>
                          <a href={link.url} target="_blank" rel="noopener noreferrer">
                            <i className={link.iconName}></i>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
