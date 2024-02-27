import { Col, Container, Row, Button } from "react-bootstrap"
import "./redProject.css"
import two from "../../assets/read/two.png"

const RedProject = () => {
    return (
        <section id="redPrjct">
            <Container>
                <Row>
                    <Col lg={8} className="mx-auto">
                        <div className="redPrjct_head">
                            <h2>About the project</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                                voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                        </div>
                        <div className="redPrjct_dtls">
                            <div className="dtls_one">
                                <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="2.5" cy="2.5" r="2.5" fill="#282938" />
                                </svg>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                            </div>
                            <div className="dtls_one">
                                <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="2.5" cy="2.5" r="2.5" fill="#282938" />
                                </svg>
                                <p>Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea</p>
                            </div>
                            <div className="dtls_one">
                                <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="2.5" cy="2.5" r="2.5" fill="#282938" />
                                </svg>
                                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse</p>
                            </div>
                            <div className="dtls_one">
                                <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="2.5" cy="2.5" r="2.5" fill="#282938" />
                                </svg>
                                <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa</p>
                            </div>
                        </div>
                        <div className="redPrjct_img">
                            <img src={two} alt="two" />
                        </div>
                        <div className="redPrjct_bton">
                            <h2>How we do it</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                                voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                            <div className="redPrjct_dtls">
                                <div className="dtls_one">
                                    <svg width="5" height="5" viewBox="0 0 5 5" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="2.5" cy="2.5" r="2.5" fill="#282938" />
                                    </svg>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                                </div>
                                <div className="dtls_one">
                                    <svg width="5" height="5" viewBox="0 0 5 5" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="2.5" cy="2.5" r="2.5" fill="#282938" />
                                    </svg>
                                    <p>Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea</p>
                                </div>
                                <div className="dtls_one">
                                    <svg width="5" height="5" viewBox="0 0 5 5" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="2.5" cy="2.5" r="2.5" fill="#282938" />
                                    </svg>
                                    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse</p>
                                </div>
                                <div className="dtls_one">
                                    <svg width="5" height="5" viewBox="0 0 5 5" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="2.5" cy="2.5" r="2.5" fill="#282938" />
                                    </svg>
                                    <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa</p>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col lg={8} xs={12} className="mx-auto">
                        <div className="redPrjct_btton">
                            <Button href="#">Keywords</Button>
                            <Button href="#">Design</Button>
                            <Button href="#">UI/UX</Button>
                            <Button href="#">Wireframing</Button>
                            <Button href="#">Branding</Button>
                            <Button href="#">Development</Button>
                            <Button href="#">webflow</Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section >
    )
}

export default RedProject