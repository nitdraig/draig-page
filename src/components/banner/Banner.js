import { useState, useEffect } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { ArrowDownRightCircle } from "react-bootstrap-icons";
// import headerImg from "../../assets/img/This-is-draig.jpg";
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
                    DRAIG, detrás de este nombre se encuentra un compositor,
                    productor y escritor, con una pasión desbordante por el
                    arte. <br /> DRAIG ha dejado su huella en la industria
                    musical con su música en Spotify y otras plataformas. <br />{" "}
                    Además de música, DRAIG también ha incursionado en la
                    escritura, contando con un libro publicado en Amazon. <br />{" "}
                    Fundador de <em>Tinta Negra Studios,</em> dedicado a crear
                    producciones audiovisuales de todo tipo.
                  </p>{" "}
                  <div style={{ paddingTop: "1em" }}>
                    {" "}
                    <Button variant="outline-light" href="#contact">
                      Mis redes <ArrowDownRightCircle size={25} />
                    </Button>
                  </div>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img
              src="https://res.cloudinary.com/draig/image/upload/v1688837279/draig-page/lslfxnpqj6kwdpe8bcsu.jpg"
              alt="Draig image"
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};
