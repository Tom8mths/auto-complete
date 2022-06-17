import { lazy, Suspense } from "react";
import { Routes as Router, Route, BrowserRouter } from "react-router-dom";

const Home = lazy(() => import("../../templates/Home"));
const AutoComplete = lazy(() => import("../../templates/AutoCompletePage"));

export const routesPaths = {
  home: "/",
  autoComplete: "/autoComplete",
};

const Routes = () => {
  return (
    <Suspense fallback={<>...</>}>
      <BrowserRouter>
        <Router>
          <Route path={routesPaths.home} element={<Home />} />
        </Router>
        <Router>
          <Route path={routesPaths.autoComplete} element={<AutoComplete />} />
        </Router>
      </BrowserRouter>
    </Suspense>
  );
};

export default Routes;
