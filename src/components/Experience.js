import React, { useEffect } from 'react';
import './Styling/Experience.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Experience = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <section id="experience">
      <h1>Experience</h1>
      <div className="timeline">
        <div className="timeline-item" data-aos="fade-up">
          <div className="timeline-content">
            <h2>GirlScript Summer of Code</h2>
            <p>Contributor</p>
          </div>
        </div>
        <div className="timeline-item" data-aos="fade-up">
          <div className="timeline-content">
            <h2>Mukham India</h2>
            <p>Flutter Developer</p>
          </div>
        </div>
        <div className="timeline-item" data-aos="fade-up">
          <div className="timeline-content">
            <h2>Open Source Community : VIT-AP</h2>
            <p>Mobile Application Developer</p>
          </div>
        </div>
        <div className="timeline-item" data-aos="fade-up">
          <div className="timeline-content">
            <h2>Women in Open Source, VIT-AP</h2>
            <p>Associate Event Lead</p>
          </div>
        </div>
        <div className="timeline-item" data-aos="fade-up">
          <div className="timeline-content">
            <h2>Toastmasters International</h2>
            <p>Community Outreach Coordinator</p>
          </div>
        </div>
        <div className="timeline-item" data-aos="fade-up">
          <div className="timeline-content">
            <h2>The Machine Learning CLUB VITAP</h2>
            <p>Project Team Member</p>
          </div>
        </div>
        <div className="timeline-item" data-aos="fade-up">
          <div className="timeline-content">
            <h2>InAmigos Foundation</h2>
            <p>Intern</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
