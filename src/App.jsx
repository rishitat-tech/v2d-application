import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashboardLayout from "./layout/DashboardLayout";
import Home from "./pages/Home";
import V2DHome from "./pages/V2DResourceHub/V2DHome";
import ResourceSection from "./pages/V2DResourceHub/ResourceSection";
import DashboardGuide from "./pages/V2DResourceHub/DashboardGuide";
import Quiz from "./pages/V2DResourceHub/Quiz";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashboardLayout />}>
          <Route index element={<Home />} />

          <Route path="v2d-resource-hub" element={<V2DHome />} />
          <Route
            path="v2d-resource-hub/mv"
            element={<ResourceSection sectionName="MV" />}
          />
          <Route
            path="v2d-resource-hub/ego"
            element={<ResourceSection sectionName="EGO" />}
          />
          <Route
            path="v2d-resource-hub/object-scanning"
            element={<ResourceSection sectionName="Object Scanning" />}
          />
          <Route
            path="v2d-resource-hub/dashboard-guide"
            element={<DashboardGuide />}
          />
          <Route path="v2d-resource-hub/quiz" element={<Quiz />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
