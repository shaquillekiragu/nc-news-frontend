import { useState } from "react";
import { useAuth } from "../contexts/UserContext";
import { postUser } from "../api";
import SignUpForm from "../components/SignUpForm";

function SignUpPage() {
  const [postedUser, setPostedUser] = useState({});
  const [hasPosted, setHasPosted] = useState(true);
  const [hasInputtedInfo, setHasInputtedInfo] = useState(false);
  const [usernameInput, setUsernameInput] = useState("");
  const [firstnameInput, setFirstnameInput] = useState("");
  const [lastnameInput, setLastnameInput] = useState("");
  const [avatarUrlInput, setAvatarUrlInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");

  const { authUser, setAuthUser, isLoggedIn, setIsLoggedIn } = useAuth();

  function handleSubmit(event) {
    event.preventDefault();
    setHasInputtedInfo(true);
    setHasPosted(false);
    const inputtedName = lastnameInput
      ? `${firstnameInput} ${lastnameInput}`
      : firstnameInput;

    setPostedUser({
      username: usernameInput,
      name: inputtedName,
      avatar_url: avatarUrlInput,
    });

    postUser(postedUser.username, postedUser.name, postedUser.avatar_url)
      .then(() => {
        setHasPosted(true);
        setAuthUser({ username: postedUser.username });
        setIsLoggedIn(true);
        console.log(authUser, "authUser");
        console.log(isLoggedIn, "isLoggedIn");
        navigate("/articles");
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleUsernameChange(event) {
    event.preventDefault();
    setUsernameInput(event.target.value);
    console.log(usernameInput, "usernameInput");
  }

  function handleFirstnameChange(event) {
    event.preventDefault();
    setFirstnameInput(event.target.value);
    console.log(firstnameInput, "firstnameInput");
  }

  function handleLastnameChange(event) {
    event.preventDefault();
    setLastnameInput(event.target.value);
    console.log(lastnameInput, "lastnameInput");
  }

  function handleAvatarUrlChange(event) {
    event.preventDefault();
    setAvatarUrlInput(event.target.value);
    console.log(avatarUrlInput, "avatarUrlInput");
  }

  function handlePasswordChange(event) {
    event.preventDefault();
    setPasswordInput(event.target.value);
    console.log(passwordInput, "passwordInput");
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
      <p>
        Welcome to Reddit News! Because, you know, the world definitely needed
        another groundbreaking social network...
      </p>
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
