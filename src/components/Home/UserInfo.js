import React from "react";

export default function UserInfo() {
  return (
    <div className="userInfo">
      <img
        src="https://i.pinimg.com/originals/6e/68/07/6e6807a013c46b7d94cdd7bfc8a8dba1.png"
        alt=""
        className="username-picture"
      />

      <div className="username-info">
        <div className="username">AyushHarshuu</div>
        <div className="follower-count">Followers: 300</div>
      </div>
    </div>
  );
}
