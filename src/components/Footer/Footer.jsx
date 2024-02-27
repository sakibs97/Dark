import { Col, Container, Row, Navbar, Nav } from "react-bootstrap"
import logo from "../../assets/logo.png"
import "./footer.css"
import { FaFacebook, FaTwitter, FaInstagramSquare, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer>
            <div className="footer_top">
                <Container>
                    <Row className="ftr_top">
                        <Col lg={5} sm={6} md={6}>
                            <div className="footer_left">
                                <a href="#"><img src={logo} alt="logo" /></a>
                                <p>We are always open to discuss your project and improve your online presence.</p>
                            </div>
                        </Col>
                        <Col lg={5} sm={6}>
                            <div className="footer_right">
                                <h2>Lets Talk!</h2>
                                <p>We are always open to discuss your project, improve your online presence and help with
                                    your UX/UI design challenges.</p>
                                <span>
                                    <a href="#"><FaFacebook /></a>
                                    <a href="#"><FaTwitter /></a>
                                    <a href="#"><FaInstagramSquare /></a>
                                    <a href="#"><FaLinkedin /></a>
                                </span>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={5} sm={12} md={8}>
                            <div className="cntact">
                                <div className="cnt_mail">
                                    <div className="call">
                                        <h2>Email me at</h2>
                                        <a href="#">contact@website.com</a>
                                    </div>
                                </div>
                                <div className="call">
                                    <h2>Call us</h2>
                                    <a href="#">0927 6277 28525</a>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <Navbar expand="lg" bt-menu>
                <Container>
                    <Navbar.Brand>
                        <span className="navbar-text navText">
                            Copyright 2022, Finsweet.com
                        </span>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto nav_list">
                            <Link to="/">Home</Link>
                            <Link to="/about">About us</Link>
                            <Link to="/work">Work</Link>
                            <Link to="/readcase">Read Case Studies</Link>
                            <Link to="/privacy">Privacy</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </footer>

    )
}

export default Footer