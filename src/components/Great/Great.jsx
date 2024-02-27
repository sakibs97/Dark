import { Col, Container, Row } from "react-bootstrap"
import "./great.css"
import { Link } from "react-router-dom"

const Great = () => {
    return (
        <section id="great">
            <Container>
                <Row className="justify-content-center text-center">
                    <Col lg={6} >
                        <div className="great_text">
                            <h2>Let's build something great together</h2>
                            <p>Nullam vitae purus at tortor mattis dapibus. Morbi purus est, ultricies nec dolor sit amet,
                                scelerisque cursus purus.</p>
                            <Link to="/contact">Contact us</Link>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Great