import "./feature.css"
import { Col, Container, Row } from "react-bootstrap"
import { BsPeopleFill } from "react-icons/bs";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { FaPencilRuler } from "react-icons/fa";
import { TbMessageCircleQuestion } from "react-icons/tb";
import { RiTimerFill } from "react-icons/ri";
import { MdNoteAlt } from "react-icons/md";


function Feature() {
    return (
        <section id="feature">
            <Container>
                <Row className="f_head">
                    <Col lg={6}>
                        <div className="feature_head">
                            <h4>Features</h4>
                            <h2>Design that solves problems, one product at a time</h2>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col lg={4} xs={6}>
                        <div className="fture_dtls">
                            <a href="#"><BsPeopleFill className="dtls_icon" /></a>
                            <h2>Uses Client First</h2>
                            <p>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu
                                gravida mi. Pellentesque et velit aliquam sed mi. </p>
                        </div>
                    </Col>
                    <Col lg={4} xs={6}>
                        <div className="fture_dtls">
                            <a href="#"><IoIosCheckmarkCircle className="dtls_icon" /></a>
                            <h2>Uses Client First</h2>
                            <p>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu
                                gravida mi. Pellentesque et velit aliquam sed mi. </p>
                        </div>
                    </Col>
                    <Col lg={4} xs={6}>
                        <div className="fture_dtls">
                            <a href="#"><FaPencilRuler className="dtls_icon" /></a>
                            <h2>Uses Client First</h2>
                            <p>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu
                                gravida mi. Pellentesque et velit aliquam sed mi. </p>
                        </div>
                    </Col>
                    <Col lg={4} xs={6}>
                        <div className="fture_dtls">
                            <a href="#"><TbMessageCircleQuestion className="dtls_icon" /></a>
                            <h2>Uses Client First</h2>
                            <p>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu
                                gravida mi. Pellentesque et velit aliquam sed mi. </p>
                        </div>
                    </Col>
                    <Col lg={4} xs={6}>
                        <div className="fture_dtls">
                            <a href="#"><RiTimerFill className="dtls_icon" /></a>
                            <h2>Uses Client First</h2>
                            <p>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu
                                gravida mi. Pellentesque et velit aliquam sed mi. </p>
                        </div>
                    </Col>
                    <Col lg={4} xs={6}>
                        <div className="fture_dtls">
                            <a href="#"><MdNoteAlt className="dtls_icon" /></a>
                            <h2>Uses Client First</h2>
                            <p>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu
                                gravida mi. Pellentesque et velit aliquam sed mi. </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Feature