import React, { useState } from "react";

function Navbar() {
  const [showProfilePopup, setShowProfilePopup] = useState(false);

  const toggleProfilePopup = () => {
    setShowProfilePopup(!showProfilePopup);
  };
  return (
    <>
      <div className="navbar bg-base-100 rounded-lg p-1">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a href="/home">Homepage</a>
              </li>
              <li>
                <a href="/">login</a>
              </li>
              <li>
                <a href="/signup">signup</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="navbar-center">
          <a className="btn btn-ghost text-xl">Welcome</a>
        </div>
        <div className="navbar-end">
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
              <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >

              <li>
              <label className="block mb-2 text-sm font-bold">
                Name:
              </label>
              <p className="px-3 py-2  border rounded-lg  ">
                John Doe
              </p>
              </li>
              <li>
              <label className="block mb-2 text-sm font-bold">
                Email:
              </label>
              <p className="px-3 py-2 border rounded-lg">
                john.doe@example.com
              </p>
              </li>
              <li>
              <label className="block mb-2 text-sm font-bold">
                Mobile Number:
              </label>
              <p className="px-3 py-2 border rounded-lg">
                123-456-7890
              </p>
              </li>
              <li className="mt-2">
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

    </>
  );
}

export default Navbar;
