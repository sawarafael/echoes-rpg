import { Route, Routes } from "react-router-dom";
import Characters from "../pages/Characters";
import Home from "../pages/Home";
import Plot from "../pages/Plot";
import Scenary from "../pages/Scenary";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/scenary" element={<Scenary />} />
      <Route path="/characters" element={<Characters />} />
      <Route path="/plot" element={<Plot />} />
    </Routes>
  );
};

export default AppRoutes;
