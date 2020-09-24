import React, { useContext, useState, useEffect } from "react";
import "../style/Navbar.css";
import { LoggedInContext } from "../context/LoggedInContext";
import { Link } from "react-router-dom";

export default function NavBar() {
  const [isLoggedIn, setIsLoggedIn] = useContext(LoggedInContext);
  const [cookieValue, setCookieValue] = useState(document.cookie.split("=")[1]);

  function removeCookies() {
    localStorage.clear();
    let res = document.cookie;
    let multiple = res.split(";");
    for (let i = 0; i < multiple.length; i++) {
      let key = multiple[i].split("=");
      document.cookie = key[0] + " =; expires = Thu, 01 Jan 1970 00:00:00 UTC";
    }
  }

  function logout() {
    removeCookies();
    setIsLoggedIn(false);
    localStorage.removeItem("username");
    localStorage.removeItem("roles");
  }

  return (
    <div className="header">
      <p className="home" href="/" id="logo">
        Beers
      </p>

      <nav>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/random">Random beer</a>
          </li>
          {isLoggedIn ? (
            <li>
              <Link onClick={() => logout()} to={"/"}>
                Log out
              </Link>
            </li>
          ) : (
            <li>
              <Link to={"/login-register"}>Login|Register</Link>
            </li>
          )}
        </ul>
      </nav>
    </div>
  );
}
