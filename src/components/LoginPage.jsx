import { useState, useEffect } from "react";
import { useContext } from "react";
import { UsernameContext } from "../contexts/LoginContext";
import { getUsers } from "../api";
import Loading from "./Loading";

function LoginPage() {
  const { username, setUsername } = useContext(UsernameContext);
  const [password, setPassword] = useState("");
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const invalidMsg = document.getElementById("invalid-msg");

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

  function handleSubmit(event) {
    const isValidUsername = users.some((user) => {
      return user.username === username;
    });
    if (!isValidUsername) {
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
      <form action="/articles" onSubmit={handleSubmit}>
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
