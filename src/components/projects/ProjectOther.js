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
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span> <br />
          <a href={"/book"}>
            {" "}
            <Button variant="dark" style={{ marginTop: "1em" }}>
              Ver más
            </Button>
          </a>
        </div>
      </div>
    </Col>
  );
};
