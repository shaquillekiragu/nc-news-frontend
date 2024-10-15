import { useState } from "react";
import Loading from "../components/Loading/Loading";
import "../stylesheets/UserProfile.css";

function UserProfile() {
  const [isLoading, setIsLoading] = useState(true);
  if (isLoading) {
    return (
      <div className="thinRedBanner">
        <Loading page={"Profile page"} />
      </div>
    );
  }
}

export default UserProfile;
