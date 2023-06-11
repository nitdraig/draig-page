// import { useState } from "react";
// import { Container, Col, Row } from "react-bootstrap";

// export const Contact = () => {
//   const formInitialDetails = {
//     firstName: "",
//     lastName: "",
//     email: "",
//     phone: "",
//     message: "",
//   };

//   const [formDetails, setFormDetails] = useState(formInitialDetails);
//   const [buttonText, setButtonText] = useState("send");
//   const [status, setStatus] = useState({});

//   const onFormUpdate = (category, value) => {
//     setFormDetails({
//       ...formDetails,
//       [category]: value,
//     });
//   };

//   const handlesSubmit = async (e) => {
//     e.preventDefault();
//     setButtonText("Enviando...");
//     let response = await fetch("http://localhost:5000/contact", {
//       method: "POST",
//       headers: {
//         "Content-Type": "Application/json;charset=utf-8",
//       },
//       body: JSON.stringify(formDetails),
//     });
//     setButtonText("Send");
//     let result = response.json();
//     setFormDetails(formInitialDetails);
//     if (result.code === 200) {
//       setStatus({ success: true, message: "Mensaje enviado correctamente" });
//     } else {
//       setStatus({
//         success: false,
//         message:
//           "Error al enviar mensaje, por favor intente nuevamente en un minuto ",
//       });
//     }
//   };
//   return (
//     <section className="contact" id="contacto">
//       <Container>
//         <Row className="align-items-center">
//           <Col md={6}>
//             <img src="" alt="Contacta conmigo"></img>
//           </Col>
//           <Col md={6}>
//             <h2>Contactame</h2>
//             <form onSubmit={handlesSubmit}>
//               <Row>
//                 <Col sm={6} className="px-1">
//                   <input
//                     type="text"
//                     value={formDetails.firstName}
//                     placeholder="Nombre"
//                     onChange={(e) => onFormUpdate("firstName", e.target.value)}
//                   />
//                   <input
//                     type="text"
//                     value={formDetails.lastName}
//                     placeholder="Apellido"
//                     onChange={(e) => onFormUpdate("firstName", e.target.value)}
//                   />
//                   <input
//                     type="text"
//                     value={formDetails.email}
//                     placeholder="Email"
//                     onChange={(e) => onFormUpdate("lastName", e.target.value)}
//                   />
//                   <input
//                     type="text"
//                     value={formDetails.phone}
//                     placeholder="Telefono"
//                     onChange={(e) => onFormUpdate("phone", e.target.value)}
//                   />
//                 </Col>
//                 <Col>
//                   <textarea
//                     row="6"
//                     value={formDetails.phone}
//                     placeholder="¿En que puedo ayudarte?"
//                     onChange={(e) => onFormUpdate("message", e.target.value)}
//                   ></textarea>
//                   <button type="submit">
//                     <span>{buttonText}</span>
//                   </button>
//                 </Col>

//                 {status.message && (
//                   <Col>
//                     {" "}
//                     <p
//                       className={
//                         status.success === false ? "danger" : "success"
//                       }
//                     >
//                       {status.message}
//                     </p>
//                   </Col>
//                 )}
//               </Row>
//             </form>
//           </Col>
//         </Row>
//       </Container>
//     </section>
//   );
// };
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram,
  faSpotify,
  faItunes,
} from "@fortawesome/free-brands-svg-icons";
import ImgContact from ".././../assets/img/10.png";

import Carousel from "react-bootstrap/Carousel";
import img1 from "../../assets/img/1.jpg";
import img2 from "../../assets/img/2.jpg";
import img3 from "../../assets/img/3.jpg";
import img4 from "../../assets/img/4.jpeg";
import show4 from "../../assets/img/show4me.jpg";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Contact = () => {
  return (
    <section className="contact" id="contact">
      <Container>
        <TrackVisibility>
          {({ isVisible }) => (
            <div
              className={
                isVisible ? "animate__animated animate__fadeInDown" : ""
              }
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
                        src={show4}
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
                        src={img1}
                        alt="First slide"
                      />
                      <Carousel.Caption></Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                      <img
                        className="d-block w-100"
                        src={img2}
                        alt="Second slide"
                      />

                      <Carousel.Caption></Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                      <img
                        className="d-block w-100"
                        src={img3}
                        alt="Third slide"
                      />

                      <Carousel.Caption></Carousel.Caption>
                    </Carousel.Item>
                  </Carousel>
                </Col>
              </Row>{" "}
            </div>
          )}
        </TrackVisibility>
      </Container>
    </section>
  );
};
