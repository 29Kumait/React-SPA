import { Routes, Route } from "react-router-dom";
import PropTypes from "prop-types"; // Import PropTypes

function AppRoutes({ routes }) {
  return (
    <Routes>
      {routes.map((route, index) => (
        <Route key={index} path={route.path} element={route.component} />
      ))}
    </Routes>
  );
}

AppRoutes.propTypes = {
  routes: PropTypes.arrayOf(
    PropTypes.shape({
      path: PropTypes.string.isRequired,
      component: PropTypes.element.isRequired,
    }),
  ).isRequired,
};

export default AppRoutes;
