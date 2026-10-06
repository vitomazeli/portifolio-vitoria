import {
  HashRouter,
  Routes,
  Route,
} from "react-router-dom";

import App from "./App";
import ProjectPage from "./ProjectPage";

function Router() {
  return (
    <HashRouter>

      <Routes>

        <Route
          path="/"
          element={<App />}
        />

        <Route
          path="/projetos/:slug"
          element={<ProjectPage />}
        />

      </Routes>

    </HashRouter>
  );
}

export default Router;