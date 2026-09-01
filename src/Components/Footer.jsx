import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <span>G & E · 2026</span>
      <Link to="/gift">Gift Page</Link>
    </footer>
  );
};

export default Footer;
