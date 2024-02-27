import { Container, Tabs, Tab, Row } from "react-bootstrap"
import "./template.css"
import image1 from "../../assets/work/template/image1.png"
import image2 from "../../assets/work/template/image2.png"
import image3 from "../../assets/work/template/image3.png"
import image4 from "../../assets/work/template/image4.png"
import image5 from "../../assets/work/template/image5.png"
import image6 from "../../assets/work/template/image6.png"
import { FaArrowRight } from "react-icons/fa6";
import WorkBannreusable from "../reusable/WorkBannreusable"

const Template = () => {
        return (
                <section id="template">
                        <Container>
                                <Tabs
                                        defaultActiveKey="All"
                                        transition={false}
                                        id="noanim-tab-example"
                                        className="mb-3 justify-content-center"
                                >
                                        <Tab eventKey="All" title="All">
                                                <Row>
                                                        <WorkBannreusable wrkimg={<img src={image1} alt="image1" />} wrkhtwo="Template 1" workptg="Apparently we had reached a great height in the atmosphere, for the sky was a dead
                    black, and the stars had ceased to twinkle. " wrkata="View Portfolio" wrkticn={<FaArrowRight />} />
                                                        <WorkBannreusable wrkimg={<img src={image2} alt="image2" />} wrkhtwo="Template 2" workptg="Apparently we had reached a great height in the atmosphere, for the sky was a dead
                    black, and the stars had ceased to twinkle. " wrkata="View Portfolio" wrkticn={<FaArrowRight />} />
                                                        <WorkBannreusable wrkimg={<img src={image3} alt="image3" />} wrkhtwo="Template 3" workptg="Apparently we had reached a great height in the atmosphere, for the sky was a dead
                    black, and the stars had ceased to twinkle. " wrkata="View Portfolio" wrkticn={<FaArrowRight />} />
                                                        <WorkBannreusable wrkimg={<img src={image4} alt="image4" />} wrkhtwo="Template 4" workptg="Apparently we had reached a great height in the atmosphere, for the sky was a dead
                    black, and the stars had ceased to twinkle. " wrkata="View Portfolio" wrkticn={<FaArrowRight />} />
                                                        <WorkBannreusable wrkimg={<img src={image5} alt="image5" />} wrkhtwo="Template 5" workptg="Apparently we had reached a great height in the atmosphere, for the sky was a dead
                    black, and the stars had ceased to twinkle. " wrkata="View Portfolio" wrkticn={<FaArrowRight />} />
                                                        <WorkBannreusable wrkimg={<img src={image6} alt="image6" />} wrkhtwo="Template 6" workptg="Apparently we had reached a great height in the atmosphere, for the sky was a dead
                    black, and the stars had ceased to twinkle. " wrkata="View Portfolio" wrkticn={<FaArrowRight />} />
                                                </Row>
                                        </Tab>
                                        <Tab eventKey="UI-Design" title="UI Design">
                                                <Row>
                                                        <WorkBannreusable wrkimg={<img src={image1} alt="image1" />} wrkhtwo="Template 1" workptg="Apparently we had reached a great height in the atmosphere, for the sky was a dead
                    black, and the stars had ceased to twinkle. " wrkata="View Portfolio" wrkticn={<FaArrowRight />} />
                                                        <WorkBannreusable wrkimg={<img src={image2} alt="image2" />} wrkhtwo="Template 2" workptg="Apparently we had reached a great height in the atmosphere, for the sky was a dead
                    black, and the stars had ceased to twinkle. " wrkata="View Portfolio" wrkticn={<FaArrowRight />} />
                                                        <WorkBannreusable wrkimg={<img src={image1} alt="image1" />} wrkhtwo="Template 1" workptg="Apparently we had reached a great height in the atmosphere, for the sky was a dead
                    black, and the stars had ceased to twinkle. " wrkata="View Portfolio" wrkticn={<FaArrowRight />} />
                                                        <WorkBannreusable wrkimg={<img src={image2} alt="image2" />} wrkhtwo="Template 2" workptg="Apparently we had reached a great height in the atmosphere, for the sky was a dead
                    black, and the stars had ceased to twinkle. " wrkata="View Portfolio" wrkticn={<FaArrowRight />} />
                                                        <WorkBannreusable wrkimg={<img src={image1} alt="image1" />} wrkhtwo="Template 1" workptg="Apparently we had reached a great height in the atmosphere, for the sky was a dead
                    black, and the stars had ceased to twinkle. " wrkata="View Portfolio" wrkticn={<FaArrowRight />} />
                                                        <WorkBannreusable wrkimg={<img src={image2} alt="image2" />} wrkhtwo="Template 2" workptg="Apparently we had reached a great height in the atmosphere, for the sky was a dead
                    black, and the stars had ceased to twinkle. " wrkata="View Portfolio" wrkticn={<FaArrowRight />} />
                                                </Row>
                                        </Tab>
                                        <Tab eventKey="Webflow-Design" title="Webflow Design">
                                                <Row>
                                                        <WorkBannreusable wrkimg={<img src={image3} alt="image3" />} wrkhtwo="Template 3" workptg="Apparently we had reached a great height in the atmosphere, for the sky was a dead
                    black, and the stars had ceased to twinkle. " wrkata="View Portfolio" wrkticn={<FaArrowRight />} />
                                                        <WorkBannreusable wrkimg={<img src={image4} alt="image4" />} wrkhtwo="Template 4" workptg="Apparently we had reached a great height in the atmosphere, for the sky was a dead
                    black, and the stars had ceased to twinkle. " wrkata="View Portfolio" wrkticn={<FaArrowRight />} />
                                                        <WorkBannreusable wrkimg={<img src={image3} alt="image3" />} wrkhtwo="Template 3" workptg="Apparently we had reached a great height in the atmosphere, for the sky was a dead
                    black, and the stars had ceased to twinkle. " wrkata="View Portfolio" wrkticn={<FaArrowRight />} />
                                                        <WorkBannreusable wrkimg={<img src={image4} alt="image4" />} wrkhtwo="Template 4" workptg="Apparently we had reached a great height in the atmosphere, for the sky was a dead
                    black, and the stars had ceased to twinkle. " wrkata="View Portfolio" wrkticn={<FaArrowRight />} />
                                                        <WorkBannreusable wrkimg={<img src={image3} alt="image3" />} wrkhtwo="Template 3" workptg="Apparently we had reached a great height in the atmosphere, for the sky was a dead
                    black, and the stars had ceased to twinkle. " wrkata="View Portfolio" wrkticn={<FaArrowRight />} />
                                                        <WorkBannreusable wrkimg={<img src={image4} alt="image4" />} wrkhtwo="Template 4" workptg="Apparently we had reached a great height in the atmosphere, for the sky was a dead
                    black, and the stars had ceased to twinkle. " wrkata="View Portfolio" wrkticn={<FaArrowRight />} />
                                                </Row>
                                        </Tab>
                                        <Tab eventKey="Figma-Design" title="Figma Design">
                                                <Row>
                                                        <WorkBannreusable wrkimg={<img src={image5} alt="image5" />} wrkhtwo="Template 5" workptg="Apparently we had reached a great height in the atmosphere, for the sky was a dead
                    black, and the stars had ceased to twinkle. " wrkata="View Portfolio" wrkticn={<FaArrowRight />} />
                                                        <WorkBannreusable wrkimg={<img src={image6} alt="image6" />} wrkhtwo="Template 6" workptg="Apparently we had reached a great height in the atmosphere, for the sky was a dead
                    black, and the stars had ceased to twinkle. " wrkata="View Portfolio" wrkticn={<FaArrowRight />} />
                                                        <WorkBannreusable wrkimg={<img src={image5} alt="image5" />} wrkhtwo="Template 5" workptg="Apparently we had reached a great height in the atmosphere, for the sky was a dead
                    black, and the stars had ceased to twinkle. " wrkata="View Portfolio" wrkticn={<FaArrowRight />} />
                                                        <WorkBannreusable wrkimg={<img src={image6} alt="image6" />} wrkhtwo="Template 6" workptg="Apparently we had reached a great height in the atmosphere, for the sky was a dead
                    black, and the stars had ceased to twinkle. " wrkata="View Portfolio" wrkticn={<FaArrowRight />} />
                                                        <WorkBannreusable wrkimg={<img src={image5} alt="image5" />} wrkhtwo="Template 5" workptg="Apparently we had reached a great height in the atmosphere, for the sky was a dead
                    black, and the stars had ceased to twinkle. " wrkata="View Portfolio" wrkticn={<FaArrowRight />} />
                                                        <WorkBannreusable wrkimg={<img src={image6} alt="image6" />} wrkhtwo="Template 6" workptg="Apparently we had reached a great height in the atmosphere, for the sky was a dead
                    black, and the stars had ceased to twinkle. " wrkata="View Portfolio" wrkticn={<FaArrowRight />} />
                                                </Row>
                                        </Tab>

                                </Tabs>

                        </Container>
                </section>
        )
}

export default Template