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
    navigate("/");
  }

  function handleSigninClick(event) {
    event.preventDefault();
    navigate("/");
  }

  const isOnUserAccounts =
    location.pathname === "/" ||
    location.pathname === "/login" ||
    location.pathname === "/signup"
      ? true
      : false;

  if (isOnUserAccounts && isLoggedIn) {
    return (
      <>
        <h1>NC News</h1>
        <p className="red-error-message">
          LOGIN STATE ERROR. PLEASE REFRESH PAGE...
        </p>
      </>
    );
  } else if (isOnUserAccounts) {
    return <h1>NC News</h1>;
  } else if (isLoggedIn) {
    return (
      <>
        <h1>NC News</h1>
        <p>User logged in: {authUser.username}</p>
        <button onClick={handleLogoutClick}>Log Out</button>
      </>
    );
  } else {
    return (
      <>
        <h1>NC News</h1>
        <p>
          <em>No user signed in</em>
        </p>
        <button onClick={handleSigninClick}>Sign In</button>
      </>
    );
  }
}

export default Header;
