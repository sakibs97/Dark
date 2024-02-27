import { Col, Container, Row } from "react-bootstrap"
import "./team.css"
import man from "../../assets/about/team/man.png"
import serious from "../../assets/about/team/serious.png"
import transgende from "../../assets/about/team/transgender.png"
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
import maxx from "../../assets/about/team/man3.png"

function Team() {
    return (
        <section id="team">
            <Container>
                <Row className="text-center justify-content-center pb-3">
                    <Col lg={6}>
                        <div className="team_head">
                            <h2>Meet our team</h2>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col lg={3} sm={6}>
                        <div className="team_dtls">
                            <div className="team_img">
                                <img src={man} alt="man" />
                                <div className="team_img_text">
                                    <div className="team_icon">
                                        <a href="#"><FaFacebook /></a>
                                        <a href="#"><FaTwitter /></a>
                                        <a href="#"><FaLinkedin /></a>
                                    </div>
                                </div>
                            </div>
                            <div className="team_text">
                                <h3>John Smith</h3>
                                <p>CEO</p>
                            </div>
                        </div>
                    </Col>
                    <Col lg={3} sm={6}>
                        <div className="team_dtls">
                            <div className="team_img">
                                <img src={maxx} alt="man2" />
                                <div className="team_img_text">
                                    <div className="team_icon">
                                        <a href="#"><FaFacebook /></a>
                                        <a href="#"><FaTwitter /></a>
                                        <a href="#"><FaLinkedin /></a>
                                    </div>
                                </div>
                            </div>
                            <div className="team_text">
                                <h3>Paul Jones</h3>
                                <p>Design Lead</p>
                            </div>
                        </div>
                    </Col>
                    <Col lg={3} sm={6}>
                        <div className="team_dtls">
                            <div className="team_img">
                                <img src={serious} alt="serious-man" />
                                <div className="team_img_text">
                                    <div className="team_icon">
                                        <a href="#"><FaFacebook /></a>
                                        <a href="#"><FaTwitter /></a>
                                        <a href="#"><FaLinkedin /></a>
                                    </div>
                                </div>
                            </div>
                            <div className="team_text">
                                <h3>Simon Adams</h3>
                                <p>CTO</p>
                            </div>
                        </div>
                    </Col>
                    <Col lg={3} sm={6}>
                        <div className="team_dtls">
                            <div className="team_img">
                                <img src={transgende} alt="transgende" />
                                <div className="team_img_text">
                                    <div className="team_icon">
                                        <a href="#"><FaFacebook /></a>
                                        <a href="#"><FaTwitter /></a>
                                        <a href="#"><FaLinkedin /></a>
                                    </div>
                                </div>
                            </div>
                            <div className="team_text">
                                <h3>Sara Hardin</h3>
                                <p>Project Manager</p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Team