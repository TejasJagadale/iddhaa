import React from 'react';
import '../App.css';

const About = () => {
  return (
    <div className="page-container">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="hero-overlay">
          <h1>About Idhaa</h1>
          <p className="hero-subtitle">Transforming workplaces through strategic HR solutions and digital publishing innovation</p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission-section">
        <div className="mission-content">
          <div className="mission-text">
            <h2 className="section-titlemis">Our Mission</h2>
            <p className="mission-statement">
              To empower organizations with cutting-edge HR strategies and digital publishing solutions that drive growth, 
              innovation, and operational excellence.
            </p>
            <div className="founding-info">
              <div className="founding-year">
                <span className="year">2022</span>
                <span className="label">Year Founded</span>
              </div>
              <div className="clients-served">
                <span className="number">20+</span>
                <span className="label">Clients Served</span>
              </div>
            </div>
          </div>
          <div className="mission-image">
            <img src="https://images.unsplash.com/photo-1579621970563-ebec7560ff3e" alt="Idhaa office" />
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section">
        <h2 className="section-title">Our Core Values</h2>
        <p className="section-subtitle">The principles that guide everything we do</p>
        
        <div className="values-grid">
          <div className="value-card">
            <div className="value-icon">💡</div>
            <h3>Innovation</h3>
            <p>We constantly evolve our solutions to stay ahead of industry trends and technological advancements.</p>
          </div>
          <div className="value-card">
            <div className="value-icon">🤝</div>
            <h3>Integrity</h3>
            <p>We build trust through transparency, honesty, and ethical business practices.</p>
          </div>
          <div className="value-card">
            <div className="value-icon">🎯</div>
            <h3>Excellence</h3>
            <p>We deliver exceptional quality in every service and maintain the highest professional standards.</p>
          </div>
          <div className="value-card">
            <div className="value-icon">❤️</div>
            <h3>Passion</h3>
            <p>We're deeply committed to our clients' success and take pride in making a real impact.</p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <div className="team-content">
          <div className="team-text">
            <h2 className="section-titleexp">Our Expert Team</h2>
            <p>
              Idhaa brings together seasoned HR professionals and digital publishing experts with diverse industry 
              experience. Our team combines strategic thinking with practical execution to deliver measurable results.
            </p>
            <div className="team-stats">
              <div className="stat-item">
                <span className="stat-number">25+</span>
                <span className="stat-label">Certified Professionals</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">12</span>
                <span className="stat-label">Industry Specializations</span>
              </div>
            </div>
          </div>
          <div className="team-image">
            <img src="/images/team.png" alt="Idhaa team working" />
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="testimonials-section">
        <h2 className="section-title">What Our Clients Say</h2>
        <div className="testimonials-grid">
          <div className="testimonial-card">
            <div className="testimonial-content">
              <p>"Idhaa transformed our HR operations with their strategic approach and cutting-edge solutions."</p>
              <div className="client-info">
                <div className="client-name">Mpeoples Business Solutions</div>
                <div className="client-title">HR Director</div>
              </div>
            </div>
          </div>
          <div className="testimonial-card">
            <div className="testimonial-content">
              <p>"Their ePublishing services helped us streamline our content delivery and reach wider audiences."</p>
              <div className="client-info">
                <div className="client-name">Chennai Publishing Services</div>
                <div className="client-title">Digital Manager</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;