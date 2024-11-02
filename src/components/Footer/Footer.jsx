import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./Footer.css";

function Footer() {
  const location = useLocation();
  const [isOnInitialPages, setIsOnInitialPages] = useState(true);

  useEffect(() => {
    setIsOnInitialPages(
      location.pathname === "/" ||
        location.pathname === "/login_action" ||
        location.pathname === "/login" ||
        location.pathname === "/signup"
        ? true
        : false
    );
  }, [location.pathname]);

  if (!isOnInitialPages) {
    return (
      <>
        <footer></footer>
      </>
    );
  }
}

export default Footer;
