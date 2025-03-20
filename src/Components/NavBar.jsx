import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/NavBar.module.css";

function NavBar() {
  return (
    <nav className={styles.nav}>
      <Link to="/" className={styles.logo}>
        Puppy Bowl
      </Link>
      <div className={styles.links}>
        <Link to="/" className={styles.link}>
          Home
        </Link>
        <Link to="/new-player" className={styles.link}>
          Add Player
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;
