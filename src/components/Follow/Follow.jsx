import { Col, Container, Row } from "react-bootstrap"
import "./follow.css"
import { FaCircle } from "react-icons/fa";
import { HiDotsHorizontal } from "react-icons/hi";

function Follow() {
    return (
        <section id="follow">
            <Container>
                <Row>
                    <Col lg={12}>
                        <div className="follow_head">
                            <h2>The process we follow</h2>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col lg={3} xs={6} sm={6}>
                        <div className="dot">
                            <FaCircle />
                            <div className="span_icon">
                                <HiDotsHorizontal />
                                <HiDotsHorizontal />
                                <HiDotsHorizontal />
                                <HiDotsHorizontal />
                            </div>
                        </div>
                        <div className="flw_text">
                            <h2>Planning</h2>
                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</p>
                        </div>
                    </Col>
                    <Col lg={3} xs={6} sm={6}>
                        <div className="dot">
                            <FaCircle />
                            <div className="span_icon">
                                <HiDotsHorizontal />
                                <HiDotsHorizontal />
                                <HiDotsHorizontal />
                                <HiDotsHorizontal />
                            </div>
                        </div>
                        <div className="flw_text">
                            <h2>Conception</h2>
                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</p>
                        </div>
                    </Col>
                    <Col lg={3} xs={6} sm={6}>
                        <div className="dot">
                            <FaCircle />
                            <div className="span_icon">
                                <HiDotsHorizontal />
                                <HiDotsHorizontal />
                                <HiDotsHorizontal />
                                <HiDotsHorizontal />
                            </div>
                        </div>
                        <div className="flw_text">
                            <h2>Design</h2>
                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</p>
                        </div>
                    </Col>
                    <Col lg={3} xs={6} sm={6}>
                        <div className="dot">
                            <FaCircle />
                            <div className="span_icon">
                                <HiDotsHorizontal />
                                <HiDotsHorizontal />
                                <HiDotsHorizontal />
                                <HiDotsHorizontal />
                            </div>
                        </div>
                        <div className="flw_text">
                            <h2>Development</h2>
                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Follow