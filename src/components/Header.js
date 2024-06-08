// src/components/Header.js
import React from "react";
import { Link } from 'react-router-dom';
import "./Header.css";

const Header = () => (
  <header>
    <nav
      className="
        bg-systemgray6
        font-systemgray6
        d-flex
        justify-content-center
        gap-4
        py-2
        font-small
        no-font-style"
    >
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/work">Work</Link>
      <Link to="/research">Research</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  </header>
);

export default Header;
