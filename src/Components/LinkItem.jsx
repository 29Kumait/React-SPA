import * as stylex from "@stylexjs/stylex";
import { Link } from "react-router-dom";
import { gridStyle } from "../stylex.jsx";
import PropTypes from "prop-types";

function LinkItem({ to, children }) {
  return (
    <Link to={to} {...stylex.props(gridStyle.item)}>
      {children}
    </Link>
  );
}

LinkItem.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default LinkItem;
