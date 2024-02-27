import { Col, Container, Row } from "react-bootstrap"
import "./benefits.css"
import { GiNotebook } from "react-icons/gi";
import { FaPencilRuler } from "react-icons/fa";
import { BsPeopleFill } from "react-icons/bs";
import Number from "../../assets/about/logo/Number.png"
import Logo1 from "../../assets/about/logo/Logo1.png"
import Logo2 from "../../assets/about/logo/Logo2.png"
import Logo3 from "../../assets/about/logo/Logo3.png"
import Logo4 from "../../assets/about/logo/Logo4.png"
import Logo5 from "../../assets/about/logo/Logo5.png"

function Benefits() {
    return (
        <section id="benefits">
            <Container>
                <Row className="justify-content-center text-center mb-3">
                    <Col lg={5} >
                        <div className="bnft_head">
                            <h2>The benefits of working with us</h2>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col lg={4} sm={6}>
                        <div className="bnft_dtls">
                            <a href="#"><GiNotebook className="bnft_icon" /></a>
                            <h2>Customize with ease</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                labore et dolore magna aliqua ut enim.</p>
                        </div>
                    </Col>
                    <Col lg={4} sm={6}>
                        <div className="bnft_dtls">
                            <a href="#"><FaPencilRuler className="bnft_icon" /></a>
                            <h2>Customize with ease</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                labore et dolore magna aliqua ut enim.</p>
                        </div>
                    </Col>
                    <Col lg={4}>
                        <div className="bnft_dtls">
                            <a href="#"><BsPeopleFill className="bnft_icon" /></a>
                            <h2>Customize with ease</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                labore et dolore magna aliqua ut enim.</p>
                        </div>
                    </Col>
                </Row>
                <div className="benefits_logo">
                    <Row>
                        <Col lg={2} xs={6} sm={4}>
                            <div className="logo_iteam">
                                <a href="#"><img src={Number} alt="Number" /></a>
                            </div>
                        </Col>
                        <Col lg={2} xs={6} sm={4}>
                            <a href="#"><img src={Logo1} alt="Logo1" /></a>
                        </Col>
                        <Col lg={2} xs={6} sm={4}>
                            <a href="#"><img src={Logo2} alt="Logo2" /></a>
                        </Col>
                        <Col lg={2} xs={6} sm={4}>
                            <a href="#"><img src={Logo3} alt="Logo3" /></a>
                        </Col>
                        <Col lg={2} xs={6} sm={4}>
                            <a href="#"><img src={Logo4} alt="Logo4" /></a>
                        </Col>
                        <Col lg={2} xs={6} sm={4}>
                            <a href="#"><img src={Logo5} alt="Logo6" /></a>
                        </Col>
                    </Row>
                </div>
            </Container>
        </section>
    )
}

export default Benefits
