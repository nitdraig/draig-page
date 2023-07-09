import { Container, Row, Col, Nav, Tab } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import { ProjectDisk } from "./ProjectDisk";
import { ProjectOther } from "./ProjectOther";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      title: "Preso",
      description:
        "Un single con sonidos pop y r&b cuenta con un videoclip exclusivo, en camara: @baloccolara, producción en TNS.",
      imgUrl:
        "https://res.cloudinary.com/dcu06etml/image/upload/v1688837286/draig-page/qxaj5odhphe224papm42.png",
      linkYoutube: "https://www.youtube.com/watch?v=iQr6ueWlUSM",
      linkSpotify:
        "https://open.spotify.com/track/3WtHGino4B9RN8Hqv5lKc4?si=641ce5c819444b11",
    },
    {
      title: "La llama y cuelga",
      description:
        "Un single con sonido urbano. Cuenta con un videolyrics en youtube. Edición de portada por: @ig.explicit, producción en TNS.",
      imgUrl:
        "https://res.cloudinary.com/dcu06etml/image/upload/v1688837283/draig-page/oqxdrzupalvtrta12xom.jpg",
      linkYoutube: "https://www.youtube.com/watch?v=N6g4GybFABM",
      linkSpotify:
        "https://open.spotify.com/track/7bsbRED4DDOESZMBENTu6f?si=d07ae8ac2c46474e",
    },
    {
      title: "Alas de hielo",
      description:
        "Un R&B con sonidos de rock, blues y Hip Hop. Cuenta con videoclip exclusivo, en cámara: @_santiagocastroph_, producción en TNS. ",
      imgUrl:
        "https://res.cloudinary.com/dcu06etml/image/upload/v1688837281/draig-page/kaqecvvrykawweeoqfjq.jpg",
      linkYoutube: "https://www.youtube.com/watch?v=Do1RXEIzg7I",
      linkSpotify:
        "https://open.spotify.com/track/4Nu9XCSyBvel2P8jAEj9bk?si=02fc2ec1f36e4fbb",
    },
    {
      title: "No quiero pensarte más",
      description:
        "Un single que mezcla r&b y rock. Cuenta con videoclip exclusivo, en cámara: @_santiagocastroph_, producción en TNS. ",
      imgUrl:
        "https://res.cloudinary.com/dcu06etml/image/upload/v1688837285/draig-page/hzdmlzbtfcsq2ebx7gzz.png",
      linkYoutube: "https://www.youtube.com/watch?v=NqLd68NlTMw",
      linkSpotify:
        "https://open.spotify.com/track/0FpDCM5eLfH7GgcYziGk3C?si=db346322ce8d42f0",
    },
    {
      title: "A.F.U.E.R.A",
      description: "Single, estilo SynthPop videolyric disponible en youtube.",
      imgUrl:
        "https://res.cloudinary.com/dcu06etml/image/upload/v1688837285/draig-page/jws1bjwbchc3libmknz2.jpg",
      linkYoutube: "https://www.youtube.com/watch?v=RJR9m0Pv1pw",
      linkSpotify:
        "https://open.spotify.com/track/54Fx8RkU61awu1Ncv9O2j3?si=e81e06e96c944902",
    },
    {
      title: "Cuídate",
      description:
        "Este single cuenta con un VideoLyrics que hace uso de imágenes del anime 'Katanagatari'.",
      imgUrl:
        "https://res.cloudinary.com/dcu06etml/image/upload/v1688837281/draig-page/r0v5qlubbfp5ddoaqjji.png",
      linkYoutube: "https://www.youtube.com/watch?v=NjYLlfPASRU",
      linkSpotify:
        "https://open.spotify.com/track/25XPUTB0lgHgQnd19Jc2IM?si=c560ee8fc9dc4351",
    },
    {
      title: "Lento",
      description: "Single con sonidos r&b y rock, producción en TNS",
      imgUrl:
        "https://res.cloudinary.com/dcu06etml/image/upload/v1688837283/draig-page/kxtbxgkbnelbqxudo0e6.jpg",
      linkYoutube: "https://www.youtube.com/watch?v=iYi3QvQlyTE",
      linkSpotify:
        "https://open.spotify.com/track/6uv64SYDpBzbJufVmT0zjQ?si=e534a99dfba94529",
    },
  ];
  const disks = [
    {
      title: "Placebo",
      description:
        "Este cuenta con 14 temas originales, totalmente nuevos, compuestos, 5 de ellos en colaboración con artistas amigos. Los artistas que forman parte de este disco son: Dack!, Fantom, Blacksin, JTH.",
      imgUrl:
        "https://res.cloudinary.com/dcu06etml/image/upload/v1688837284/draig-page/cx1isnhlt7xqnjly97uj.jpg",
      linkYoutube:
        "https://www.youtube.com/watch?v=ArQ0qf_u_AY&list=PLRJsC_cR7I65SVn9M30uE50LnFngoOtQi&pp=iAQB",
      linkSpotify: "https://open.spotify.com/album/39R0yBlnDxx3L4aJFqZuOS",
    },
  ];
  const others = [
    {
      title: "El gato negro de ojos azules, día 13, y otras locuras",
      description: "Mi primer libro",
      imgUrl:
        "https://res.cloudinary.com/dcu06etml/image/upload/v1688837282/draig-page/bszakuvlbg0uivefbiw5.webp",
    },
  ];
  return (
    <section className="project" id="projects">
      <TrackVisibility>
        {({ isVisible }) => (
          <div className={isVisible ? "animate__animated animate__pulse" : ""}>
            <Container>
              <Row>
                <Col xs={12}>
                  <h2>Para el alma...</h2>
                  <p>
                    No es música, mi arte es placebo para el alma...
                    <br />
                    Poesía, música y vida
                    <br /> ¡Gracias por el apoyo!
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Singles</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Discos</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Más</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__pulse" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          {disks.map((disk, index) => {
                            return <ProjectDisk key={index} {...disk} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        {others.map((other, index) => {
                          return <ProjectOther key={index} {...other} />;
                        })}
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </Col>
              </Row>
            </Container>
          </div>
        )}
      </TrackVisibility>
    </section>
  );
};
