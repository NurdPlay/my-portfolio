/* Education.js */

import { Col, Container, Row } from "reactstrap";
import "../styles/Education.css";
import Nucamp from "../images/NucampLogo.png";
import IULogo from "../images/IULogo.png";

function Education() {
  return (
    <Container className="Container">
      <Row>
        <Col>
          <h3>Education</h3>
        </Col>
      </Row>
      <Row>
        <Col className="education-item">
          <img className="education-image" src={Nucamp} alt="Nucamp Logo" />
          <p className="education-description">Nucamp Developer Bootcamp</p>
        </Col>
        <Col className="education-item">
          <img className="education-image" src={IULogo} alt="IU Logo" />
          <p className="education-description">Independence University: Computer Science</p>
        </Col>
      </Row>
    </Container>
  );
}

export default Education;
