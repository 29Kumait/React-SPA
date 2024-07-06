// src/routes.jsx
import MainPage from "./Pages/MainPage";
import ProjectPage from "./Pages/ProjectPage";
import MorePage from "./Pages/MorePage";
import MuseumPage from "./Pages/MuseumPage";
import StarredPage from "./Pages/StarredPage";

const routes = [
  { path: "/", component: <MainPage /> },
  { path: "/home", component: <MainPage /> },
  { path: "/projects", component: <ProjectPage /> },
  { path: "/more", component: <MorePage /> },
  { path: "/museum", component: <MuseumPage /> },
  { path: "/starred", component: <StarredPage /> },
];

export default routes;
