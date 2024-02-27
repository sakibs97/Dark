import { Col, Container, Row } from "react-bootstrap"
import "./about.css"
import about from "../../assets/about/about.png"

function About() {
    return (
        <section id="about">
            <Container>
                <Row className="justify-content-between">
                    <Col lg={5} sm={6} md={6}>
                        <div className="about_text">
                            <h3>About us</h3>
                            <h2>Our designs solve problems</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                        </div>
                    </Col>
                    <Col lg={5} sm={6} md={6}>
                        <div className="col-lg-5">
                            <div className="about_img">
                                <img src={about} className="about_img" alt="about" />
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default About