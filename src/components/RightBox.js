import React from "react";

const RightBox = () => {
  return (
    <>
      <div className="flex-col mr-16 bg red ">
        <div className="flex w-56 mt-3 ml-2 box-border border-2 rounded-lg shadow-2xl">
          <input
            className="flex-1 h-6 w-40"
            type="search"
            name="search-bar"
            placeholder="search"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="20"
            fill="currentColor"
            class="bi bi-search"
            viewBox="0 0 16 16"
          >
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
          </svg>
        </div>
        <div className="container flex box-border rounded-lg  w-80 p-4 border-2 my-4 shadow-2xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="24"
            fill="currentColor"
            class="bi bi-person-circle"
            viewBox="0 0 16 16"
          >
            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
            <path
              fill-rule="evenodd"
              d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
            />
          </svg>
          <p className="mx-2">UserName</p>
        </div>
        <div className="container rounded-lg w-80 p-4 border-2 shadow-2xl">
          <h2>What's Happening</h2>
          <h4 className="my-2">Content</h4>
          <hr />
          <h4 className="my-2">Content</h4>
          <hr />
          <h4 className="my-2">Content</h4>
        </div>
      </div>
    </>
  );
};

export default RightBox;
