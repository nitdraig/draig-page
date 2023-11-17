import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import style from "./../mybook/MyBook.style.css";
import "animate.css";

const MyBook = () => {
  return (
    <div className={"animate__animated animate__rollIn"}>
      <section className="banner__book">
        <Container className="banner-info__book">
          <Button href="/" className="button__back">
            Volver
          </Button>

          <Container>
            <Row className="justify-content-center">
              <Col xs={12} sm={5}>
                <img
                  src="https://res.cloudinary.com/draig/image/upload/v1688837281/draig-page/kixgjneuvdurbaadspqx.jpg"
                  className="img_Book"
                  alt="día 13, el gato negro y otras locuras portada"
                />
              </Col>{" "}
              <Col xs={12} sm={7} className="text-center">
                <h2 className="banner-tittle__book">
                  <em>Día 13, el gato negro de ojos azules y otras locuras.</em>
                </h2>
                <p>
                  Mi primer libro, vio la luz el 24 de agosto del 2019. Trata de
                  una recopilación de cuentos, poemas, relatos, vivencias,
                  reflexiones y delirios, escritos con una fuerza sentimental y
                  personal muy grande.
                  <br />
                  Puede conseguirse, de momento, en Amazon en formato E-book y
                  físico. Espero sea de tu agrado y puedas hacerme saber que
                  llegaste a leerlo.
                  <br />
                  Me tomó más de 3 años este proyecto. No es fácil desnudar tu
                  alma sin saber quién llegaría a leerlo y cómo podría ser
                  interpretado, aún así me tomé ese atrevimiento, en mi humilde
                  repaso de ideas, conocimientos e historias en diversos
                  formatos. Espero puedas encontrarle el valor en tu lectura.
                  <br />
                  Gracias por tu atención.
                </p>
              </Col>
              <Col xs={12} className="text-center" style={{}}>
                <a
                  href="https://www.amazon.com/dp/1687540241"
                  className="click-me__book"
                  target="blank"
                >
                  Ver en Amazon
                </a>
                <a
                  className="click-me__book"
                  style={{ cursor: "notAllowed", opacity: " 0.6" }}
                >
                  Otros
                </a>
              </Col>
            </Row>
          </Container>
        </Container>
      </section>
    </div>
  );
};

export default MyBook;
