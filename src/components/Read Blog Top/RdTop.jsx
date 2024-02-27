import { Col, Container, Row } from "react-bootstrap"
import "./rdtop.css"
import people from "../../assets/blog2/people-working.png"

const RdTop = () => {
    return (
        <section id="rdtop">
            <Container>
                <Row className="text-center justify-content-center">
                    <Col lg={8} sm={12} md={12}>
                        <div className="rdtop_head">
                            <h2>A UX Case Study on Creating a Studious Environment for Students</h2>
                            <a href="#">Andrew Jonson</a>
                            <span>Posted on 27th January 2021</span>
                        </div>
                    </Col>
                    <Col lg={12}>
                        <div className="rdtop_img">
                            <img src={people} alt="people" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default RdTop