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
      <header className="headerContainer errorHeader">
        <h1 className="item title">
          <span className="nc">NC</span>
          <span className="news">News</span>
        </h1>
        <p className="item errorMessage" id="redErrorMessage">
          LOGIN STATE ERROR. PLEASE REFRESH PAGE...
        </p>
      </header>
    );
  } else if (isTakingLoginAction) {
    return (
      <header className="headerContainer takingAction">
        <h1 className="item title">
          <span className="nc">NC</span>
          <span className="news">News</span>
        </h1>
      </header>
    );
  } else if (isLoggedIn) {
    return (
      <header className="headerContainer loggedIn">
        <h1 className="item title">
          <span className="nc">NC</span>
          <span className="news">News</span>
        </h1>
        <button className="item profileButton" onClick={handleProfileClick}>
          Profile
        </button>
        <p className="item userStatus">User logged in: {authUser.username}</p>
        <button className="item logoutButton" onClick={handleLogoutClick}>
          Log Out
        </button>
      </header>
    );
  } else {
    return (
      <header className="headerContainer loggedOut">
        <h1 className="item title">
          <span className="nc">NC</span>
          <span className="news">News</span>
        </h1>
        <button className="item loginButton" onClick={handleLoginClick}>
          Login
        </button>
      </header>
    );
  }
}

export default Header;
