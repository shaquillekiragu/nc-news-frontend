import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/UserContext";
import { getUsers } from "../api";
import Loading from "../components/Loading";

function LoginPage() {
  const [users, setUsers] = useState([]);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const navigate = useNavigate();
  const { authUser, setAuthUser, isLoggedIn, setIsLoggedIn } = useAuth();

  useEffect(() => {
    getUsers()
      .then((response) => {
        setUsers(response.data.users);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function handleUsernameChange(event) {
    setUsername(event.target.value);
  }

  const invalidMsg = document.getElementById("invalid-msg");

  function handleSubmit(event) {
    const isValidUsername = users.some((user) => {
      return user.username === username;
    });
    if (isValidUsername) {
      event.preventDefault();
      setAuthUser(username);
      setIsLoggedIn(true);
      console.log(authUser, "authUser 2");
      console.log(isLoggedIn, "isLoggedIn 2");
      navigate("/articles");
    } else {
      event.preventDefault();
      invalidMsg.style.visibility = "visible";
    }
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

  if (isLoading) {
    return <Loading page={"Login page"} />;
  }
  return (
    <>
      <p>
        Welcome to Reddit News! Because, you know, the world definitely needed
        another groundbreaking social network...
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
          type="text"
          onChange={handlePasswordChange}
          required
        />
        <br />
        <button type="submit">Login</button>
      </form>
      <span id="invalid-msg">
        Invalid username. Please enter in a valid username.
      </span>
    </>
  );
}

export default LoginPage;
