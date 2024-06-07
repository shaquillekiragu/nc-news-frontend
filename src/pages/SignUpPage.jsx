import { useState } from "react";
import Loading from "../components/Loading";

function SignUpPage() {
  const [isLoading, setIsLoading] = useState();

  if (isLoading) {
    return <Loading page={"Signup page"} />;
  }
  return (
    <>
      <p>
        Welcome to Reddit News! Because, you know, the world definitely needed
        another groundbreaking social network...
      </p>
    </>
  );
}

export default SignUpPage;
