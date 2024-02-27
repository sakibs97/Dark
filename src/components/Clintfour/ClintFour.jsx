import { Container, Col, Row } from "react-bootstrap"
import "./clintfour.css"
import man4 from "../../assets/feature/man4.png"

const ClintFour = () => {
    return (
        <section id="clintfour">
            <Container>
                <Row>
                    <Col lg={6}>
                        <div className="clint_img">
                            <img src={man4} alt="man4" />
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div className="clint_text">
                            <h3>Free Revision Rounds</h3>
                            <h2>Get free Revisions and one week of free maintenance</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default ClintFour