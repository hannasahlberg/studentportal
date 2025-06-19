import { Container, Row, Col } from "react-bootstrap";
import CourseCard from "../Components/CourseCard";
import Register from "./Register";
import RegistrationForm from "../Components/RegistrationForm";


const courses = [
  {
    title: "Systemutvecklare",
    description:
      "Lär dig att designa, bygga och underhålla mjukvarusystem med fokus på programmering, databaser och systemarkitektur.",
    image: "/src/assets/pexels-kobeboy-1516440.jpg",
    link: "/courses/systemutvecklare",
  },
  {
    title: "Grafisk Design",
    description:
      "Utforska visuell kommunikation genom färg, form och typografi. Du lär dig skapa design för både tryck och digitala medier.",
    image: "/src/assets/pexels-kobeboy-1516440.jpg",
    link: "/courses/grafisk designer",
  },
  {
    title: "Frontendutvecklare",
    description:
      "Bygg moderna webbgränssnitt med HTML, CSS och JavaScript. Fokus ligger på användarupplevelse och responsiv design.",
    image: "/src/assets/pexels-kobeboy-1516440.jpg",
    link: "/courses/frontendutvecklare",
  },
];

export default function Courses() {
  return (
    <>
      <div className="bg-success p-5 text-white">
        <h1 className="text-center">Kurser</h1>
      </div>
      <Container className="p-5 mt-4 border-bottom">
        <Row>
          {courses.map((course, index) => (
            <Col md={4} key={index}>
              <CourseCard {...course} />
            </Col>
          ))}
        </Row>
      </Container>
      <RegistrationForm/>
      <Register />
    </>
  );
}