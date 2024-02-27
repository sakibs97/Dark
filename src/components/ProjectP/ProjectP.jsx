import { Col, Container, Row } from "react-bootstrap"
import { FaArrowRight } from "react-icons/fa";
import "./projectP.css"
import card from "../../assets/card/card.png"
import card2 from "../../assets/card/card2.png"
import card3 from "../../assets/card/card3.png"

function ProjectP() {
    return (
        <section id="projectP">
            <Container>
                <Row className="prjct_part">
                    <Col lg={6} xs={12} sm={8}>
                        <div className="card_head">
                            <h2>View our projects</h2>
                        </div>
                    </Col>
                    <Col lg={2} xs={6} sm={4}>
                        <div className="card_head">
                            <a href="#">View More <FaArrowRight /></a>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col lg={8} xs={12}>
                        <div className="card_img">
                            <img src={card} alt="card" />
                            <div className="overlay">
                            </div>
                            <div className="overlay_text">
                                <h2>Workhub office Webflow</h2>
                                <h2>Webflow Design</h2>
                                <p>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam </p>
                                <a href="#">View project <FaArrowRight /></a>
                            </div>
                        </div>
                    </Col>
                    <Col lg={4} xs={12} sm={12}>
                        <div className="card_btn">
                            <div className="card_img_one">
                                <img src={card2} alt="card2" />
                                <div className="img_one_text">
                                    <div className="one_text">
                                        <h2>Unisaas Website Design</h2>
                                        <a href="#">View portfolio <FaArrowRight /></a>
                                    </div>
                                </div>
                            </div>
                            <div className="card_img_one">
                                <img src={card3} alt="card3" />
                                <div className="img_one_text">
                                    <div className="one_text">
                                        <h2>Unisaas Website Design</h2>
                                        <a href="#">View portfolio <FaArrowRight /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default ProjectP