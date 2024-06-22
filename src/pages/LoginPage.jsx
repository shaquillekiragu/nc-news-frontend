import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/UserContext";
import { getUsers } from "../api";
import Loading from "../components/Loading";

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
        console.log(err);
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
      console.log(authUser, "authUser");
      console.log(isLoggedIn, "isLoggedIn");
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
      <p>
        Welcome to NC News! Because you know, the world definitely needed
        another groundbreaking news network...
      </p>
      <h3>Login:</h3>
      <form action="" onSubmit={handleSubmit}>
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
        <button type="submit">Login</button>
      </form>
      {invalidMsg ? (
        <span id="invalid-msg">
          Invalid username. Please enter in a valid username.
        </span>
      ) : (
        <></>
      )}
    </>
  );
}

export default LoginPage;
