import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "../components/scroll-to-top";
import ContactPage from "../pages/contact";
import BlogDetailsPage from "../pages/blog-details";
import NotFoundPage from "../pages/not-found";
import ServiceDetailsPage from "../pages/service-details";
import Home from "../pages/home";


export default function AppNavigation() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/index" element={<Home />} />
        <Route path="/servicios-factoring" element={<ServiceDetailsPage />} />
        <Route path="/blog-factoring/:id" element={<BlogDetailsPage />} />
        <Route path="/contacto" element={<ContactPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  )
}