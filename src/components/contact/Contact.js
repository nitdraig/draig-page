import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faInstagram,
  faSpotify,
  faItunes,
} from "@fortawesome/free-brands-svg-icons";
import Carousel from "react-bootstrap/Carousel";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Contact = () => {
  return (
    <section className="contact" id="contact">
      <Container>
        <TrackVisibility>
          {({ isVisible }) => (
            <div
              className={isVisible ? "animate__animated animate__pulse" : ""}
            >
              <Row className="justify-content-md-center">
                <Col md={6} lg={5} className="mb-3">
                  <h2>Sigueme en mis redes</h2>

                  <div>
                    <a
                      href="https://www.youtube.com/c/draig"
                      className="youtube social"
                      target="blank"
                    >
                      <FontAwesomeIcon icon={faYoutube} size="3x" />
                    </a>
                    <a
                      href="https://show4me.com/draig"
                      className="show4 social"
                      target="blank"
                    >
                      <img
                        alt="show4Me"
                        src="https://res.cloudinary.com/draig/image/upload/v1688837285/draig-page/jmdbxm9flbma5aqkpyn7.jpg"
                        style={{
                          width: "48px",
                          height: "45px",
                          marginTop: "-1.6rem",
                          border: "2px solid black",
                          borderRadius: "15px",
                        }}
                      />
                    </a>
                    <a
                      href="https://open.spotify.com/playlist/3EktJGDMXPr9QO0aM7XJvN"
                      className="spotify social"
                      target="blank"
                    >
                      <FontAwesomeIcon icon={faSpotify} size="3x" />
                    </a>
                    <a
                      href="https://www.instagram.com/nitdraig"
                      className="instagram social"
                      target="blank"
                    >
                      <FontAwesomeIcon icon={faInstagram} size="3x" />
                    </a>
                    <a
                      href="https://music.apple.com/ar/artist/draig/693163951"
                      className="itunes social"
                      target="blank"
                    >
                      <FontAwesomeIcon icon={faItunes} size="3x" />
                    </a>{" "}
                    <div style={{ marginTop: "3em" }}>
                      {" "}
                      <p>
                        Para cualquier clase de contacto profesional: Instagram
                      </p>
                    </div>
                  </div>
                </Col>
                <Col>
                  <Carousel>
                    <Carousel.Item>
                      <img
                        className="d-block w-100"
                        src="https://res.cloudinary.com/draig/image/upload/v1688837280/draig-page/vv4oxb2pi55bqqiubdby.jpg"
                        alt="Draig_Photo_gallery 1"
                      />
                      <Carousel.Caption></Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                      <img
                        className="d-block w-100"
                        src="https://res.cloudinary.com/draig/image/upload/v1688837280/draig-page/eiovyjmgxyqsavxach0z.jpg"
                        alt="Draig_Photo_gallery 2"
                      />

                      <Carousel.Caption></Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                      <img
                        className="d-block w-100"
                        src="https://res.cloudinary.com/draig/image/upload/v1688837285/draig-page/m6mbjm0eq0mkvfsotzed.png"
                        alt="Draig_Photo_gallery 3"
                      />

                      <Carousel.Caption></Carousel.Caption>
                    </Carousel.Item>
                  </Carousel>
                </Col>
              </Row>
            </div>
          )}
        </TrackVisibility>
      </Container>
    </section>
  );
};
