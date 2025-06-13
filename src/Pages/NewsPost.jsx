import { useState, useEffect } from 'react';
import { Card, Container, Row, Col } from "react-bootstrap";

export default function News(){
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => {
            if(!response.ok) {
                throw new Error('Något gick fel vid hämtning av data')
            }
            return response.json();
        })
        .then((data) => {
            setData(data);
            setLoading(false);
        })
        .catch((error) => {
            setError(error.message);
            setLoading(false);
        });
    }, []);

    if(loading) return <p>Laddar...</p>
    if(error) return <p>Fel: {error}</p>

    return(
        <>
        <div className="bg-success p-5 text-white text-center">
            <h1>Nyheter</h1>     
            <h4>Vill du veta mer om dina lärare och skolkamrater? Läs deras inlägg!</h4>
        </div>
        <Container fluid className="my-5">
            <Row className="justify-content-center">
            <Col md={3}>
        <Card className="mb-5 mx-auto" style={{width: '300px'}}>
            <Card.Img style = {{width: '300px'}} src="/src/assets/pexels-olly-3769021 (1).jpg"></Card.Img>
            <Card.Body>
                <Card.Title>Tiden efter examen</Card.Title>
                <Card.Text>Läs om Sophies resa från examen till drömjobbet!</Card.Text>
            </Card.Body>
        </Card>
        <Card className="mb-5 mx-auto" style={{width: '300px'}}>
            <Card.Img style = {{width: '300px'}} src="/src/assets/pexels-vantha-thang-1224068-2513993.jpg"></Card.Img>
            <Card.Body>
                <Card.Title>Vägen till stipendiet</Card.Title>
                <Card.Text>Kim var en av få i Sverige som fick det välkända stipendiet.</Card.Text>
            </Card.Body>
        </Card>
        <Card className="mb-5 mx-auto" style={{width: '300px'}}>
            <Card.Img style = {{width: '300px'}} src="/src/assets/pexels-sevenstormphotography-439391.jpg"></Card.Img>
            <Card.Body>
                <Card.Title>Nya studentlägenheter</Card.Title>
                <Card.Text>Se de exklusiva bilderna inifrån de nybyggda studentlägenheterna!</Card.Text>
            </Card.Body>
        </Card>
        </Col>
                <Col md={8}>
                
                {data.slice(0, 10).map((post) => (
                    <Card key={post.id} className='mb-4 border-success'>
                        <Card.Body>
                            <Card.Title>{post.title}</Card.Title>
                            <Card.Text>{post.body}</Card.Text>
                        </Card.Body>
                    </Card>
                ))}
                </Col>
        
            </Row>
        </Container>
        </>

    )
}

