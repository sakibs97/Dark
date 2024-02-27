import "./work.css"
import { Col, Container, Row } from "react-bootstrap"
import work1 from "../../assets/work/work1.png"
import work2 from "../../assets/work/work2.png"
import work3 from "../../assets/work/work3.png"
import work4 from "../../assets/work/work4.png"
import { FaArrowRight } from "react-icons/fa";

function Work() {
    return (
        <section id="work">
            <Container>
                <Row className="justify-content-between">
                    <Col lg={4} sm={12}>
                        <div className="work_text">
                            <div className="work_text_one">
                                <h2>How we work</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
                                </p>
                            </div>
                            <div className="five">
                                <a href="#">Get in touch with us <FaArrowRight /></a>
                            </div>
                        </div>
                    </Col>
                    <Col lg={3} xs={6}>
                        <div className="work_card">
                            <a href="#"><img src={work1} alt="work1" /></a>
                            <h2>Strategy</h2>
                            <p>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .</p>
                        </div>
                        <div className="work_card">
                            <a href="#"><img src={work3} alt="work3" /></a>
                            <h2>Design</h2>
                            <p>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .</p>
                        </div>
                    </Col>
                    <Col lg={3} xs={6}>
                        <div className="work_card">
                            <a href="#"><img src={work2} alt="work2" /></a>
                            <h2>Wireframing</h2>
                            <p>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .</p>
                        </div>
                        <div className="work_card">
                            <a href="#"><img src={work4} alt="work4" /></a>
                            <h2>Development</h2>
                            <p>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Work