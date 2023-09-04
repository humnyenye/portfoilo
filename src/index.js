import React from "react";
import ReactDOM from "react-dom/client";

import CoverPage from "./pages/CoverPage";
import ProfilePage from "./pages/ProfilePage";
import PortfolioPage from "./pages/PortfolioPage";

import "reset-css";
import "./scss/styles.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CoverPage />
    <ProfilePage />
    <PortfolioPage />
  </React.StrictMode>
);
