import React from "react";
import "../App.css";

const Home = () => {
  return (
    <div className="page-container">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>HR Consultancy Services & ePublishing Solutions</h1>
          <p className="hero-subtitle">
            Strategic human capital solutions and digital publishing excellence
          </p>
          <div className="hero-buttons">
            <a href="/about">
              {" "}
              <button className="cta-button primary">
                {" "}
                Explore HR Services
              </button>{" "}
            </a>
            <a href="/contact">
              {" "}
              <button className="cta-button secondary">
                Discover Publishing
              </button>
            </a>
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="trusted-by">
        <h2 className="section-title">Trusted By Industry Leaders</h2>
        <div className="client-logos">
          <div className="client-logo">
            <a href="https://mpeoples.in/" target="_blank" rel="noreferrer">
              {" "}
              <img
                src="/images/mplogo.png"
                alt="Mpeoples Business Solutions"
              />{" "}
            </a>
          </div>
          <div className="client-logo">
            <a
              href="https://chennaipublishing.com/"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              <img
                src="/images/cpslogo.png"
                alt="Chennai Publishing Services"
              />{" "}
            </a>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="services-overview">
        <h2 className="section-title">Comprehensive Professional Services</h2>
        <p className="section-subtitle">
          Integrated solutions for your business growth
        </p>

        <div className="services-grid">
          <div className="service-card hr-service">
            <div className="service-icon">👥</div>
            <h3>HR Consultancy</h3>
            <p>
              End-to-end human resource solutions tailored to your
              organizational needs
            </p>
            <ul className="service-features">
              <li>Talent Acquisition & Recruitment</li>
              <li>HR Compliance & Policy Development</li>
              <li>Performance Management Systems</li>
              <li>Training & Leadership Development</li>
            </ul>
            <a href="/about">
              {" "}
              <button className="service-button">Learn More</button>{" "}
            </a>
          </div>

          <div className="service-card publishing-service">
            <div className="service-icon">📚</div>
            <h3>ePublishing Services</h3>
            <p>Digital transformation for your publishing needs</p>
            <ul className="service-features">
              <li>Digital Content Development</li>
              <li>eBook Conversion & Formatting</li>
              <li>Content Management Solutions</li>
              <li>Distribution Platform Integration</li>
            </ul>
            <a href="/about">
              {" "}
              <button className="service-button">Learn More</button>
            </a>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="value-proposition">
        <div className="value-content">
          <h2>Why Partner With Us?</h2>
          <div className="value-points">
            <div className="value-point">
              <div className="value-icon">🏆</div>
              <h3>Industry Expertise</h3>
              <p>15+ years combined experience in HR and digital publishing</p>
            </div>
            <div className="value-point">
              <div className="value-icon">🔍</div>
              <h3>Custom Solutions</h3>
              <p>Tailored approaches for your specific business challenges</p>
            </div>
            <div className="value-point">
              <div className="value-icon">📈</div>
              <h3>Measurable Results</h3>
              <p>Data-driven strategies with proven ROI</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <h2>Ready to Transform Your Business?</h2>
        <p>Schedule a consultation with our experts today</p>
        <a href="/contact">
          {" "}
          <button className="cta-button primary large">Get Started</button>
        </a>
      </section>
    </div>
  );
};

export default Home;
