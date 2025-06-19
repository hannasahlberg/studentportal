import { Card } from "react-bootstrap";

export default function NewsPost({ title, body }) {
  return (
    <Card className="mb-4 border-success">
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{body}</Card.Text>
      </Card.Body>
    </Card>
  );
}