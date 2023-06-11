import { Container, Row, Col } from "react-bootstrap";
import logo from "../../assets/img/logo.png";

import { faYoutube, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-item-center">
          <Col sm={6}>
            <img src={logo} alt="Logo" />
            <p>© CopyRight 2023. All rights reserved</p>
          </Col>
          <Col
            sm={6}
            className="text-center text-sm-end"
            style={{ marginTop: "2rem" }}
          >
            <div className="social-icon">
              <a
                href="https://www.youtube.com/draig"
                target="blank"
                className="youtube"
              >
                {" "}
                <FontAwesomeIcon icon={faYoutube} size="2x" style={{}} />
              </a>
              <a
                href="https://instagram.com/nitdraig"
                target="blank"
                className="instagram"
              >
                <FontAwesomeIcon icon={faInstagram} size="2x" />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
