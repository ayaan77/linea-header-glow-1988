import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import StatusBar from "./StatusBar";
import Navigation from "./Navigation";

const Header = () => {
  const [isStatusBarVisible, setIsStatusBarVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isTransparent = isHomePage && !isScrolled;

  return (
    <header className="w-full sticky top-0 z-50">
      {isStatusBarVisible && (
        <StatusBar onClose={() => setIsStatusBarVisible(false)} />
      )}
      <Navigation isTransparent={isTransparent} />
    </header>
  );
};

export default Header;
