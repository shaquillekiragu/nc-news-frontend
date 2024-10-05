import { useAuth } from "../../contexts/UserContext";
import { useNavigate, useLocation } from "react-router-dom";
import "./Header.css";

function Header() {
  const { authUser, setAuthUser, isLoggedIn, setIsLoggedIn } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  function handleLogoutClick(event) {
    event.preventDefault();
    setAuthUser({});
    setIsLoggedIn(false);
    navigate("/articles");
  }

  function handleSigninClick(event) {
    event.preventDefault();
    navigate("/login_action");
  }

  function handleProfileClick(event) {
    event.preventDefault();
    navigate(`/users/${user_id}`);
  }

  const isTakingLoginAction =
    location.pathname === "/login_action" ? true : false;

  if (isTakingLoginAction && isLoggedIn) {
    return (
      <header>
        <h1>NC News</h1>
        <p id="redErrorMessage">LOGIN STATE ERROR. PLEASE REFRESH PAGE...</p>
      </header>
    );
  } else if (isTakingLoginAction) {
    return (
      <header>
        <h1>NC News</h1>
      </header>
    );
  } else if (isLoggedIn) {
    return (
      <header>
        <h1>NC News</h1>
        <button onClick={handleProfileClick}>Profile</button>
        <p>User logged in: {authUser.username}</p>
        <a href="/articles">All Articles</a>
        <p>Categories:</p>
        <a href="">Coding</a>
        <a href="">Football</a>
        <a href="">Cooking</a>
        <button onClick={handleLogoutClick}>Log Out</button>
      </header>
    );
  } else {
    return (
      <header>
        <h1>NC News</h1>
        <button onClick={handleSigninClick}>Login</button>
        <a href="/articles">All Articles</a>
        <p>Categories:</p>
        <a href="">Coding</a>
        <a href="">Football</a>
        <a href="">Cooking</a>
      </header>
    );
  }
}

export default Header;
