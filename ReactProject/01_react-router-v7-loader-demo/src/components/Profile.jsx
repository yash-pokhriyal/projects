import React from "react";
import { useLoaderData } from "react-router-dom";

const Profile = () => {
  // console.log("user data:",useLoaderData())
  const user = useLoaderData();
  return (
    <>
      <div className="profile-card">
        <h2>Github Profile</h2>
        <img src={user.avatar_url} alt="av" width={100} />
      </div>
      <p>
        <strong>Username:</strong> {user.login}
      </p>
      <p>
        <strong>Bio:</strong> {user.bio}
      </p>
      <p>
        <strong>Followers:</strong> {user.followers}
      </p>
      <p>
        <strong>Following:</strong> {user.following}
      </p>
      <a href={user.html_url} target="_blank" rel="noreferrer">
        View on GitHub
      </a>
    </>
  );
};

export default Profile;

// link internal react app
// and jab naya tab me krna to anchor use krenge
