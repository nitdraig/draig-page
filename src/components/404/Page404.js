import { Button, Container } from "react-bootstrap";
import style from "././../404/404.style.css";
import { Link } from "react-router-dom";
import "animate.css";
import TrackVisibility from "react-on-screen";
const Page404 = () => {
  return (
    <Container class="vertical-center" style={{ marginTop: "11em" }}>
      <TrackVisibility>
        {({ isVisible }) => (
          <div className={isVisible ? "animate__animated animate__flip" : ""}>
            <div id="notfound" class="text-center">
              <h1>404 😮</h1>
              <h2>Oops! Page Not Be Found</h2>
              <p>Lo sentimos pero la página que buscas no existe.</p>

              <Button
                href="/"
                variant="outline-light"
                style={{ marginTop: "2em" }}
              >
                Volver a página principal
              </Button>
            </div>
          </div>
        )}
      </TrackVisibility>
    </Container>
  );
};

export default Page404;
