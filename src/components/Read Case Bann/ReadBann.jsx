import { Col, Container, Row } from "react-bootstrap"
import "./readbann.css"
import one from "../../assets/read/one.png"

const ReadBann = () => {
    return (
        <section id="readbann">
            <Container>
                <Row >
                    <Col lg={10} className="mx-auto">
                        <div className="readbann_head">
                            <h4>Web design and development</h4>
                            <h2>Finsweet Design case studies</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                                voluptate velit esse.</p>
                        </div>
                    </Col>
                    <Col lg={10} className="mx-auto">
                        <div className="readbann_img">
                            <img src={one} alt="one" />
                        </div>
                    </Col>
                </Row>
                <div className="text-danger border-bottom about_btn">
                    <Row className="text-center">
                        <Col lg={4} sm={6} md={4}>
                            <div className="ban_btn_text">
                                <p>Client</p>
                                <h4>facebook.com</h4>
                            </div>
                        </Col>
                        <Col lg={4} sm={6} md={4}>
                            <div className="ban_btn_text">
                                <p>Service</p>
                                <h4>Product Design</h4>
                            </div>
                        </Col>
                        <Col lg={3} md={4}>
                            <div className="ban_btn_text">
                                <p>Deliverable</p>
                                <h4>UI Screens, UX Flow & Prototype</h4>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </section>
    )
}

export default ReadBann