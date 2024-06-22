import { useAuth } from "../contexts/UserContext";
import { useNavigate } from "react-router-dom";

function Header() {
  const { authUser, setAuthUser, isLoggedIn, setIsLoggedIn } = useAuth();
  const navigate = useNavigate();

  function handleClick(event) {
    event.preventDefault();
    setAuthUser({});
    setIsLoggedIn(false);
    navigate("/");
  }

  if (isLoggedIn) {
    return (
      <>
        <h1>NC News</h1>
        <p>User logged in: {authUser.username}</p>
        <button onClick={handleClick}>Log Out</button>
      </>
    );
  }
  return (
    <>
      <h1>NC News</h1>
    </>
  );
}

export default Header;
