import { Col, Container, Row } from "react-bootstrap"
import "./share.css"
import share from "../../assets/about/share.png"
import share2 from "../../assets/about/share2.png"

function Shaer() {
    return (
        <section id="share">
            <Container>
                <div className="share_up">
                    <Row className="justify-content-between">
                        <Col lg={6}>
                            <div className="share_dtls">
                                <h3>Our Mission </h3>
                                <h2>Inspire, Innovate,Share</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                    ut
                                    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                    ullamco
                                    laboris nisi ut aliquip ex ea commodo consequat.</p>
                            </div>
                        </Col>
                        <Col lg={5}>
                            <div className="share_img">
                                <img src={share} alt="share" />
                            </div>
                        </Col>
                    </Row>
                </div>
                <div className="share_down">
                    <Row>
                        <Col lg={5}>
                            <div className="share_img">
                                <img src={share2} alt="share2" />
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className="share_dtls">
                                <h3>Our Vision</h3>
                                <h2>Laser focus</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                    ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                    ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </section>
    )
}

export default Shaer