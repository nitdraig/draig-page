import { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { ArrowDownRightCircle } from "react-bootstrap-icons";
import headerImg from "../../assets/img/This-is-draig.jpg";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = ["mi arte es placebo para el alma..."];
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() + 100);
  const period = 2000;
  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);
    return () => {
      clearInterval(ticker);
    };
  }, [text]);
  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);
    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }
    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__pulse" : ""
                  }
                >
                  <h1>
                    {"No es música, "} <span className="wrap">{text}</span>
                  </h1>
                  <p>
                    {" "}
                    Compositor, productor, y artista en desarrollo. <br />{" "}
                    Fundador de Tinta Negra Studios, un Room Studio, en busca de
                    hacer producciones audiovisuales de todo tipo y en gran
                    escala. <br /> No soy un artista completo, no aún, estoy en
                    proceso, de aprender, de equivocarme y con la firme creencia
                    en mí. <br /> <em>Voy por todo, y más.</em>
                  </p>{" "}
                  <a href="#contact">
                    <button>
                      Mis redes <ArrowDownRightCircle size={25} />
                    </button>{" "}
                  </a>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={headerImg} alt="header image" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};
