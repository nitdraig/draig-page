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
            <img src="https://res.cloudinary.com/dcu06etml/image/upload/v1688837284/draig-page/ciapkyqxomwvb6myfb9i.svg" alt="Logo" />
            <p>© CopyRight 2023. All rights reserved</p>
            <p>
              Developed by{" "}
              <a
                href="https://www.linkedin.com/in/avellaneda-agustín-tns/"
                target="blank"
              >
                Avellaneda Agustín
              </a>
            </p>
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
