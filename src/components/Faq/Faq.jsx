import { Col, Container, Row, Accordion } from "react-bootstrap"
import "./faq.css"

function Faq() {
    return (
        <section id="faqq">
            <Container>
                <Row>
                    <Col lg={4}>
                        <div className="faq_head">
                            <h2>Frequently asked questions</h2>
                            <a href="#">Contact us For More Info </a>
                        </div>
                    </Col>
                    <Col lg={8}>
                        <Accordion>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>
                                    <a href="#">01</a>
                                    <h2>How much time does it take ?</h2>
                                </Accordion.Header>
                                <Accordion.Body>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna aliqua.</p>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>
                                    <a href="#">02</a>
                                    <h2>What is your class naming convention?</h2>
                                </Accordion.Header>
                                <Accordion.Body>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna aliqua.</p>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header>
                                    <a href="#">03</a>
                                    <h2>How do you communicate?</h2>
                                </Accordion.Header>
                                <Accordion.Body>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna aliqua.</p>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="3">
                                <Accordion.Header>
                                    <a href="#">04</a>
                                    <h2>I have a bigger project. Can you handle it?</h2>
                                </Accordion.Header>
                                <Accordion.Body>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna aliqua.</p>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="4">
                                <Accordion.Header>
                                    <a href="#">05</a>
                                    <h2>What is your class naming convention?</h2>
                                </Accordion.Header>
                                <Accordion.Body>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna aliqua.</p>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Faq