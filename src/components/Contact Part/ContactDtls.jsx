import { Col, Container, Row, Form } from "react-bootstrap"
import "./contactDtls.css"


const ContactDtls = () => {
    return (
        <section id="contactDtls">
            <Container>
                <Row className="justify-content-center">
                    <Col lg={6} className="text-center">
                        <div className="cntct_head">
                            <h2>Contact Us</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                labore.</p>
                        </div>
                    </Col>
                </Row>

                <div className="contact_dtls">
                    <Row className="justify-content-center">
                        <Col lg={4} className="mb-3">
                            <h2>Name</h2>
                            <input type="text" className="form-control" placeholder="Enter your name"
                                aria-label="Enter your name" />
                        </Col>
                        <Col lg={4}>
                            <h2>Email</h2>
                            <input type="text" className="form-control" placeholder="Enter your Email"
                                aria-label="Enter your Email" />
                        </Col>
                    </Row>
                    <Row className="justify-content-center">
                        <Col lg={4}>
                            <h2>Subject</h2>
                            <input type="text" className="form-control" placeholder="Provide context"
                                aria-label="Provide context" />
                        </Col>
                        <Col lg={4}>
                            <h2>Subject</h2>
                            <input type="text" className="form-control" placeholder="Select Subject"
                                aria-label="Select Subject" />
                        </Col>
                    </Row>
                    <Row className="justify-content-center">
                        <Col lg={8} >
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Message</Form.Label>
                                <Form.Control as="textarea" placeholder="Write your  question here" rows={3} />
                            </Form.Group>
                            <div className="cntct_send">
                                <button>Send Message</button>
                            </div>
                        </Col>
                    </Row>
                </div>

            </Container>
        </section>
    )
}

export default ContactDtls