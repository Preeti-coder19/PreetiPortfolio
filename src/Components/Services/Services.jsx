import React from "react";
import "./Services.css";
import Services_Data from "../../assets/services_data";
import theme_pattern from "../../assets/theme_pattern.svg";
import arrow from "../../assets/arrow.svg";
const Services = () => {
  return (
    <div className="services" id="services">
      <div className="services-title">
        <h1>My Services</h1>
        <img src={theme_pattern} alt="" />
      </div>

      <div className="services-container">
        {Services_Data.map((service, index) => {
          return (
            <div key={index} className="services-format">
              <h3>{service.s_no}</h3>
              <h2>{service.s_name}</h2>
              <p>
                {service.s_description}
                <div className="services-readmore">
                  <p>Read More</p>
                  <img src={arrow} alt="" />
                </div>
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
