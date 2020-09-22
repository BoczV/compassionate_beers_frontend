import React from "react";
import "../style/Navbar.css";

export default function NavBar() {
  const cookieValue = document.cookie.split("=")[1];

  function removeCookies() {
    localStorage.clear();
    let res = document.cookie;
    let multiple = res.split(";");
    for (let i = 0; i < multiple.length; i++) {
      let key = multiple[i].split("=");
      document.cookie = key[0] + " =; expires = Thu, 01 Jan 1970 00:00:00 UTC";
    }
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
        </ul>
      </nav>
    </div>
  );
}
