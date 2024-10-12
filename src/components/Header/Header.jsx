import { useState, useEffect } from "react";
import { useAuth } from "../../contexts/UserContext";
import { useNavigate, useLocation } from "react-router-dom";
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
    navigate("/login_action");
  }

  function handleProfileClick(event) {
    event.preventDefault();
    navigate(`/users/${user_id}`);
  }

  useEffect(() => {
    setIsTakingLoginAction(
      location.pathname === "/login_action" ||
        location.pathname === "/login" ||
        location.pathname === "/signup"
        ? true
        : false
    );
  }, [location.pathname]);

  if (isTakingLoginAction && isLoggedIn) {
    return (
      <header>
        <div className="headerContainerOne errorHeader">
          <h1 className="nc">NC</h1>
          <p className="errorMessage">
            LOGIN STATE ERROR. PLEASE REFRESH PAGE...
          </p>
        </div>
        <div className="redBanner headerContainerTwo">
          <h1 className="news">News</h1>
        </div>
      </header>
    );
  } else if (isTakingLoginAction) {
    return (
      <header>
        <div className="headerContainerOne takingAction">
          <h1 className="nc">NC</h1>
        </div>
        <div className="redBanner headerContainerTwo">
          <h1 className="news">News</h1>
        </div>
      </header>
    );
  } else if (isLoggedIn) {
    return (
      <header>
        <div className="headerContainerOne loggedIn">
          <h1 className="nc">NC</h1>
          <button className="profileButton" onClick={handleProfileClick}>
            Profile
          </button>
          <p className="userStatus">User logged in: {authUser.username}</p>
          <button className="logoutButton" onClick={handleLogoutClick}>
            Log Out
          </button>
        </div>
        <div className="redBanner headerContainerTwo">
          <h1 className="news">News</h1>
        </div>
      </header>
    );
  } else {
    return (
      <header>
        <div className="headerContainerOne loggedOut">
          <h1 className="nc">NC</h1>
          <button className="loginButton" onClick={handleLoginClick}>
            Login
          </button>
        </div>
        <div className="redBanner headerContainerTwo">
          <h1 className="news">News</h1>
        </div>
      </header>
    );
  }
}

export default Header;
