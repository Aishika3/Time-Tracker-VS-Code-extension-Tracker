import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Projects/Home/home";
import ListOfProjects from "../Projects/List of Projects-Section/listofprojects";
import VisualRepresentation from "../Projects/time-tracker-section/visual-representation/visualrepresentation";
import { Login } from "../Projects/Users/Login_Page/login";

const PageRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/list-of-projects" element={<ListOfProjects />} />
        <Route
          path="/visual-representation"
          element={<VisualRepresentation />}
        />
        <Route path="/log-in" element={<Login />} />
      </Routes>
    </div>
  );
};

export default PageRoutes;
