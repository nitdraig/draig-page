import { Col, Button } from "react-bootstrap";

export const ProjectOther = ({
  title,
  description,
  imgUrl,
  linkAmazon,
  linkOthers,
}) => {
  return (
    <Col sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt="book_image" />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span> <br />
          <Button href={"/book"} variant="dark" style={{ marginTop: "1em" }}>
            Ver más
          </Button>
        </div>
      </div>
    </Col>
  );
};
