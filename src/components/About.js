import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import profile from '../assets/images/DSC_0017.JPG';

const About = () => {
  return (
    <section id="about" className="about-section py-5">
      <Container>
        <Row>
          <Col
            md={4}
            className="d-flex align-items-center justify-content-center"
          >
            <img
              src={profile}
              alt="Your Name"
              className="img-fluid rounded-circle"
            />
          </Col>
          <Col md={8}>
            <h2 className="section-heading">About Me</h2>
            <p>
              Hello! I'm Bhargav, a passionate web developer and designer based
              in Bengaluru. I have a strong foundation in front-end technologies
              and a keen eye for user experience and visual design. I love
              turning complex problems into elegant and intuitive solutions.
            </p>
            <p>
              I passionately serve as a leader at U&I, an organization committed
              to empowering underprivileged children through after-school
              tutoring and mentorship programs. This experience has allowed me
              to make a meaningful impact in my community and has also honed my
              leadership skills and strengthened my dedication to creating
              positive change.
            </p>
            <p>
              In my spare time, I pursue my interests in music production,
              biking, and gaming. Exploring creative melodies, hitting the
              biking trails, and diving into the virtual worlds of gaming are my
              favorite pastimes. These diverse passions fuel my creativity and
              provide balance to my technical endeavors.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
