import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import ScrollToTop from "../components/scroll-to-top";
import Home from "../pages/home";

export default function AppNavigation() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/index" element={<Home />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
