import { Col, Container, Row } from "react-bootstrap"
import "./banner.css"
import bann from "../../assets/banner/Illustration.png"
import { FaArrowRight } from "react-icons/fa";

function Banner() {
    return (
        <section id="banner">
            <Container>
                <Row className="ban_part">
                    <Col lg={5} xs={12} sm={12}>
                        <div className="ban_text">
                            <h1>Building stellar websites for early startups</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                            <div className="ban_btn">
                                <a href="#">View our work</a>
                                <a href="#">View Pricing <FaArrowRight /></a>
                            </div>
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div className="banner_img">
                            <img src={bann} alt="bann" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Banner