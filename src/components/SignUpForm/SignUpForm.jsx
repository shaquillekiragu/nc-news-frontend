import "./SignUpForm.css";

function SignUpForm({
  handleSubmit,
  handleUsernameChange,
  handleFirstnameChange,
  handleLastnameChange,
  handleAvatarUrlChange,
  handlePasswordChange,
}) {
  return (
    <>
      <h3>Sign Up:</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username: </label>
        <input
          id="username"
          type="text"
          placeholder="Type here..."
          onChange={handleUsernameChange}
          required
        />
        <br />
        <label htmlFor="firstname">First name: </label>
        <input
          id="firstname"
          type="text"
          placeholder="Type here..."
          onChange={handleFirstnameChange}
        />
        <br />
        <label htmlFor="lastname">Last name: </label>
        <input
          id="lastname"
          type="text"
          placeholder="Type here... (optional)"
          onChange={handleLastnameChange}
        />
        <br />
        <label htmlFor="avatar_url">Profile Avatar URL: </label>
        <input
          id="avatar_url"
          type="url"
          placeholder="Type here... (optional)"
          onChange={handleAvatarUrlChange}
        />
        <br />
        <label htmlFor="password">Password: </label>
        <input
          id="password"
          type="password"
          placeholder="Type here..."
          onChange={handlePasswordChange}
          required
        />
        <br />

        <button type="submit">Sign In!</button>
      </form>
    </>
  );
}

export default SignUpForm;
