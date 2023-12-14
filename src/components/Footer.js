import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { IoLogoLinkedin } from 'react-icons/io';
import { FaGithub, FaInstagram, FaXTwitter } from 'react-icons/fa6';
import { FaYoutube } from 'react-icons/fa';

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div style={{ marginTop: 'auto' }}>
      <footer>
        <Container fluid className="contact-page text-white">
          <Row className="p-3">
            <Col className="text-center">
              <h2>Contact Information</h2>
              <p>
                Email:{' '}
                <a
                className="text-white mx-2"
                  style={{ color: 'black' }}
                  href="mailto: bhargavdr26@gmail.com"
                >
                  bhargavdr26@gmail.com
                </a>
              </p>
              <p>Phone: +91 9900519579</p>
            </Col>
            <Col className="text-center">
              <h2>Follow Me</h2>
              <div>
                <a
                  href="https://www.linkedin.com/in/bhargav-dr26"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white mx-2"
                >
                  <IoLogoLinkedin />
                  LinkedIn
                </a>
                <a
                  href="https://github.com/bhargavdr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white mx-2"
                >
                  <FaGithub />
                  GitHub
                </a>
                <a
                  href="https://youtube.com/@bhargavdr?si=vj_eIv-a9ne9nCqw"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white mx-2"
                >
                  <FaYoutube />
                  YouTube
                </a>
              </div>
              <div>
                <a
                  href="https://www.instagram.com/bhargav._.dr/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white mx-2"
                >
                  <FaInstagram />
                  Instagram
                </a>
                <a
                  href="https://twitter.com/bhargav_dr26"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white mx-2"
                >
                  <FaXTwitter />
                  X/Twitter
                </a>
              </div>
            </Col>
          </Row>
        </Container>
        <Container fluid className="text-white">
          <Row className="bg-dark p-2">
            <Col className="text-center">
              <p>&copy; {year} Bhargav D R. All rights reserved.</p>
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  );
};

export default Footer;
