import { Col, Container, Row, } from "react-bootstrap"
import "./inquiry.css"
import hand from "../../assets/hand.png"
import { FaArrowRight } from "react-icons/fa";

function Inquiry() {
    return (
        <section id="inquiry">
            <Container>
                <Row>
                    <Col lg={6} sm={6} className="p-0">
                        <div className="inqry_img">
                            <img src={hand} alt="hand" />
                            <div className="inq_img_text">
                                <div className="inqry_text">
                                    <h2>Building stellar websites for early startups</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                        incididunt
                                        ut labore et dolore magna aliqua ut enim.</p>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col lg={6} sm={6} className="p-0">
                        <div className="inqry_right">
                            <div className="inqry_right_text">
                                <h2>Send inquiry</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore.</p>
                            </div>
                            <div className="right_text">
                                <div className="mb-3 name">
                                    <input type="text" className="form-control" id="formYourName" placeholder="Your Name" />
                                </div>
                                <div className="mb-3 email">
                                    <input type="email" className="form-control" id="inputEmail"
                                        placeholder="Example: jane@sample.com" />
                                </div>
                                <div className="mb-4 url">
                                    <input type="url" className="form-control" id="inputURL"
                                        placeholder="Past Your Figma design URL" />
                                </div>
                                <div className="mb-3 text-center">
                                    <button className="btn" type="send">Send an
                                        Inquiry</button>
                                </div>
                                <div className="right_last">
                                    <a href="#">Get in touch with us <FaArrowRight /></a>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Inquiry