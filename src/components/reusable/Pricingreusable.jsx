import { Col } from "react-bootstrap"


const Pricingreusable = ({ title, per, page, pera, all, own, chat, optm, user, help, get, picon }) => {

    return (
        <Col lg={3} sm={6}>
            <div className="price_dtls">
                <div className="price_dtls_head d-flex">
                    <h2>{title}</h2>
                    <p>{per}</p>
                </div>
                <h3>{page}</h3>
                <p>{pera}</p>
                <div className="spout" id="spout_one">
                    <h6>{picon}{all}</h6>
                    <h6>{picon}{own}</h6>
                    <h6>{picon}{chat}</h6>
                    <h6>{picon}{optm}</h6>
                    <h6>{picon}{user}</h6>
                    <h6>{picon}{help}</h6>
                </div>
                <div className="dtls_last">
                    <a href="#">{get}</a>
                </div>
            </div>
        </Col>
    )
}

export default Pricingreusable