import { Col, Container, Row } from "react-bootstrap"
import "./blogdtls.css"
import one from "../../assets/blog2/bottom/one.png"
import two from "../../assets/blog2/bottom/two.png"
import three from "../../assets/blog2/bottom/three.png"
import four from "../../assets/blog2/bottom/four.png"
import five from "../../assets/blog2/bottom/five.png"
import six from "../../assets/blog2/bottom/six.png"
import { FaArrowRightLong } from "react-icons/fa6";

const BlogDtls = () => {
    return (
        <section id="blogdtls">
            <Container>
                <Row className="justify-content-center text-center">
                    <Col lg={3}>
                        <div className="blogdtls_head">
                            <h2>Our Blog</h2>
                        </div>
                    </Col>
                </Row>
                <Row className="justify-content-center">
                    <Col lg={4} sm={6}>
                        <div className="blogdtls_dtls">
                            <div className="blogdtls_img">
                                <img src={one} alt="one" />
                            </div>
                            <h4>27 Jan 2021</h4>
                            <h3>How one Webflow user grew his single person consultancy from $0-100K in 14 months</h3>
                            <p>See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract
                            </p>
                            <a href="#">Read More <FaArrowRightLong /></a>
                        </div>
                    </Col>
                    <Col lg={4} sm={6}>
                        <div className="blogdtls_dtls">
                            <div className="blogdtls_img">
                                <img src={two} alt="two" />
                            </div>
                            <h4>27 Jan 2021</h4>
                            <h3>How one Webflow user grew his single person consultancy from $0-100K in 14 months</h3>
                            <p>See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract
                            </p>
                            <a href="#">Read More <FaArrowRightLong /></a>
                        </div>
                    </Col>
                    <Col lg={4} sm={6}>
                        <div className="blogdtls_dtls">
                            <div className="blogdtls_img">
                                <img src={three} alt="three" />
                            </div>
                            <h4>27 Jan 2021</h4>
                            <h3>How one Webflow user grew his single person consultancy from $0-100K in 14 months</h3>
                            <p>See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract
                            </p>
                            <a href="#">Read More <FaArrowRightLong /></a>
                        </div>
                    </Col>
                    <Col lg={4} sm={6}>
                        <div className="blogdtls_dtls">
                            <div className="blogdtls_img">
                                <img src={four} alt="four" />
                            </div>
                            <h4>27 Jan 2021</h4>
                            <h3>How one Webflow user grew his single person consultancy from $0-100K in 14 months</h3>
                            <p>See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract
                            </p>
                            <a href="#">Read More <FaArrowRightLong /></a>
                        </div>
                    </Col>
                    <Col lg={4} sm={6}>
                        <div className="blogdtls_dtls">
                            <div className="blogdtls_img">
                                <img src={five} alt="five" />
                            </div>
                            <h4>27 Jan 2021</h4>
                            <h3>How one Webflow user grew his single person consultancy from $0-100K in 14 months</h3>
                            <p>See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract
                            </p>
                            <a href="#">Read More <FaArrowRightLong /></a>
                        </div>
                    </Col>
                    <Col lg={4} sm={6}>
                        <div className="blogdtls_dtls">
                            <div className="blogdtls_img">
                                <img src={six} alt="six" />
                            </div>
                            <h4>27 Jan 2021</h4>
                            <h3>How one Webflow user grew his single person consultancy from $0-100K in 14 months</h3>
                            <p>See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract
                            </p>
                            <a href="#">Read More <FaArrowRightLong /></a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default BlogDtls