import React from "react";
import "./AboutUs.css";

function AboutUs() {
  return (
    <div className="about-container">
      <section className="about-header">
        <h1>About Us</h1>
        <p>
        <h2>Saving Lives, One Drop at a Time</h2>
        Every drop of blood holds the power to save a life — and you could be someone’s hero today. Our mission is to make blood donation not just accessible, but a powerful act of kindness that anyone can take part in.
        </p>
      </section>

      <section className="about-content">
        <div className="mission">
          <h2>Our Mission</h2>
          <p>
          We’re on a heartfelt mission to connect life-saving blood donors with hospitals, blood banks, and patients in urgent need. Our platform simplifies the donation process through easy scheduling, real-time tracking, and trustworthy information — all designed to make your generous act seamless and impactful. Whether it's a planned donation or a quick response to an emergency, we’re here to support every life-saving drop.
          </p>
        </div>

        <div className="vision">
          <h2>Our Vision</h2>
          <p>
          Imagine a world where no one dies waiting for blood. That’s the future we’re working toward — a future built on compassion, community, and consistency. We aim to cultivate a network of committed donors and ensure that blood is never in short supply when lives hang in the balance. Through awareness drives, local events, and partnerships with healthcare institutions, we’re creating a movement that turns everyday people into everyday heroes.
          </p>
        </div>

        <div className="team">
          <h2>Meet Our Team</h2>
          <div className="team-members">
            <div className="team-member">
              <img src="path-to-image-1" alt="Founder" />
              <h3>Ritun Raj</h3>
              <p>Founder & CEO</p>
            </div>
            <div className="team-member">
              <img src="path-to-image-2" alt="Co-Founder" />
              <h3>Zoro</h3>
              <p>Co-Founder & Operations Lead</p>
            </div>
            <div className="team-member">
              <img src="path-to-image-3" alt="Marketing Head" />
              <h3>Monkey D Luffy</h3>
              <p>Head of Marketing</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta">
        <h2>Join Us in Saving Lives</h2>
        <p>
          Whether you're a donor, volunteer, or advocate, you can help us
          achieve our mission. Together, we can make sure that no one has to
          wait for the blood they need. Become a part of our community today.
        </p>
        <a href="/donate" className="donate-link">
          Become a Donor
        </a>
      </section>
    </div>
  );
}

export default AboutUs;