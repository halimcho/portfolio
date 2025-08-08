import { useState, useEffect } from "react";
import { Menu, X, Globe } from "lucide-react";

const navigationItems = {
  ko: [
    { href: "#home", label: "홈" },
    { href: "#about", label: "소개" },
    { href: "#education", label: "교육" },
    { href: "#skills", label: "기술" },
    { href: "#projects", label: "프로젝트" },
    { href: "#contact", label: "연락처" }
  ],
  en: [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#education", label: "Education" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" }
  ]
};

const toggleLanguage = (currentLang: string) => {
  return currentLang === "ko" ? "en" : "ko";
};

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [language, setLanguage] = useState("ko");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      const scrollY = window.scrollY;

      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop - 100;
        const sectionId = section.getAttribute("id");
        
        if (scrollY >= sectionTop && sectionId) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full bg-slate-900/80 backdrop-blur-sm z-50 border-b border-slate-800">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="text-xl font-bold text-white">조하림</div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigationItems[language].map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className={`transition-colors ${
                  activeSection === item.href.slice(1)
                    ? "text-white"
                    : "text-slate-300 hover:text-white"
                }`}
              >
                {item.label}
              </button>
            ))}
            
            {/* Language Toggle */}
            <button
              onClick={() => setLanguage(toggleLanguage(language))}
              className="flex items-center space-x-1 px-3 py-1 rounded-full bg-slate-700 hover:bg-slate-600 transition-colors text-slate-300 hover:text-white"
              title={language === "ko" ? "Switch to English" : "한국어로 변경"}
            >
              <Globe size={14} />
              <span className="text-sm">{language.toUpperCase()}</span>
            </button>
          </div>

          {/* Mobile Controls */}
          <div className="md:hidden flex items-center space-x-3">
            {/* Mobile Language Toggle */}
            <button
              onClick={() => setLanguage(toggleLanguage(language))}
              className="flex items-center space-x-1 px-2 py-1 rounded-full bg-slate-700 hover:bg-slate-600 transition-colors text-slate-300 hover:text-white"
            >
              <Globe size={12} />
              <span className="text-xs">{language.toUpperCase()}</span>
            </button>
            
            {/* Mobile Menu Button */}
            <button
              className="text-white"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-2">
              {navigationItems[language].map((item) => (
                <button
                  key={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className={`text-left py-2 transition-colors ${
                    activeSection === item.href.slice(1)
                      ? "text-white"
                      : "text-slate-300 hover:text-white"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
