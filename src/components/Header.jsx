import { useAuth } from "../contexts/UserContext";
import { useNavigate, useLocation } from "react-router-dom";

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

  if (isLoggedIn) {
    return (
      <>
        <h1>NC News</h1>
        <p>User logged in: {authUser.username}</p>
        <button onClick={handleLogoutClick}>Log Out</button>
      </>
    );
  }
  if (
    location.pathname === "/" ||
    location.pathname === "/login" ||
    location.pathname === "/signup"
  ) {
    return <h1>NC News</h1>;
  }
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

export default Header;
