import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/UserContext";
import { getUsers } from "../api";
import Loading from "../components/Loading/Loading";
import "../stylesheets/LoginPage.css";

function LoginPage() {
  const [users, setUsers] = useState([]);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [invalidMsg, setInvalidMsg] = useState(false);
  const [hasAttemptedLogin, setHasAttemptedLogin] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const navigate = useNavigate();
  const { authUser, setAuthUser, isLoggedIn, setIsLoggedIn } = useAuth();

  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await getUsers();
        setUsers(response.data.users);
        setIsLoading(false);
      } catch (err) {
        console.error(err);
        setIsLoading(false);
      }
    }
    fetchUsers();
  }, []);

  function handleUsernameChange(event) {
    setUsername(event.target.value);
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    setHasAttemptedLogin(true);
    const isValidUsername = users.some((user) => {
      return user.username === username;
    });
    if (isValidUsername) {
      setAuthUser({ username: username });
      setIsLoggedIn(true);
      setInvalidMsg(false);
      navigate("/articles");
    } else {
      setInvalidMsg(true);
    }
  }

  if (isLoading && !hasAttemptedLogin) {
    return <Loading page={"Login page"} />;
  }
  return (
    <>
      <div className="thinRedBanner"></div>
      <p>Welcome to NC News!</p>
      <h3>Login:</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username: </label>
        <input
          placeholder="Enter your username..."
          value={username}
          id="username"
          type="text"
          onChange={handleUsernameChange}
          required
        />
        <br />
        <label htmlFor="password">Password: </label>
        <input
          placeholder="Enter your password..."
          value={password}
          id="password"
          type="password"
          onChange={handlePasswordChange}
          required
        />
        <br />
        <button type="submit" className="logButton">
          Login
        </button>
      </form>
      {invalidMsg ? (
        <span id="invalidMsg">
          Invalid username. Please enter in a valid username.
        </span>
      ) : (
        <></>
      )}
    </>
  );
}

export default LoginPage;
