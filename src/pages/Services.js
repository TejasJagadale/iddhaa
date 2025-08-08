import React from 'react';
import '../App.css';

const Services = () => {
  const services = [
    {
      title: "Recruitment Services",
      description: "End-to-end recruitment solutions from sourcing to onboarding, ensuring cultural and technical fit.",
      icon: "👥"
    },
    {
      title: "HR Outsourcing",
      description: "Comprehensive HR management so you can focus on your core business operations.",
      icon: "📋"
    },
    {
      title: "Compensation Design",
      description: "Competitive, fair compensation structures that attract and retain top talent.",
      icon: "💰"
    },
    {
      title: "Performance Management",
      description: "Systems to align employee performance with organizational goals.",
      icon: "📊"
    },
    {
      title: "HR Technology Consulting",
      description: "Implementation and optimization of HRIS systems for efficiency.",
      icon: "💻"
    },
    {
      title: "Leadership Development",
      description: "Programs to cultivate your next generation of leaders.",
      icon: "👔"
    }
  ];

  return (
    <div className="page-container">
      <section className="services-section">
        <h1>Our HR Solutions</h1>
        <p>Comprehensive services tailored to your organizational needs</p>
        
        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Services;