import { useState, useEffect } from "react";
import { useAuth } from "../../contexts/UserContext";
import { useNavigate, useLocation, Link } from "react-router-dom";
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

  function handleProfileClick(event) {
    event.preventDefault();
    navigate(`/users/${user_id}`);
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
          <Link className="headerTitleLink" to="/articles">
            <h1 className="nc">NC</h1>
          </Link>
          <p className="errorMessage">
            LOGIN STATE ERROR. PLEASE REFRESH PAGE...
          </p>
        </div>
        <div className="thickRedBanner newsContainer">
          <Link className="headerTitleLink" to="/articles">
            <h1 className="news">News</h1>
          </Link>
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
          <button className="profileButton" onClick={handleProfileClick}>
            Profile
          </button>
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
