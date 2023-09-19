import React from "react";
import { Location, Navigation } from "../../components";

const LeftCard = () => {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", marginLeft: "5.8rem" }}
    >
      <Navigation />
      <Location />
    </div>
  );
};

export default LeftCard;
