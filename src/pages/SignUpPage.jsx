import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/UserContext";
import { postUser } from "../api";
import SignUpForm from "../components/SignUpForm/SignUpForm";
import "../stylesheets/SignUpPage.css";

function SignUpPage() {
  const [hasPosted, setHasPosted] = useState(true);
  const [hasInputtedInfo, setHasInputtedInfo] = useState(false);
  const [username, setUsername] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [avatarUrl, setAvatarUrl] = useState("");
  const [password, setPassword] = useState("");

  const { authUser, setAuthUser, isLoggedIn, setIsLoggedIn } = useAuth();

  const navigate = useNavigate();

  async function handleSubmit(event) {
    try {
      event.preventDefault();
      setHasInputtedInfo(true);
      setHasPosted(false);
      const fullName = lastname ? `${firstname} ${lastname}` : firstname;

      console.log(username, "<< username");
      console.log(fullName, "<< fullName");
      console.log(avatarUrl, "<< avatarUrl");

      await postUser(username, fullName, avatarUrl);
      setHasPosted(true);
      setAuthUser({ username: username });
      setIsLoggedIn(true);
      console.log(authUser, "authUser");
      console.log(isLoggedIn, "isLoggedIn");
      navigate("/articles");
    } catch (err) {
      console.error(err);
    }
  }

  function handleUsernameChange(event) {
    setUsername(event.target.value);
  }

  function handleFirstnameChange(event) {
    setFirstname(event.target.value);
  }

  function handleLastnameChange(event) {
    setLastname(event.target.value);
  }

  function handleAvatarUrlChange(event) {
    setAvatarUrl(event.target.value);
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

  if (hasInputtedInfo && (!hasPosted || !isLoggedIn)) {
    return (
      <p>
        <em>Signing you in...</em>
      </p>
    );
  }
  return (
    <>
      <p>Welcome to NC News!</p>
      <SignUpForm
        handleSubmit={handleSubmit}
        handleUsernameChange={handleUsernameChange}
        handleFirstnameChange={handleFirstnameChange}
        handleLastnameChange={handleLastnameChange}
        handleAvatarUrlChange={handleAvatarUrlChange}
        handlePasswordChange={handlePasswordChange}
      />
    </>
  );
}

export default SignUpPage;
