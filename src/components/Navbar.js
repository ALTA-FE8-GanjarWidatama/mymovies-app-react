import React from "react";
import "../../src/style/Navbar.css";

export default function Navbar() {
  return (
    <nav>
      <ul className="menu">
        <li>
          <a href="#!">Home</a>
        </li>
        <li>
          <a href="#!">About</a>
        </li>
        <li>
          <a href="#!">Contact</a>
        </li>
        <li>
          <a href="#!">Faq</a>
        </li>
      </ul>
    </nav>
  );
}
