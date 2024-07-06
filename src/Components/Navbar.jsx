import { Link } from "react-router-dom";
import * as stylex from "@stylexjs/stylex";
import { nav } from "../stylex";
import PropTypes from "prop-types";

const Navbar = ({ activeLink, setActiveLink, isMenuOpen }) => {
  const navItems = ["home", "projects", "more"].map((item) => (
    <Link
      key={item}
      to={`/${item}`}
      {...stylex.props(nav.navItem, activeLink === item && nav.activeNavItem)}
      onClick={() => setActiveLink(item)}
    >
      {item.charAt(0).toUpperCase() + item.slice(1)}
    </Link>
  ));

  return (
    <div
      data-testid="navbar"
      style={{ display: isMenuOpen ? "block" : "none" }}
    >
      {navItems}
    </div>
  );
};

Navbar.propTypes = {
  activeLink: PropTypes.string.isRequired,
  setActiveLink: PropTypes.func.isRequired,
  isMenuOpen: PropTypes.bool.isRequired,
};

export default Navbar;
