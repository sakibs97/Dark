import { Col, Container, Row } from "react-bootstrap"
import "./workbanner.css"
import { FaFacebook, FaInstagramSquare, FaLinkedin } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io";

const WorkBanner = () => {
    return (
        <section id="workbaner">
            <Container>
                <Row className="text-center justify-content-center">
                    <Col lg={6}>
                        <div className="baner_text">
                            <p>What we created</p>
                            <h2>Our Work Portfolio</h2>
                            <p>We help teams create great digital products by providing them with tools and technology to
                                make the design-to-code process universally accessible.</p>
                            <span>
                                <a href="#"><FaFacebook /></a>
                                <a href="#"><FaInstagramSquare /></a>
                                <a href="#"><IoLogoTwitter /></a>
                                <a href="#"><FaLinkedin /></a>
                            </span>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default WorkBanner