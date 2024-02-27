import { Container, Col, Row } from "react-bootstrap"
import "./clintthree.css"
import man3 from "../../assets/feature/man3.png"

const Clintthree = () => {
    return (
        <section id="clintthree">
            <Container>
                <Row>
                    <Col lg={6}>
                        <div className="clint_text">
                            <h3>24/7 Support</h3>
                            <h2>Working with us, you will be getting 24/7 priority support</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                            </p>
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div className="clint_img">
                            <img src={man3} alt="man2" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Clintthree