import React from "react";

export default function Navbar() {
  return (
    <>
      <div>
        <nav className="bg-yellow-300">
          <ul className="flex justify-between px-2 py-2">
            <li className="cursor-pointer">Menu</li>

            <li>Profile</li>
            <li className="cursor-pointer">Settings</li>
          </ul>
        </nav>
      </div>

    </>
  );
}
