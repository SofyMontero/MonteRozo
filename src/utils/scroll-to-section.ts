import type { SectionId } from "@/data/sections";

export function scrollToSection(id: SectionId | string) {
  const element = document.getElementById(id);
  if (!element) return false;

  element.scrollIntoView({ behavior: "smooth", block: "start" });
  window.history.pushState(null, "", `#${id}`);
  return true;
}

export function closeMobileNav() {
  const collapse = document.getElementById("navbarNav");
  if (collapse?.classList.contains("show")) {
    const toggler = document.querySelector(
      '[data-bs-target="#navbarNav"]',
    ) as HTMLButtonElement | null;
    toggler?.click();
  }
}
