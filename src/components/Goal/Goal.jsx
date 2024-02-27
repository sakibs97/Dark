import { Col, Container, Row } from "react-bootstrap"
import "./goal.css"
import goal from "../../assets/about/goal.png"

function Goal() {
    return (
        <section id="goal">
            <Container>
                <div className="goal_up">
                    <Row>
                        <Col>
                            <div className="goal_head">
                                <h3>Who we are</h3>
                            </div>
                        </Col>
                    </Row>
                    <Row className="justify-content-between">
                        <Col lg={5}>
                            <div className="goal_text">
                                <h2>Goal focussed</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                    ut
                                    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                    ullamco
                                    laboris nisi ut aliquip ex ea commodo consequat.</p>
                            </div>
                        </Col>
                        <Col lg={5}>
                            <div className="goal_text">
                                <h2>Continuous improvement</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                    ut
                                    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                    ullamco
                                    laboris nisi ut aliquip ex ea commodo consequat.</p>
                            </div>
                        </Col>
                    </Row>
                </div>
                <Row>
                    <Col lg={12}>
                        <img src={goal} className="goal_img" alt="goal" />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Goal