import React from "react";

const Header = () => {
  return (
    <div className="navbar z-10 fixed top-0 left-0 right-0">
      <div className="navbar-start">
        <a href="/" className="btn btn-ghost normal-case text-xl font-mono">
          ZAM
        </a>
      </div>

      <div className="navbar-end">
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0 text-black-200 font-mono">
          <li>
              <a href="/website">Websites</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="https://mail.google.com/mail/u/0/?hl=en&tf=cm&fs=1&to=mamun73009@gmail.com">Contact</a>
            </li>
            <li>
              <a href="https://github.com/HarunPHero"><i class="fa fa-github" style={{fontSize:"36px"}}></i></a>
            </li>
           
          </ul>
        </div>
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-yellow-30 rounded-box w-52 text-black-200 font-mono"
          >
            <li>
              <a href="/website">Websites</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="https://mail.google.com/mail/u/0/?hl=en&tf=cm&fs=1&to=mamun73009@gmail.com">Contact</a>
            </li>
            <li>
              <a href="https://github.com/HarunPHero"><i class="fa fa-github" style={{fontSize:"36px"}}></i></a>
            </li>
           
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
