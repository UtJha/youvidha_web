import React from "react";
import { Header, Post } from "../../components";

export default function MiddleCard() {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Header />
      <Post />
    </div>
  );
}
