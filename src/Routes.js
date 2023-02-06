import React from "react";
import Howtocontactus from "pages/Howtocontactus";
import Listedesoprateurs from "pages/Listedesoprateurs";
import Listedespartenaires from "pages/Listedespartenaires";
import Dtailevenement from "pages/Dtailevenement";
import LesvenementsdeYooreed from "pages/LesvenementsdeYooreed";
import PrsentationdeYooreed from "pages/PrsentationdeYooreed";
import Homepage from "pages/Homepage";
import PrsentationdeYooreedOne from "pages/PrsentationdeYooreedOne";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const ProjectRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route
          path="/prsentationdeyooreedone"
          element={<PrsentationdeYooreedOne />}
        />
        <Route path="/homepage" element={<Homepage />} />
        <Route
          path="/prsentationdeyooreed"
          element={<PrsentationdeYooreed />}
        />
        <Route
          path="/lesvenementsdeyooreed"
          element={<LesvenementsdeYooreed />}
        />
        <Route path="/dtailevenement" element={<Dtailevenement />} />
        <Route path="/listedespartenaires" element={<Listedespartenaires />} />
        <Route path="/listedesoprateurs" element={<Listedesoprateurs />} />
        <Route path="/howtocontactus" element={<Howtocontactus />} />
      </Routes>
    </Router>
  );
};
export default ProjectRoutes;
