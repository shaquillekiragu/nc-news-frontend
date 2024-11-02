import { useState } from "react";
import Loading from "../components/Loading/Loading";
import "../stylesheets/UserProfile.css";

function UserProfile() {
  const [isLoading, setIsLoading] = useState(true);
  if (isLoading) {
    return (
      <>
        <div className="thinRedBanner"></div>
        <Loading page={"Profile page"} />
      </>
    );
  }
}

export default UserProfile;
