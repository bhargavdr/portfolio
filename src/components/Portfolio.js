import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Card from './Card';
import Skills from './Skills'
import ExpenseTrackerPreview from '../assets/images/ExpenseTrackerApp.png';
import MovieAppPreview from '../assets/images/MovieApp.png';
import TodoAppPreview from '../assets/images/TodoListApp.png';
import ObjectDetection from '../assets/images/ObjectDetection.png'
import AgLogo from '../assets/images/aglogo.png'

const Portfolio = () => {
  const tagsTodo = ['Frontend' , 'ReactJS'];
  const tagsMovie = ['Frontend', 'ReactJS', 'API'];
  const tagsExpense = ['Frontend', 'ReactJS'];
  const tagsObjectDetection = ['Python', 'Machine Learning', 'OpenCV', 'Tkinter']
  return (
    <div className="portfolio">
      <h2>Portfolio</h2>
      <Skills />
      <Container>
        <h3 style={{ textAlign: 'left', marginBottom: '50px' }}>
          Work Experience
        </h3>
        <Row>
          <Col>
            <Card
              link="https://www.ariveguru.com/"
              img={AgLogo}
              title="Ariveguru Technology Solutions"
              description="React Developer"
              start="April 2023"
              end="June 2023"
            />
          </Col>
          <Col>
            <Card
              link="https://www.cognizant.com/in/en"
              img="https://www.financialexpress.com/wp-content/uploads/2022/11/cognizant-Technology-Solutions.jpg"
              title="Cognizant Technology Solutions"
              description="Programmer Analyst Trainee"
              start="April 2022"
              end="March 2023"
            />
          </Col>
          <Col>
            <Card
              // link=""
              img="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRNtgm5qsRPR1XB7Kal4jTxtfGlsdvUOmZBYVmRPbLSW2HHcKmM"
              title="neurala.ai"
              description="Intern"
              start="March 2021"
              end="April 2021"
            />
          </Col>
          <Col>
            <Card
              link="https://emelite.in/"
              img="https://images.thecompanycheck.com/companylogo/EMELITE_TECHNOLOGIES_PRIVATE_LIMITED.webp"
              title="EMElite Tech Solutions"
              description="Intern"
              start="January 2020"
              end="February 2020"
            />
          </Col>
        </Row>
      </Container>
      <Container>
        <h3 style={{ textAlign: 'left', marginBottom: '50px' }}>Projects</h3>
        <Row>
          <Col>
            <Card
              link="https://github.com/bhargavdr/TodoApp"
              img={TodoAppPreview}
              title="Todo App"
              description="A Minimal React Project to help you plan your day efficiently."
              tags={tagsTodo}
            />
          </Col>
          <Col>
            <Card
              link="https://github.com/bhargavdr/Movie_App"
              img={MovieAppPreview}
              title="Movie App"
              description="A React Project that uses the OMDB API to render information based on your choice of movie."
              tags={tagsMovie}
            />
          </Col>
          <Col>
            <Card
              link="https://github.com/bhargavdr/Expense-Tracker/tree/master/expense-tracker-react"
              img={ExpenseTrackerPreview}
              title="Expense Tracker"
              description="A React Project to help you get financially smart by keeping track of your income and expenses."
              tags={tagsExpense}
            />
          </Col>
          <Col>
            <Card
              link="https://github.com/bhargavdr/Object-Detection"
              img={ObjectDetection}
              title="Object Detection"
              description="A machine learning model which is trained using the MS COCO dataset. Using OpenCV and YOLO algorithm, the model detects different objects present in an image or live video"
              tags={tagsObjectDetection}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Portfolio;
