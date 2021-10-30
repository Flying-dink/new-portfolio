// Dependencies
import React from 'react';
import { Row, Col } from 'react-bootstrap';

// Import Resume
import resume from '../../assets/2021-10-30(5).jpg';

//  Exports a row containing contact info
// Since content should be consistent, defined here rather then entered as props
export default function Footer() {
  return (
    <Row className="foot">
      <Col sm={2}>
        <h5 className="text-center">
          <a
            href="https://github.com/Flying-dink"
            className="card-link"
            rel="noreferrer"
            target="_blank"
          >
            Github
          </a>
        </h5>
      </Col>
      <Col sm={2}>
        <h5 className="text-center">
          <a
            href="https://www.linkedin.com/in/Catherine-Clifford/"
            className="card-link"
            rel="noreferrer"
            target="_blank"
          >
            LinkedIn
          </a>
        </h5>
      </Col>
      <Col sm={2} md={2}>
        <h5 className="text-center">
          <a
            href={resume}
            className="card-link"
            rel="noreferrer"
            target="_blank"
          >
            Resume
          </a>
        </h5>
      </Col>
      <Col sm={4} md={2}>
        <h5 className="text-center">(407) 221-1995</h5>
      </Col>
      <Col sm={3} md={2}>
        <h5 className="text-center">skydoll96@gmail.com</h5>
      </Col>
    </Row>
  );
}