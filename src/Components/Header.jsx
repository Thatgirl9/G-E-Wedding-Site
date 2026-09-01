import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header className="site-header">
      <Link className="brand" to="/">
        G <span>&</span> E
      </Link>

      <nav>
        <Link className="gift-link" to="/gift">
          Gift Page
        </Link>
      </nav>
    </header>
  );
};

export default Header;
