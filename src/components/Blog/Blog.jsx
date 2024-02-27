import { Col, Container, Row } from "react-bootstrap"
import "./blog.css"
import blog1 from "../../assets/blog/blog1.png"
import blog2 from "../../assets/blog/blog2.png"
import blog3 from "../../assets/blog/blog3.png"

function Blog() {
    return (
        <section id="blog">
            <Container>
                <Row>
                    <Col lg={3}>
                        <div className="blog_head">
                            <h2>Our blog</h2>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col lg={4}>
                        <div className="blog_img">
                            <img src={blog1} alt="blog1" />
                            <div className="blog_text">
                                <h6>19 Jan 2022</h6>
                                <h2>How one Webflow user grew his single person consultancy from $0-100K in 14 months</h2>
                                <p>See how pivoting to Webflow changed one person’s sales strategy and allowed him to
                                    attract
                                </p>
                                <a href="#">Read More </a>
                            </div>
                        </div>
                    </Col>
                    <Col lg={4}>
                        <div className="blog_img">
                            <img src={blog2} alt="blog2" />
                            <div className="blog_text">
                                <h6>19 Jan 2022</h6>
                                <h2>How one Webflow user grew his single person consultancy from $0-100K in 14 months</h2>
                                <p>See how pivoting to Webflow changed one person’s sales strategy and allowed him to
                                    attract
                                </p>
                                <a href="#">Read More </a>
                            </div>
                        </div>
                    </Col>
                    <Col lg={4}>
                        <div className="blog_img">
                            <img src={blog3} alt="blog3" />
                            <div className="blog_text">
                                <h6>19 Jan 2022</h6>
                                <h2>How one Webflow user grew his single person consultancy from $0-100K in 14 months</h2>
                                <p>See how pivoting to Webflow changed one person’s sales strategy and allowed him to
                                    attract
                                </p>
                                <a href="#">Read More </a>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Blog