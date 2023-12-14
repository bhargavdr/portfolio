import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import htmlLogo from '../assets/images/htmlLogo.png';
import cssLogo from '../assets/images/cssLogo.png';
import jsLogo from '../assets/images/jsLogo.png';
import reactLogo from '../assets/images/reactLogo.png';
import nodeLogo from '../assets/images/nodeLogo.png';
import mongoLogo from '../assets/images/mongoLogo.png';
import SkillRating from './SkillRating';

const Skills = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (
    <section className="skill" id="skills">
      <Container>
        <h3 style={{ textAlign: 'left' }}>Skills</h3>
        <Row>
          <Col>
            <div className="skill-bx">
              <Carousel
                responsive={responsive}
                infinite={true}
                draggable={true}
                renderButtonGroupOutside={true}
                className="skill-slider"
                autoPlay={true}
                autoPlaySpeed={3000}
              >
                <div className="item">
                  <SkillRating name="HTML" value="4.5" src={htmlLogo} />
                </div>
                <div className="item">
                  <SkillRating name="CSS" value="4.5" src={cssLogo} />
                </div>
                <div className="item">
                  <SkillRating name="Javascript" value="4.5" src={jsLogo} />
                </div>
                <div className="item">
                  <SkillRating name="ReactJS" value="4.5" src={reactLogo} />
                </div>
                <div className="item">
                  <SkillRating name="React Native" value="4" src={reactLogo} />
                </div>
                <div className="item">
                  <SkillRating name="NodeJS" value="4" src={nodeLogo} />
                </div>
                <div className="item">
                  <SkillRating name="MongoDB" value="4" src={mongoLogo} />
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Skills;
