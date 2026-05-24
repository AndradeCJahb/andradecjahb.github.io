import { useEffect, useState } from "react";
import "../css/Header.css";
import Footer from "./Footer";

const getInitialTheme = () => {
  if (typeof window === "undefined") {
    return "dark";
  }

  const storedTheme = window.localStorage.getItem("theme");
  if (storedTheme === "light" || storedTheme === "dark") {
    return storedTheme;
  }

  const prefersDark = window.matchMedia?.(
    "(prefers-color-scheme: dark)",
  )?.matches;
  return prefersDark ? "dark" : "light";
};

function Header() {
  const [theme, setTheme] = useState(getInitialTheme);
  const nextTheme = theme === "dark" ? "light" : "dark";
  const nextThemeIcon = nextTheme === "light" ? "☀" : "☾";

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    window.localStorage.setItem("theme", theme);
  }, [theme]);

  const navigationItems = [
    { id: "about", label: "About" },
    { id: "education", label: "Education" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
  ];

  const getScrollContainer = () => {
    if (!window.matchMedia("(max-width: 1000px)").matches) {
      return null;
    }
    return document.querySelector(".main-content");
  };

  const getScrollTop = (scroller, target, sectionId) => {
    if (sectionId === "about") {
      return 0;
    }

    const targetTop = target.getBoundingClientRect().top;
    const scrollMarginTop =
      parseFloat(getComputedStyle(target).scrollMarginTop) || 0;

    if (scroller === window) {
      return window.scrollY + targetTop - scrollMarginTop;
    }

    const scrollerTop = scroller.getBoundingClientRect().top;
    return scroller.scrollTop + (targetTop - scrollerTop) - scrollMarginTop;
  };

  const handleScroll = (sectionId) => {
    const target = document.getElementById(sectionId);

    const scroller = getScrollContainer() ?? window;

    scroller.scrollTo({
      top: getScrollTop(scroller, target, sectionId),
      behavior: "smooth",
    });
  };

  return (
    <header className="header">
      <div className="header-content">
        <h1 className="header-title">Christopher Andrade</h1>
        <p className="job-title">Software Developer</p>
        <nav className="nav">
          <ul className="nav-list">
            {navigationItems.map((item) => (
              <li key={item.id} className="nav-item">
                <button
                  className="nav-button"
                  type="button"
                  onClick={() => handleScroll(item.id)}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>
        <div className="theme-toggle-container">
          <button
            className="theme-toggle-icon"
            type="button"
            onClick={() => setTheme(nextTheme)}
            aria-label={`Switch to ${nextTheme} mode`}
          >
            {nextThemeIcon}
          </button>
        </div>
        <Footer />
      </div>
    </header>
  );
}

export default Header;
