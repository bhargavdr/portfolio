import React from 'react';
import { Col } from 'react-bootstrap'

const Card = ({ link, img, title, description, start, end, tags }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      style={{ textDecoration: 'none' }}
    >
      <div className="card">
        <img src={img} alt={title}></img>
        <h5>{title}</h5>
        <h6>{description}</h6>
        {start && (
          <p>
            {start} - {end}
          </p>
        )}
        {tags && (
          <Col>
            {tags.map((tag, index) => (
            <span className="tag" key={index}>
              {tag}
            </span>
            ))}
          </Col>
        )}
      </div>
    </a>
  );
};

export default Card;
