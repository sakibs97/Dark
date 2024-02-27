import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from "react-router-dom"
import { Home } from "./pages/Home"
import Layout from "./components/root/layout"
import AboutUs from "./pages/AboutUs"
import Price from "./pages/Price"
import Featur from "./pages/Featur"
import Faq from "./components/Faq/Faq"
import Works from "./pages/Works"
import ReadCase from "./pages/ReadCase"
import Blogs from "./pages/Blogs"
import ReadBlog from "./pages/ReadBlog"
import Contact from "./pages/Contact"
import Privacy from "./pages/Privacy"

const rounter = createBrowserRouter(createRoutesFromElements(
  <Route element={<Layout />}>
    <Route path="/" element={<Home />}></Route>
    <Route path="/about" element={<AboutUs />}></Route>
    <Route path="/price" element={<Price />}></Route>
    <Route path="/feature" element={<Featur />}></Route>
    <Route path="/faq" element={<Faq />}></Route>
    <Route path="/work" element={<Works />}></Route>
    <Route path="/readcase" element={<ReadCase />}></Route>
    <Route path="/blogs" element={<Blogs />}></Route>
    <Route path="/read.blog" element={<ReadBlog />}></Route>
    <Route path="/contact" element={<Contact />}></Route>
    <Route path="/privacy" element={<Privacy />}></Route>

  </Route>

))

function App() {

  return (
    <>
      <RouterProvider router={rounter}></RouterProvider>
    </>
  )
}

export default App
