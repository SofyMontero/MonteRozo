import type { AnchorHTMLAttributes, ReactNode } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import type { SectionId } from "@/data/sections";
import { sectionHash } from "@/data/sections";
import { closeMobileNav, scrollToSection } from "@/utils/scroll-to-section";

type SectionLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  section: SectionId;
  children: ReactNode;
};

export function SectionLink({
  section,
  children,
  className,
  onClick,
  ...props
}: SectionLinkProps) {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const hash = sectionHash(section);

  return (
    <a
      href={hash}
      className={className}
      onClick={(event) => {
        onClick?.(event);
        if (event.defaultPrevented) return;

        event.preventDefault();
        closeMobileNav();

        if (pathname !== "/") {
          navigate({ pathname: "/", hash: section });
          return;
        }

        scrollToSection(section);
      }}
      {...props}
    >
      {children}
    </a>
  );
}
