import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "#about" },
  { name: "Results", href: "/results" },
  { name: "Drivers", href: "#drivers" },
  { name: "Teams", href: "#teams" },
  { name: "Simulator", href: "#simulator" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleAnchorClick = (e, href) => {
    e.preventDefault();

    // If we are already on home page
    if (location.pathname === "/") {
      const section = document.querySelector(href);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // Navigate to home, then scroll after load
      navigate("/" + href);
    }
  };

  return (
    <nav
      className={cn(
        "fixed w-full z-40 transition-all duration-300",
        isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-xs" : "py-5"
      )}
    >
      <div className="container flex items-center justify-between">
        <Link
          to="/"
          className="text-xl font-bold text-primary flex items-center"
        >
          <span className="relative z-10">
            <span className="text-glow text-foreground">Formula 1</span>{" "}
            Simulator
          </span>
        </Link>

        <div className="hidden md:flex space-x-8">
          {navItems.map((item, key) =>
            item.href.startsWith("#") ? (
              <a
                key={key}
                href={item.href}
                onClick={(e) => handleAnchorClick(e, item.href)}
                className="text-foreground/80 hover:text-primary transition-colors duration-300"
              >
                {item.name}
              </a>
            ) : (
              <Link
                key={key}
                to={item.href}
                className="text-foreground/80 hover:text-primary transition-colors duration-300"
              >
                {item.name}
              </Link>
            )
          )}
        </div>
      </div>
    </nav>
  );
};
