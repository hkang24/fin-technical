import "./Navbar.css";
import Logo from "./Logo.js"

function NavBar() {
  return (
    <nav className="nav nav-back">
    <Logo/>
      <div className="navLinkGroup">
        <a className="navLink expert ">Find an Expert</a>
        <a className="navLink link-text">Manage Account</a>
        <a className="navLink link-text">Sign Out</a>
      </div>
    </nav>
  );
}

export default NavBar;
