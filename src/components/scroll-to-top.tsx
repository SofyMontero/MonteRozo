import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { scrollToSection } from "@/utils/scroll-to-section";

export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace("#", "");
      const timer = window.setTimeout(() => {
        scrollToSection(id);
      }, 100);
      return () => window.clearTimeout(timer);
    }

    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
}
