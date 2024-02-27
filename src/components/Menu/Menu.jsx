import { Container, Navbar, Nav } from "react-bootstrap"
import logo from "../../assets/logo.png"
import "./menu.css"
import { Link } from "react-router-dom"

function Menu() {
    return (
        <Navbar expand="lg" className="menu-bg">
            <Container>
                <Navbar.Brand href="#home">
                    <img src={logo} alt="logo" />
                </Navbar.Brand>
                <Navbar.Toggle className="menu_toggle" aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mx-auto">
                        <Link to="/">Home</Link>
                        <Link to="/about">About us</Link>
                        <Link to="/feature">Features</Link>
                        <Link to="/price">Pricing</Link>
                        <Link to="/faq">FAQ</Link>
                        <Link to="/blogs">Blog</Link>
                    </Nav>
                    <div className="contact">
                        <Link to="/contact">Contact us</Link>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    )
}

export default Menu