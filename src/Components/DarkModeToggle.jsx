import PropTypes from "prop-types";
import * as stylex from "@stylexjs/stylex";
import { styles, darkModeStyles } from "../stylex.jsx";

const DarkModeToggle = ({ darkMode, setDarkMode }) => {
  return (
    <button
      data-testid="dark-mode-toggle"
      {...stylex.props(styles.button, darkModeStyles)}
      onClick={() => setDarkMode(!darkMode)}
    >
      {darkMode ? "♠︎♣︎" : "♡♢"}
    </button>
  );
};

DarkModeToggle.propTypes = {
  darkMode: PropTypes.bool.isRequired,
  setDarkMode: PropTypes.func.isRequired,
};

export default DarkModeToggle;
