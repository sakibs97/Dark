import { Col } from "react-bootstrap"

const WorkBannreusable = ({ wrkimg, wrkhtwo, workptg, wrkata, wrkticn }) => {
    return (
        <Col lg={4} sm={6}>
            <div className="temp_dtls">
                <div className="temp_img">
                    {wrkimg}
                </div>
                <h2>{wrkhtwo}</h2>
                <p>{workptg}</p>
                <a href="#">{wrkata}{wrkticn}</a>
            </div>
        </Col>
    )
}

export default WorkBannreusable