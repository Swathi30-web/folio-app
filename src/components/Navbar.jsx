import { useState, useEffect } from "react";
import { Menu, X, Moon, Sun } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import Logo from "./Logo";
import Button from "./Button";

const LINKS = [
  { label: "About", to: "/#about", type: "hash" },
  { label: "Work", to: "/Work", type: "route" },
  { label: "Services", to: "/#services", type: "hash" },
  { label: "Jobs", to: "/#jobs", type: "hash", dot: true },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // Dark Mode State
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <header className="relative z-40 bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="container-page flex items-center justify-between py-6">

        <Logo />

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {LINKS.map((l) =>
            l.type === "hash" ? (
              <HashLink
                key={l.label}
                smooth
                to={l.to}
                className="relative flex items-center gap-1.5 text-sm font-medium text-gray-700 hover:text-black dark:text-gray-300 dark:hover:text-white transition"
              >
                {l.label}
                {l.dot && (
                  <span className="h-1.5 w-1.5 rounded-full bg-indigo-500" />
                )}
              </HashLink>
            ) : (
              <NavLink
                key={l.label}
                to={l.to}
                className="relative flex items-center gap-1.5 text-sm font-medium text-gray-700 hover:text-black dark:text-gray-300 dark:hover:text-white transition"
              >
                {l.label}
              </NavLink>
            )
          )}
        </nav>

        <div className="hidden md:flex items-center gap-4">

          {/* Dark Mode Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="h-10 w-10 rounded-full flex items-center justify-center bg-gray-100 dark:bg-slate-800 transition"
          >
            {darkMode ? (
              <Sun className="text-yellow-400" size={20} />
            ) : (
              <Moon className="text-slate-700" size={20} />
            )}
          </button>

          <Button as={Link} to="/contact">
            Contact Us
          </Button>
        </div>

        {/* Mobile Buttons */}
        <div className="flex md:hidden items-center gap-2">

          <button
            onClick={() => setDarkMode(!darkMode)}
            className="h-10 w-10 rounded-full flex items-center justify-center bg-gray-100 dark:bg-slate-800"
          >
            {darkMode ? (
              <Sun className="text-yellow-400" size={20} />
            ) : (
              <Moon className="text-slate-700" size={20} />
            )}
          </button>

          <button
            className="grid h-10 w-10 place-items-center"
            onClick={() => setOpen(!open)}
          >
            {open ? (
              <X className="dark:text-white" />
            ) : (
              <Menu className="dark:text-white" />
            )}
          </button>

        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden container-page pb-6">
          <div className="flex flex-col gap-4 rounded-2xl p-6 bg-white dark:bg-slate-900 shadow-lg">

            {LINKS.map((l) =>
              l.type === "hash" ? (
                <HashLink
                  key={l.label}
                  smooth
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className="text-gray-700 dark:text-gray-300"
                >
                  {l.label}
                </HashLink>
              ) : (
                <NavLink
                  key={l.label}
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className="text-gray-700 dark:text-gray-300"
                >
                  {l.label}
                </NavLink>
              )
            )}

            <Button as={Link} to="/contact">
              Contact Us
            </Button>

          </div>
        </div>
      )}
    </header>
  );
}