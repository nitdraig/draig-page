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
          <Button
            variant="dark"
            href={linkYoutube}
            target="blank"
            style={{ margin: "1em" }}
          >
            Escuchar en Youtube
          </Button>{" "}
          <Button
            variant="dark"
            href={linkSpotify}
            target="blank"
            style={{ margin: "1em" }}
          >
            Escuchar en Spotify
          </Button>
        </div>
      </div>
    </Col>
  );
};
