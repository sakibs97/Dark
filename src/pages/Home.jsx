import Banner from "../components/Banner/Banner"
import Blog from "../components/Blog/Blog"
import ClientP from "../components/ClientP/ClientP"
import Faq from "../components/Faq/Faq"
import Feature from "../components/Feature/Feature"
import Inquiry from "../components/Inquiry/Inquiry"
import ProjectP from "../components/ProjectP/ProjectP"
import Work from "../components/Work/Work"



export const Home = () => {
    return (
        <>
            <Banner />
            <Work />
            <ProjectP />
            <Feature />
            <ClientP />
            <Faq />
            <Inquiry />
            <Blog />
        </>
    )
}
