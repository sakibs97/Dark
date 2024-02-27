import { Col, Container, Row } from "react-bootstrap"
import "./clientP.css"
import woman from "../../assets/woman.png"

function ClientP() {
    return (
        <section id="client">
            <Container>
                <Row>
                    <Col lg={4}>
                        <div className="client_left">
                            <h2>What our clients say about us</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed.</p>
                        </div>
                    </Col>
                    <Col lg={8}>
                        <div className="client_right">
                            <h3>``The best agency we’ve worked with so far. They understand our product and are able to add
                                new features with a great focus.``</h3>
                            <div className="right_img d-flex">
                                <img src={woman} alt="woman" />
                                <div className="right_img_text">
                                    <a href="#">Jenny Wilson</a>
                                    <p href="#">Vice President</p>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default ClientP