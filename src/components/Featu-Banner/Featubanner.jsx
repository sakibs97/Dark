import { Col, Container, Row } from "react-bootstrap"
import "./featubanner.css"
import fetbann from "../../assets/feature/banner.png"

const Featubanner = () => {
    return (
        <section id="banner">
            <Container>
                <Row className="ban_part">
                    <Col lg={5} sm={12}>
                        <div className="ban_text">
                            <h2>All the features you need</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <div className="ban_btn">
                                <a href="#">View Pricing</a>
                            </div>
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div className="banner_img">
                            <img src={fetbann} alt="bann" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Featubanner