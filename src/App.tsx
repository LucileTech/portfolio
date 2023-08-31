import "./App.css";
import HomePortfolio from "./pages/HomePortfolio";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<HomePortfolio />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
