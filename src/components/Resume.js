import React from 'react';
import { Container, Button, Row, Col } from 'react-bootstrap';
import resume from '../assets/files/BhargavDR_Resume_.pdf';

const Resume = () => {
  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = resume;
    link.download = 'BhargavDR_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const openResumeInNewTab = () => {
    window.open(resume, '_blank');
  };

  return (
    <div className="resume-page">
      <Container>
        <Row>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Col md={6}>
              <h2>My Resume</h2>
              <p>Feel free to view or download my resume.</p>
            </Col>
          </div>
          <Col md={6} style={{ margin: 'auto' }}>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Button
                variant="primary"
                className="m-2"
                onClick={openResumeInNewTab}
              >
                View
              </Button>
              <Button
                variant="success"
                onClick={downloadResume}
                className="m-2"
              >
                Download
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Resume;
