import React from "react";
import { SearchBar, UserInfo } from "../../components";

const RightBox = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          marginRight: "6rem",
        }}
      >
        <SearchBar />
        <UserInfo />
      </div>
    </>
  );
};

export default RightBox;
