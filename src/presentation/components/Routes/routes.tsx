import { lazy, Suspense } from "react";
import { Routes as Router, Route, BrowserRouter } from "react-router-dom";

const Home = lazy(() => import("../../templates/Home"));
const MoviesPage = lazy(() => import("../../../pages/movies"));

export const routesPaths = {
  home: "/",
  moviesPage: "/movies-page",
};

const Routes = () => {
  return (
    <Suspense fallback={<>...</>}>
      <BrowserRouter>
        <Router>
          <Route path={routesPaths.home} element={<Home />} />
        </Router>
        <Router>
          <Route path={routesPaths.moviesPage} element={<MoviesPage />} />
        </Router>
      </BrowserRouter>
    </Suspense>
  );
};

export default Routes;
