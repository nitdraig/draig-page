import { Col, Button } from "react-bootstrap";

export const ProjectCard = ({
  title,
  description,
  imgUrl,
  linkYoutube,
  linkSpotify,
}) => {
  return (
    <Col sm={8} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt="song_photo" />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span> <br />
          <Button
            variant="dark"
            href={linkYoutube}
            target="_blank"
            style={{ margin: "1em" }}
          >
            Escuchar en Youtube
          </Button>
          <Button
            variant="dark"
            href={linkSpotify}
            target="_blank"
            style={{ margin: "1em" }}
          >
            Escuchar en Spotify
          </Button>
        </div>{" "}
      </div>
    </Col>
  );
};
