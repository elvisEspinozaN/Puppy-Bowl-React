import React from "react";
import styles from "../styles/NavBar.module.css";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav>
      <h1>Puppy Bowl</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/new-player">New Player</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
