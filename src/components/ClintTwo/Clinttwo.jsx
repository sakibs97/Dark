import { Container, Col, Row } from "react-bootstrap"
import "./clinttwo.css"
import man2 from "../../assets/feature/man2.png"

const Clinttwo = () => {
    return (
        <section id="clinttwo">
            <Container>
                <Row>
                    <Col lg={6}>
                        <div className="clint_img">
                            <img src={man2} alt="man2" />
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

export default Clinttwo