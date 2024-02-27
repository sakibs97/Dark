import { Col, Container, Row } from "react-bootstrap"
import "./blogbann.css"
import people from "../../assets/blog2/people-working.png"
import { Link } from "react-router-dom"

const BlogBann = () => {
    return (
        <section id="blogbann">
            <Container>
                <Row className="text-center justify-content-center">
                    <Col lg={8}>
                        <div className="blogbann_head">
                            <h2>A UX Case Study on Creating a Studious Environment for Students</h2>
                            <a href="#">Andrew Jonson</a>
                            <span>Posted on 27th January 2021</span>
                        </div>
                    </Col>
                    <Col lg={12}>
                        <div className="blogbann_img">
                            <img src={people} alt="people-working" />
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div className="blogbann_btn">
                            <p>Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and
                                the stars had ceased to twinkle. By the same illusion which lifts the horizon of the sea to
                                the level of the spectator on a hillside.</p>
                            <Link to="/read.blog">Read more</Link>

                        </div>
                    </Col>
                </Row>
            </Container>
        </section >
    )
}

export default BlogBann