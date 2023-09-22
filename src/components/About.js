import { Container, Row, Col } from "reactstrap"
import '../styles/About.css'
import devImage from '../images/developer.png'
import { useInView } from 'react-intersection-observer';
import '../styles/About.css'
function About() {
  return (
    <Container className="AboutContainer">
      <Row>
        <Col>
          <h1>John Elliott</h1>
          <img className='devImage' src={devImage} />
          <h2>Fullstack Developer</h2>
        </Col>
      </Row>
     
    </Container>
  );
}

export default About;