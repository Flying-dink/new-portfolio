// Dependencies
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import CenterCard from '../components/CenterCard';
import Footer from '../components/Footer';
import Header from '../components/Header';

// Import image for about me
import headShot from '../assets/Scotland-headshot.jpg';

// Text for about me
const aboutText = [
  " A portfolio to showcase some of the projects I have been working on.",
];

// Returns the landing/index page. Bio text, image, and assoc. alt attribute are sent to CenterCard as props.
function Home() {
  return (
    <Container>
      <Header page={'About Me'} />
      <Row className="justify-content-start" id="bio">
        <Col md>
          <CenterCard
            image={headShot}
            alt={"A picture of me."}
            title={'About Me'}
            text={aboutText}
          ></CenterCard>
        </Col>
      </Row>
      <Footer />
    </Container>
  );
}

export default Home;