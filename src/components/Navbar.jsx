import { Link } from "react-router-dom";
import "./navbar.css";

export const Navbar = () => {
  return (
    <div className="navbar">
      <div>
        <img src="./logo.png" alt="cygnus-logo" className="logo" />
      </div>
      <div className="links">
        <Link to="/publications">Publications</Link>
        <Link to="/database">Database</Link>
        <Link to="/contact"> Contact </Link>
        <button className="btn">Sign In</button>
      </div>
    </div>
  );
};
