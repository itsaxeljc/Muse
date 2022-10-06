import "./App.css";
import { Routes, Route } from "react-router-dom";

import { LandingContainer } from "./components/containers/landing_page/landing";
import { NosotrosContainer } from "./components/containers/Nosotros/Nosotros";
import { PreregistroContainer } from "./components/containers/preregistro/preregistro";

function App() {
  return (
      <div className="MainContainerLanding" id="main-container-landing">
        
        <Routes>
          <Route path="nosotros" element={<NosotrosContainer />} />
          <Route path="preregistro" element={<PreregistroContainer />} />
          <Route path="/*" element={<LandingContainer />} />
        </Routes>

     </div>
    );
}

// function HeaderView() {
//   let location = useLocation();
//   console.log(location.pathname);
//   return location.pathname;
// }

export default App;
