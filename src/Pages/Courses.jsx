import { Card, Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Register from '../Components/Register';

export default function Courses(){

    return(
        <>
        <div className="bg-success p-5 text-white">
        <h1 className='text-center'>Kurser</h1>
        </div>
        <Container className="p-5 mt-4 border-bottom">
        
        <Row>
        <Col md={4}>
        <Card className="mb-5 mx-auto" style={{width: '300px'}}>
            <Card.Img style = {{width: '300px'}} src="/src/assets/pexels-kobeboy-1516440.jpg"></Card.Img>
            <Card.Body>
                <Card.Title>Systemutvecklare</Card.Title>
                <Card.Text>Lär dig att designa, bygga och underhålla mjukvarusystem med fokus på programmering, databaser och systemarkitektur. </Card.Text>
                <div className="d-flex justify-content-center">
                <Link to={'/courses/systemutvecklare'}>
                <Button variant="success">Läs mer</Button>
                </Link>
                </div>
            </Card.Body>
        </Card>
        </Col>
        <Col md={4}>
        <Card className="mb-5 mx-auto" style={{width: '300px'}}>
            <Card.Img style = {{width: '300px'}} src="/src/assets/pexels-kobeboy-1516440.jpg"></Card.Img>
            <Card.Body>
                <Card.Title>Grafisk Design</Card.Title>
                <Card.Text>Utforska visuell kommunikation genom färg, form och typografi. Du lär dig skapa design för både tryck och digitala medier.
            </Card.Text>
                <div className="d-flex justify-content-center">
                <Link to={'/courses/grafisk designer'}>
                <Button variant="success">Läs mer</Button>
                </Link>
                </div>
            </Card.Body>
        </Card>
        </Col>
        <Col md={4} >
        <Card className="mb-5 mx-auto" style={{width: '300px'}}>
            <Card.Img style = {{width: '300px'}} src="/src/assets/pexels-kobeboy-1516440.jpg"></Card.Img>
            <Card.Body>
                <Card.Title>Frontendutvecklare</Card.Title>
                <Card.Text>Bygg moderna webbgränssnitt med HTML, CSS och JavaScript. Fokus ligger på användarupplevelse och responsiv design.</Card.Text>
                <div className="d-flex justify-content-center">
                <Link to={'/courses/frontendutvecklare'}>
                <Button variant="success">Läs mer</Button>
                </Link>
                </div>
                
            </Card.Body>
        </Card>
        </Col>
        </Row>
        </Container>
        <Register/>
        </>
    )
}