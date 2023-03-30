import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./styles/header.styles.css";

export const Header = () => {
  return (
    <header className="header">
      <Link className="links" to="/">
        <h1 className="blog-name">The Code_World</h1>
      </Link>
    </header>
  );
};
