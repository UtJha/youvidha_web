import React from "react";
import { Navbar, LeftCard, MiddleCard, RightBox } from "../../components";

export default function Home() {
  return (
    <>
      <Navbar />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "5rem",
          alignItems: "initial",
        }}
      >
        <LeftCard />
        <MiddleCard />
        <RightBox />
      </div>
    </>
  );
}
