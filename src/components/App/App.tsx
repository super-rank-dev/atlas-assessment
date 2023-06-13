import type { FC } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Agents from "../Agents/Agents";
import AddAgentPage from "../Agents/AddAgent";

const App: FC = () => {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<Agents />} />
          <Route path="/add-agent" element={<AddAgentPage />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
