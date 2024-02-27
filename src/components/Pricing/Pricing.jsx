import { Col, Container, Row } from "react-bootstrap"
import "./pricing.css"
import Pricingreusable from "../reusable/Pricingreusable"
import { BiSolidRightArrow } from "react-icons/bi";

function Pricing() {
    return (
        <section id="pricing">
            <Container>
                <Row className="justify-content-center text-center">
                    <Col lg={6}>
                        <div className="price_head mb-5">
                            <h2>Our Pricing Plans</h2>
                            <p>When you’re ready to go beyond prototyping in Figma, Webflow is ready to help you bring your
                                designs to life — without coding them.</p>
                        </div>
                    </Col>
                </Row>
                <Row className="justify-content-center">
                    <Pricingreusable title="$299" per="Per Design" page="Landing Page" pera="When you’re ready to go beyond prototyping in Figma," all="All limited links" own="Own analytics platform" chat="Chat support" optm="Optimize hashtags" user="Unlimited users" get="Get started" picon={<BiSolidRightArrow />} />
                    <Pricingreusable title="$399" per="Multi Design" page="Website Page  " pera="When you’re ready to go beyond prototyping in Figma, Webflow’s ready to help." all="All limited links" own="Own analytics platform" chat="Chat support" optm="Optimize hashtags" user="Unlimited users" picon={<BiSolidRightArrow />} get="Get started" />
                    <Pricingreusable title="$499" per="Per Design" page="Complex Project" pera="When you’re ready to go beyond prototyping in Figma, Webflow’s ready to help." all="All limited links" own="Own analytics platform" chat="Chat support" optm="Optimize hashtags" user="Unlimited users" help="Assist and Help" picon={<BiSolidRightArrow />} get="Get started" />
                </Row>
                <Row>

                </Row>

            </Container>
        </section>
    )
}

export default Pricing