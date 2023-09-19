import React from "react";

export default function Location() {
  return (
    <div class="loc">
      <div class="location-search">
        <input
          type="text"
          id="location-bar"
          placeholder="Enter Location........"
        />
      </div>
      <div class="current-location-container">
        <div class="current-location">
          <img
            src="https://v2z7z5w4.rocketcdn.me/wp-content/uploads/2021/05/map.png"
            alt=""
            class="location-image"
          />
        </div>
        <div class="location-info">
          <div class="location">Current Location</div>
        </div>
      </div>
      <div class="text-location-container">
        <div class="text-location">
          <img
            src="https://v2z7z5w4.rocketcdn.me/wp-content/uploads/2021/05/map.png"
            alt=""
            class="address-image"
          />
        </div>
        <div class="text-location-info">
          <div class="address">Add Manually</div>
        </div>
      </div>
    </div>
  );
}
