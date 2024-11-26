import { useState, useEffect } from "react";
import { useAuth } from "../../contexts/UserContext";
import { useNavigate, useLocation, Link } from "react-router-dom";
import ProfileIcon from "../../images/icons/profileIcon.svg";
import "./Header.css";

function Header() {
  const { authUser, setAuthUser, isLoggedIn, setIsLoggedIn } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const [isTakingLoginAction, setIsTakingLoginAction] = useState(false);

  function handleLogoutClick(event) {
    event.preventDefault();
    setAuthUser({});
    setIsLoggedIn(false);
    navigate("/articles");
  }

  function handleLoginClick(event) {
    event.preventDefault();
    navigate("/");
  }

  useEffect(() => {
    setIsTakingLoginAction(
      location.pathname === "/" ||
        location.pathname === "/login" ||
        location.pathname === "/signup"
        ? true
        : false
    );
  }, [location.pathname]);

  if (isTakingLoginAction && isLoggedIn) {
    return (
      <header>
        <div className="errorHeaderContainer">
          <h1 className="nc">NC</h1>
          <p className="errorMessage">
            LOGIN STATE ERROR. PLEASE REFRESH PAGE...
          </p>
        </div>
        <div className="thickRedBanner newsContainer">
          <h1 className="news">News</h1>
        </div>
      </header>
    );
  } else if (isTakingLoginAction) {
    return (
      <header>
        <div className="takingActionContainer">
          <Link className="headerTitleLink" to="/articles">
            <h1 className="nc">NC</h1>
          </Link>
        </div>
        <div className="thickRedBanner newsContainer">
          <Link className="headerTitleLink" to="/articles">
            <h1 className="news">News</h1>
          </Link>
        </div>
      </header>
    );
  } else if (isLoggedIn) {
    return (
      <header>
        <div className="loggedInContainer">
          <Link className="headerTitleLink" to="/articles">
            <h1 className="nc">NC</h1>
          </Link>
          <Link className="profileButton">
            <img alt="Icon" src={ProfileIcon} />
          </Link>
          <p className="userStatus">
            User logged in: <span>{authUser.username}</span>
          </p>
          <button className="logoutButton" onClick={handleLogoutClick}>
            Log Out
          </button>
        </div>
        <div className="redBanner newsContainer">
          <Link className="headerTitleLink" to="/articles">
            <h1 className="news">News</h1>
          </Link>
          <Link className="postButton" to="/create_article">
            Write an article
          </Link>
        </div>
      </header>
    );
  } else {
    return (
      <header>
        <div className="loggedOutContainer">
          <Link className="headerTitleLink" to="/articles">
            <h1 className="nc">NC</h1>
          </Link>
          <button className="loginButton" onClick={handleLoginClick}>
            Login
          </button>
        </div>
        <div className="redBanner newsContainer">
          <Link className="headerTitleLink" to="/articles">
            <h1 className="news">NEWS</h1>
          </Link>
        </div>
      </header>
    );
  }
}

export default Header;
