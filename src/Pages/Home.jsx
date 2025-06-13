import { Card, Container, Row, Col } from "react-bootstrap";


export default function Home(){

    return(
        <>
        <div className="bg-success p-5 text-white">
        <h1 className="text-center">Välkommen till Startsidan</h1>
        <h3 className="mb-5 text-center">Studentportalen som stöttar din utbildning!</h3>
        </div>
        <Container className="mt-4">
        <h4 className="text-center mb-5 mt-4 text-success">Läs mer om vad som är viktigt för oss!</h4>
        <Row>
        <Col xs={12} md={4} className="d-flex justify-content-center mb-4">
        <Card style={{width: '300px'}}>
            <Card.Img style = {{width: '300px'}} src="/src/assets/pexels-kobeboy-1516440.jpg"></Card.Img>
            <Card.Body>
                <Card.Title>Gemenskap</Card.Title>
                <Card.Text>Träffa dina skolkamrater och skapa minnen tillsammans!</Card.Text>
            </Card.Body>
        </Card>
        </Col>
        <Col xs={12} md={4} className="d-flex justify-content-center mb-4">
        <Card style={{width: '300px'}}>
            <Card.Img style = {{width: '300px'}} src="/src/assets/pexels-buro-millennial-636760-1438072.jpg"></Card.Img>
            <Card.Body>
                <Card.Title>Framtid</Card.Title>
                <Card.Text>Skapa din framtid hos oss! </Card.Text>
            </Card.Body>
        </Card>
        </Col>
        <Col xs={12} md={4} className="d-flex justify-content-center mb-4">
        <Card style={{width: '300px'}}>
            <Card.Img style = {{width: '300px'}} src="/src/assets/pexels-olly-3762800.jpg"></Card.Img>
            <Card.Body>
                <Card.Title>Trygghet</Card.Title>
                <Card.Text>Våra utbildningar är CSN-berättigade!</Card.Text>
            </Card.Body>
        </Card>
        </Col>
        </Row>
        </Container>
        
        </>
    );
}

