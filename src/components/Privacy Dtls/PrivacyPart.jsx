import { Col, Container, Row } from "react-bootstrap"
import "./privacyPart.css"

const PrivacyPart = () => {
    return (
        <section id="privacyPart">
            <Container>
                <Row>
                    <Col lg={5} className="mx-auto text-center">
                        <div className="privacy_head">
                            <h2>Privacy Policy</h2>
                            <p>When you’re ready to go beyond prototyping in Figma, Webflow’s ready to help you bring your
                            </p>
                        </div>
                    </Col>
                    <Col lg={8} className="mx-auto">
                        <div className="privacy_text">
                            <h2>Lorem ipsum dolor.</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                                voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                cupidatat non proident.
                            </p>
                            <p>Sunt in culpa qui officia deserunt mollit anim id est laborum. Ut enim ad minim veniam, quis
                                nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                                irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
                                anim id est laborum.
                            </p>
                            <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                                voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                cupidatat non proident. Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                exercitation ullamco laboris.
                            </p>
                            <div className="about_dtls">
                                <div className="dtls_one">
                                    <svg width="5" height="5" viewBox="0 0 5 5" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="2.5" cy="2.5" r="2.5" fill="#282938" />
                                    </svg>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.</p>
                                </div>
                                <div className="dtls_one">
                                    <svg width="5" height="5" viewBox="0 0 5 5" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="2.5" cy="2.5" r="2.5" fill="#282938" />
                                    </svg>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.</p>
                                </div>
                                <div className="dtls_one">
                                    <svg width="5" height="5" viewBox="0 0 5 5" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="2.5" cy="2.5" r="2.5" fill="#282938" />
                                    </svg>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.</p>
                                </div>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                laboris nisi.
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default PrivacyPart