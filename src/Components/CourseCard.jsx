import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function CourseCard({ title, description, image, link }) {
  return (
    <Card className="mb-5 mx-auto" style={{ width: '300px' }}>
      <Card.Img style={{ width: '300px' }} src={image} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <div className="d-flex justify-content-center">
          <Link to={link}>
            <Button variant="success">Läs mer</Button>
          </Link>
        </div>
      </Card.Body>
    </Card>
  );
}