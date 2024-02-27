import { Outlet } from "react-router-dom"
import Menu from "../Menu/Menu"
import Footer from "../Footer/Footer"


const Layout = () => {
    return (
        <>
            <Menu />
            <Outlet />
            <Footer />
        </>
    )
}

export default Layout
