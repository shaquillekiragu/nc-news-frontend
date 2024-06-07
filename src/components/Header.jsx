function Header() {
  const user = undefined;

  if (user) {
    return (
      <>
        <h1>Reddit News</h1>
        <p>User logged in: </p>
      </>
    );
  }
  return <h1>Reddit News</h1>;
}

export default Header;
