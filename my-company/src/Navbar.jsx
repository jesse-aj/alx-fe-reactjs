import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      style={{
        background: "#333",
        padding: "10px",
        display: "flex",
        gap: "15px",
      }}
    >
      <Link to="/" style={{ color: "white", textDecoration: "none" }}>
        Home
      </Link>
      <Link to="/About" style={{ color: "white", textDecoration: "none" }}>
        About
      </Link>
      <Link to="/Services" style={{ color: "white", textDecoration: "none" }}>
        Services
      </Link>
      <Link to="/Contact" style={{ color: "white", textDecoration: "none" }}>
        Contact
      </Link>
    </nav>
  );
}

export default Navbar;
