import { Col, Button } from "react-bootstrap";

export const ProjectDisk = ({
  title,
  description,
  imgUrl,
  linkYoutube,
  linkSpotify,
}) => {
  return (
    <Col sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span> <br />
          <a href={linkYoutube} target="blank">
            {" "}
            <Button variant="dark" style={{ margin: "1em" }}>
              Escuchar en Youtube
            </Button>{" "}
          </a>
          <a href={linkSpotify} target="blank">
            <Button variant="dark" style={{ margin: "1em" }}>
              Escuchar en Spotify
            </Button>
          </a>
        </div>
      </div>
    </Col>
  );
};
