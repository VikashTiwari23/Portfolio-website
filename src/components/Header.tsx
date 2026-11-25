import { useEffect, useState } from "react";
import { IconHexagonLetterV } from "@tabler/icons-react";
import SideBar from "./SideBar";

type NavLink = {
  label: string;
  id: string;
};

const links: NavLink[] = [
  { label: "About", id: "about" },
  { label: "Skills", id: "skills" },
  { label: "Work", id: "projects" },
  { label: "Experience", id: "experience" },
  { label: "Contact", id: "contact" },
];

const navLinks = (
  col: boolean = false,
  onNavigate?: () => void,
  activeId?: string,
) => {
  return links.map(({ label, id }, index) => {
    const isActive = activeId === id;

    return (
      <a
        key={id}
        href={`#${id}`}
        onClick={onNavigate}
        aria-current={isActive ? "location" : undefined}
        className={`font-mono transition-colors duration-200 ${
          col
            ? "flex flex-col items-center gap-1 text-base sm:text-lg"
            : "whitespace-nowrap text-xs sm:text-sm lg:text-base"
        } ${
          isActive
            ? "text-primaryColor"
            : "text-textColor hover:text-primaryColor"
        }`}
      >
        <span className="text-primaryColor">0{index + 1}. </span>
        {label}
      </a>
    );
  });
};

const Header = () => {
  const [activeId, setActiveId] = useState(links[0].id);

  useEffect(() => {
    let frame = 0;

    const updateActive = () => {
      const marker = 140;
      let current = links[0].id;

      links.forEach(({ id }) => {
        const section = document.getElementById(id);
        if (section && section.getBoundingClientRect().top <= marker) {
          current = id;
        }
      });

      setActiveId(current);
      frame = 0;
    };

    const onScroll = () => {
      if (!frame) {
        frame = window.requestAnimationFrame(updateActive);
      }
    };

    updateActive();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) {
        window.cancelAnimationFrame(frame);
      }
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 flex h-16 items-center justify-between bg-bgColor/95 px-4 shadow-[0_4px_20px_rgba(0,0,0,0.25)] backdrop-blur-md sm:h-20 sm:px-6 md:px-10 lg:h-24 lg:px-16 xl:px-20">
      <a
        href="#about"
        aria-label="Back to top"
        className="shrink-0 rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-primaryColor"
      >
        <IconHexagonLetterV
          className="!z-10 !h-11 !w-11 sm:!h-[60px] sm:!w-[60px]"
          color="#5FEFE0"
          stroke={1.25}
          size={44}
        />
      </a>
      <nav
        aria-label="Main navigation"
        className="hidden items-center gap-4 md:flex lg:gap-10"
      >
        {navLinks(false, undefined, activeId)}
      </nav>
      <SideBar activeId={activeId} />
    </header>
  );
};

export default Header;
export { navLinks };
