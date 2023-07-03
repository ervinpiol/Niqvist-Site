import React from "react";
import Niqvist from "./Niqvist";
import { BrowserRouter as Router } from "react-router-dom";
import { SkeletonTheme } from "react-loading-skeleton";

const App = () => {
  return (
    <SkeletonTheme highlightColor="#444">
      <Router>
        <Niqvist />
      </Router>
    </SkeletonTheme>
  );
};

export default App;
