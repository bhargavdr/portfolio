/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const Hero = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const titles = ['Web Developer', 'Web Designer', 'UI/UX Designer'];
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(250);
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % titles.length;
    let fullText = titles[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  };

  return (
    <section className="hero-section text-center d-flex align-items-center">
      <Container>
        <Row>
          <Col>
            <h1 className="display-2">Bhargav D R</h1>
            <p className="lead">I am a {text}</p>
            <p>
              Welcome to my portfolio website! I create beautiful and
              user-friendly websites and applications. Let's turn your ideas
              into reality.
            </p>
            <Button variant="dark" href="/portfolio">
              View Portfolio
            </Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
